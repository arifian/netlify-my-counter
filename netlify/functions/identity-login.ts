// why this function is not called by netlify dev
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async function (event: HandlerEvent, context: HandlerContext) {
    const { identity, user } = context.clientContext;
    console.log('logging');
    console.log(identity);
    console.log(user);
    // Do stuff and return a response...
    return {
        statusCode: 200,
        body: JSON.stringify({ user: user, identity: identity }),
    };
};

export { handler };

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzMyMzc0NzksInN1YiI6IjllMzZmMmIzLTc4N2UtNDJjNC05MjMwLTllNjhlYjQwNzUyMSIsImVtYWlsIjoiYXJpZmlhbi5yYWhhcmRpYW5kYUB6ZW5pdXNlZHVjYXRpb24uY29tIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwifSwidXNlcl9tZXRhZGF0YSI6eyJmdWxsX25hbWUiOiJhcmlmaWFuIn19.4xEAdZHkC2kWJ442HG9txmwdXoc1_P_RyPNRqIaxHl0
// curl 'https://peppy-crisp-d7abfa.netlify.app/.netlify/identity/user' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:108.0) Gecko/20100101 Firefox/108.0' -H 'Accept: */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Referer: https://peppy-crisp-d7abfa.netlify.app/' -H 'X-Use-Cookie: 1' -H 'Content-Type: application/json' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzMyMzc0NzksInN1YiI6IjllMzZmMmIzLTc4N2UtNDJjNC05MjMwLTllNjhlYjQwNzUyMSIsImVtYWlsIjoiYXJpZmlhbi5yYWhhcmRpYW5kYUB6ZW5pdXNlZHVjYXRpb24uY29tIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwifSwidXNlcl9tZXRhZGF0YSI6eyJmdWxsX25hbWUiOiJhcmlmaWFuIn19.4xEAdZHkC2kWJ442HG9txmwdXoc1_P_RyPNRqIaxHl0' -H 'Connection: keep-alive' -H 'Cookie: nf_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzMyMzc0NzksInN1YiI6IjllMzZmMmIzLTc4N2UtNDJjNC05MjMwLTllNjhlYjQwNzUyMSIsImVtYWlsIjoiYXJpZmlhbi5yYWhhcmRpYW5kYUB6ZW5pdXNlZHVjYXRpb24uY29tIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwifSwidXNlcl9tZXRhZGF0YSI6eyJmdWxsX25hbWUiOiJhcmlmaWFuIn19.4xEAdZHkC2kWJ442HG9txmwdXoc1_P_RyPNRqIaxHl0' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Sec-GPC: 1' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'TE: trailers'
