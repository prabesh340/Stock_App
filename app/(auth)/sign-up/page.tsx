"use client";
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import InputFields from "@/components/forms/InputFields";
import SelectField from "@/components/forms/SelectField";
import FotterLink from "@/components/forms/FooterLink";

import { Button } from "@/components/ui/button";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "",
      investmentGoals: "",
      riskTolerance: "",
      preferredIndustry: "",
    },
    mode: "onBlur",
  });
  const onsubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-5 ">
        <InputFields
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{
            required: "Full name is required",
            minLength: {
              value: 2,
              message: "Full name must be at least 2 characters",
            },
          }}
        />
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
          placeholder="Enter a strong password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password is required",
            minLength: { value: 8, message: "Atleast 8 characters long" },
          }}
        />
        <CountrySelectField
          name="country"
          label="Country"
          control={control}
          error={errors.country}
          required
        />

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goals"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />

        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk level"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred Industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Creating account" : "Star Your Investment Journey"}
        </Button>
        <FotterLink text="Already have an account?" linkText="Sign in" href="/sign-in"/>
      </form>
    </>
  );
};

export default SignUp;
