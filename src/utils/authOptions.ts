// import { NextAuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: NextAuthOptions = {
//     providers: [
//         GitHubProvider({
//             clientId: process.env.GITHUB_ID as string,
//             clientSecret: process.env.GITHUB_SECRET as string,
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID as string,
//             clientSecret: process.env.GOOGLE_SECRET as string,
//         }),
//         // CredentialsProvider({
//         //     name: "Credentials",
//         //     credentials: {
//         //         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         //         password: { label: "Password", type: "password" },
//         //     },
//         //     async authorize(credentials, req) {
//         //         // ✅ Your login logic here
//         //         const res = await fetch("http://localhost:3001/api/login", {
//         //             method: "POST",
//         //             body: JSON.stringify(credentials),
//         //             headers: { "Content-Type": "application/json" },
//         //         });

//         //         const user = await res.json();
//         //         console.log(user);

//         //         if (res.ok && user) {
//         //             return user; // must be an object { id, name, email, ... }
//         //         }
//         //         return null;
//         //     },
//         // }),
//     ],
//     pages: {
//         signIn: "/login",
//     },
//     secret: process.env.NEXTAUTH_SECRET,
// };
