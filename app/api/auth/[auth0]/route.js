import { handleAuth } from '@auth0/nextjs-auth0';

export async function generateStaticParams() {
    return ['login', 'logout', 'callback', 'me'].map((value) => {
        return { auth0: value };
    });
}

export const GET = handleAuth();
