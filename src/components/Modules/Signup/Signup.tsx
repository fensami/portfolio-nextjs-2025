"use client";
import { UserData } from "@/lib/types";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { userRegister } from "@/services/authService";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const router = useRouter();

  const onSubmit = async (data: UserData) => {
    try {
      const res = await userRegister(data);
      console.log(res);

      if (res.success) {
        toast.success(res.message);
        router.push("/login");
      }

      // console.log("res", res);
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="bg-[#f1e2ff] h-screen bg-[url('https://res.cloudinary.com/dsc0hliud/image/upload/v1757741594/1_lldrej.png')] bg-cover bg-center  w-full flex justify-center items-center">
      <div className="md:w-1/2 2xl:w-1/4 w-full px-6 sm:px-12 md:px-6 ">
        <h1 className="text-center text-4xl font-bold mb-7">
          Register <span className="text-[#6800af]">Now</span>
        </h1>
        <div className=" ">
          {/* <div className="relative mx-auto w-[200px] h-[200px] lg:w-[500px] lg:h-[300px]">
          <Image
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1710081713~exp=1710085313~hmac=f637c194f1f143e63a84950cbf978997453777c872adf4aebbbecdaa445601a1&w=740"
            fill
            alt="login page"
            className=" object-cover"
          />
        </div> */}

          <div
            className=" bg-white py-10
          px-7 rounded-lg"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                {/* <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label> */}
                <input
                  type="text"
                  {...register("user.name")}
                  placeholder="User Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-full"
                  required
                />
              </div>

              <div className="mb-4">
                {/* <label className="block text-gray-700 font-medium mb-2">
                Email
              </label> */}
                <input
                  type="email"
                  {...register("user.email")}
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-full "
                  required
                />
              </div>

              <div className="mb-6">
                {/* <label className="block text-gray-700 font-medium mb-2">
                Password
              </label> */}
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-full "
                  required
                />
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full border border-[#6800af] text-[#6800af] font-semibold py-2 px-4 rounded-full shadow-md hover:bg-[#6800af] hover:text-white transition-all duration-400 ease-in-out cursor-pointer"
                >
                  Register
                </button>
              </div>

              <p className="text-center text-gray-600">
                Already have an account?{" "}
                <Link className="text-[#6800af] hover:underline" href="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
