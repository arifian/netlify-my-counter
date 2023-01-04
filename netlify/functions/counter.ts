import * as dotenv from 'dotenv';
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import * as mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection(process.env.DATABASE_URL);

let counter: number;

// retrieve the count from the database
connection.query('SELECT count FROM counters WHERE id = 1', function (error, results, fields) {
  if (error) throw error;
  counter = results[0].count;
});


const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod === 'POST') {
    counter++;
    // save the new counter value to the database
    connection.query('UPDATE counters SET count = ? WHERE id = 1', [counter], function (error, results, fields) {
      if (error) throw error;
    });
          // return the updated count to the client
    return {
        statusCode: 200,
        body: JSON.stringify({ count: counter }),
      };
  } else if (event.httpMethod === 'GET') {
    // retrieve the current count from the database
    connection.query('SELECT count FROM counters WHERE id = 1', function (error, results, fields) {
      if (error) throw error;
      return {
        statusCode: 200,
        body: JSON.stringify({ count: results[0].count }),
      };
    });
  } else {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }
};

export { handler };
