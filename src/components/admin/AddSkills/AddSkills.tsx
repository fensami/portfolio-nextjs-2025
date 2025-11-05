/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TSkillData } from "@/lib/types";
import { createSkill } from "@/services/skillService";
import { SubmitHandler, useForm } from "react-hook-form";

const AddSkills = () => {
  const form = useForm<TSkillData>();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<TSkillData> = async (data: TSkillData) => {
    // console.log("DATA", data);

    try {
      const res = await createSkill(data);
      // console.log(res);

      if (res?.success) {
        alert("skill Create Successfully");
        // toast.success(res?.message);
      } else {
        // toast.error(res?.message);
        alert("Error");
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div className="border-2 border-gray-300 rounded-xl container mx-auto  w-full p-5">
      <div className="flex justify-center items-center  text-center ">
        {/* <Logo /> */}
        <div>
          <h1 className="text-3xl font-semibold">
            Wow, you learned a new skill. 🤩
          </h1>
          <p className="text-2xl  text-green-500 mt-2">Great, add it now.</p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ""}
                    placeholder="Add Skill Name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="logoImage"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Image Link</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    {...field}
                    value={field.value || ""}
                    placeholder="Add Image Link"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <Button type="submit">Create Skill</Button> */}
          <Button
            // disabled={passwordConfirm && password !== passwordConfirm}
            type="submit"
            className="mt-5 w-full"
          >
            {isSubmitting ? "Creating..." : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddSkills;
