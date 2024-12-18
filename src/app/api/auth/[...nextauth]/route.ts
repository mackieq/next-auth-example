import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter";
import {ProxyAgent} from "proxy-agent";



const handler = NextAuth({
    debug: true,
    providers: [
        TwitterProvider({
            clientId: process.env.AUTH_TWITTER_ID || "",
            clientSecret: process.env.AUTH_TWITTER_SECRET || "",
            version: "2.0", // opt-in to Twitter OAuth 2.0
            httpOptions: {
                agent: process.env.NEXT_PUBLIC_ENV === 'prod'
                    ? undefined
                    : new ProxyAgent({host: 'http://127.0.0.1', port: 7890}) // 在开发环境使用代理
            },
        })
    ],

    secret: process.env.AUTH_SECRET, // 用于加密 session 和 JWT
    callbacks: {
        async redirect({url, baseUrl}) {
            console.log("============" + url);
            console.log("0000000000000" + baseUrl);
            // 如果提供了自定义 URL，返回该 URL，否则跳转到首页
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
    },
});

export {handler as GET, handler as POST}