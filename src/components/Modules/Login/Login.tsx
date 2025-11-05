"use client";
import { loginUser } from "@/services/authService";
// import { loginUser } from "@/services/authService";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // const searchParams = useSearchParams();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    // console.log(data);
    try {
      const res = await loginUser(data);
      console.log(res.data.accessToken);

      if (res.data.accessToken) {
        toast.success(res.message);
        // alert(res.message);
        localStorage.setItem("accessToken", res.data.accessToken);
        // router.push("/");
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      }
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="bg-[#f1e2ff] h-screen bg-[url('https://res.cloudinary.com/dsc0hliud/image/upload/v1757741594/1_lldrej.png')] bg-cover bg-center  w-full flex justify-center items-center">
      <div className="md:w-1/2 2xl:w-1/4 w-full px-6 sm:px-12 md:px-6 ">
        <h1 className="text-center text-4xl font-bold mb-7">
          Login <span className="text-[#6800af]">Here</span>
        </h1>
        {/* <div className=""> */}
        {/* <div>
          <Image
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1710130697~exp=1710134297~hmac=f1b21d9c1823a0657d339c256a1c4ad8301168480e35b35aeba5106568a21010&w=740"
            width={500}
            height={200}
            alt="login page"
            className="w-full h-auto"
          />
        </div> */}

        <div
          className="bg-white py-10
          px-7 rounded-lg"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              {/* <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label> */}
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-full"
                required
              />
            </div>

            <div className="mb-6">
              {/* <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label> */}
              <input
                id="password"
                type="password"
                {...register("password")}
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-full"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="portfolio-btn w-full rounded-full"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#6800af] hover:underline">
              Create an account
            </Link>
          </p>

          <p className="text-center mt-6 text-sm text-gray-500">
            Or Sign Up Using
          </p>

          {/* Social Login Buttons */}
          {/* <div className="flex justify-center gap-4 mt-4"> */}
          {/* <button
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
            >
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={30}
                height={30}
                alt="Google logo"
              />
            </button> */}
          {/* <button
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={25}
                height={25}
                alt="GitHub logo"
              />
            </button> */}
          {/* </div> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
