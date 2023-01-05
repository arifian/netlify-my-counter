// why this function is not called by netlify dev
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async function (event: HandlerEvent, context: HandlerContext) {
    const { identity, user } = context.clientContext;
    console.log('logging');
    console.log(identity);
    console.log(user);
    console.log("hello " + user);
    // Do stuff and return a response...
    return {
        statusCode: 200,
    };
};

export { handler };
