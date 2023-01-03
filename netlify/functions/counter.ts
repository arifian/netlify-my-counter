import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

let counter = 0;

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  counter++;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: counter }),
  };
};

export { handler };
