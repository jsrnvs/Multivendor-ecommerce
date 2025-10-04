import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
    matcher: [
        // Allow static assets
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

        // ✅ Apply middleware to all API routes EXCEPT `/api/inngest`
        '/api/(?!inngest).*',

        // Apply to trpc routes
        '/trpc(.*)',
    ],
};
