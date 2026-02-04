import { registerAs } from '@nestjs/config';

export interface IEnv {
    // Example
    //   MONGO_URI: string;
    //   PORT: number;
    //   DEV_ENVIRONMENT: string;
    //   FRONTEND_URL: string;
    //   OPEN_AI_API_SECRATE: string;
    //   AI_ROOT_URL: string;
    //   SERVER_URL: string;

    //   JWT: {
    //     JWT_ACCESS_SECRATE: string;
    //     JWT_REFRESH_SECRATE: string;
    //   };
}

const requiredEnv = [

];
// env Checker
function envChecker() {
    requiredEnv.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`❌ Missing required env: ${key}`);
        }
    });
}

export default registerAs('env', (): IEnv => {
    envChecker();

    return {

        // example
        // STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY!,
        // STRIPT_PUBLISHABLE_KEY: process.env.STRIPT_PUBLISHABLE_KEY!,
        // STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET!,

        // JWT: {
        //   JWT_ACCESS_SECRATE: process.env.JWT_ACCESS_SECRATE!,
        //   JWT_REFRESH_SECRATE: process.env.JWT_REFRESH_SECRATE!,
        // },

    };
});
