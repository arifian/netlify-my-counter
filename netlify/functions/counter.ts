import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import * as mysql from 'mysql2';

// create the connection pool
const pool = mysql.createPool(process.env.DATABASE_URL);

let counter: number;

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod === 'POST') {
    // acquire a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error acquiring connection: ' + err.stack);
        return;
      }

      // retrieve the count from the database
      connection.query('SELECT count FROM counters WHERE id = 1', (error, results, fields) => {
        if (error) throw error;
        counter = results[0].count;

        // update the counter value
        counter++;

        // save the new counter value to the database
        connection.query('UPDATE counters SET count = ? WHERE id = 1', [counter], (error, results, fields) => {
          if (error) throw error;

          // release the connection back to the pool
          connection.release();

          // return the updated count to the client
        });
      });
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ count: counter }),
    };
  } else if (event.httpMethod === 'GET') {
    // acquire a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error acquiring connection: ' + err.stack);
        return;
      }

      // retrieve the current count from the database
      connection.query('SELECT count FROM counters WHERE id = 1', (error, results, fields) => {
        if (error) throw error;
        counter = results[0].count;

        // release the connection back to the pool
        connection.release();

        // return the current count to the client
      });
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ count: counter }),
    };
  } else {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }
};

export { handler };
