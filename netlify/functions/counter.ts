import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

let counter = 0;

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod === 'POST') {
    counter++;
    return {
      statusCode: 200,
      body: JSON.stringify({ count: counter }),
    };
  } else if (event.httpMethod === 'GET') {
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
