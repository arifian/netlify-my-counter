// identity-login.ts
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async function (event: HandlerEvent, context: HandlerContext) {
    const { identity, user } = context.clientContext;
    console.log('logging');

    console.log('\ncontext\n');
    console.log(context);

    console.log('==============================');

    console.log('\nevent\n');
    console.log(event);


    return {
        statusCode: 200,
    };
};

export { handler };
