// identity-login.ts
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async function (event: HandlerEvent, context: HandlerContext) {
    const { identity, user } = context.clientContext;
    console.log('logging');
    console.log(identity);
    console.log(user);
    console.log('clientContext');
    console.log(clientContext);
    // Do stuff and return a response...
    return {
        statusCode: 200,
    };
};

export { handler };
