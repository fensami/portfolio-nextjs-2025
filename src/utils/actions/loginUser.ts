// "use server";

// // import { FormValues } from "@/app/login/page";
// import { cookies } from "next/headers";
// import { jwtDecode } from "jwt-decode";
// import { FormValues } from "@/components/Modules/Login/Login";


// export const loginUser = async (data: FormValues) => {
//     // const res = await fetch(`${process.env.BACKEND_URL}/login`, {
//     const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//         cache: "no-store",
//     });

//     const userInfo = await res.json();
//     // console.log(userInfo);
//     if (userInfo.success) {
//         (await cookies()).set("accessToken", userInfo.data.accessToken)
//     }

//     return userInfo;
// };


// export const getCurrentUser = async () => {
//     const accessToken = (await cookies()).get("accessToken")?.value;
//     let decodedData = null;

//     if (accessToken) {
//         decodedData = (await jwtDecode(accessToken));
//         return decodedData;
//     }
//     else {
//         return null
//     }
// }



