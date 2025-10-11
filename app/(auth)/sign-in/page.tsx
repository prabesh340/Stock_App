"use client";
import InputFields from "@/components/forms/InputFields";
import FotterLink from "@/components/forms/FooterLink";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onsubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Sign In</h1>
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
        <InputFields
          name="email"
          label="Email"
          placeholder="example@gmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^\w+@\w+\.\w{2,3}$/,
              message: "Email address is required",
            },
          }}
        />

        <InputFields
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password is required",
            minLength: { value: 8, message: "Atleast 8 characters long" },
          }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>
        <FotterLink
          text="Don't have an account?"
          linkText="Sign up"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignIn;
