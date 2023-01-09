// identity-login.ts
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async function (event: HandlerEvent, context: HandlerContext) {
    const { identity, user } = context.clientContext;
    console.log('logging');

    console.log('context');
    console.log(context);

    return {
        statusCode: 200,
    };
};

export { handler };
