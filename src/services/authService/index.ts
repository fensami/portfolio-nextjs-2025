"use server";

import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { FormValues } from "@/components/Modules/Login/Login";
import { UserData } from "@/lib/types";


/*==== Register User ====*/
export const userRegister = async (data: UserData) => {
    // const res = await fetch(`${process.env.BACKEND_URL}/user/create-user`, {

    const res = await fetch(`${process.env.BACKEND_URL}/user/create-user`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data),
        cache: "no-store"
    });
    const userInfo = await res.json();
    console.log(userInfo);

    if (!userInfo) throw new Error("Failed to register user");
    return userInfo;

}

/*==== Login User ====*/
export const loginUser = async (data: FormValues) => {
    // const res = await fetch(`${process.env.BACKEND_URL}/login`, {
    const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
    });

    const userInfo = await res.json();
    console.log(userInfo);


    if (userInfo.success) {
        (await cookies()).set("accessToken", userInfo.data.accessToken)
    }

    return userInfo;
};

/*==== Get User ====*/
export const getCurrentUser = async () => {

    const accessToken = (await cookies()).get("accessToken")?.value;
    let decodedData = null;

    if (accessToken) {
        decodedData = (await jwtDecode(accessToken));
        return decodedData;
    }
    else {
        return null
    }
}


// LogOut 
export const logout = async () => {
    (await cookies()).delete("accessToken");
};