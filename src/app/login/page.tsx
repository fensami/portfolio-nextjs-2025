"use client";

import Login from "@/components/Modules/Login/Login";
import React, { Suspense } from "react";

const LoginPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    </>
  );
};

export default LoginPage;
