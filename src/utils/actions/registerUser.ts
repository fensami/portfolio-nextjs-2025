"use server"

import { UserData } from "@/lib/types";


export const userRegister = async (data: UserData) => {
    // const res = await fetch(`${process.env.BACKEND_URL}/user/create-user`, {

    const res = await fetch(`${process.env.BACKEND_URL}/api/user/create-user`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data),
        cache: "no-store"
    });
    const userInfo = await res.json();
    if (!userInfo) throw new Error("Failed to register user");
    return userInfo;

}
