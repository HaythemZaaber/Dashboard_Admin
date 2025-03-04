import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import settingSchemaForm from "../../Schemas/settingSchemaForm";
import Input from "../UI/Input";

const SettingsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm({
    resolver: zodResolver(settingSchemaForm),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col sm:flex-row sm:gap-5 my-10">
        <div className="flex-1 lg:px-3 xl:px-10 w-full">
          <Input
            label="Full Name"
            placeholder="Please enter your full name"
            name="fullName"
            register={register}
            error={errors.fullName}
          />
          <Input
            label="Address"
            placeholder="Please enter your address"
            name="address"
            register={register}
            error={errors.address}
          />
          <Input
            label="Password"
            placeholder="Please enter your password"
            type="password"
            name="password"
            register={register}
            error={errors.password}
          />
        </div>
        <div className="flex-1 lg:px-3 xl:px-10 w-full">
          <Input
            label="Email"
            placeholder="Please enter your email"
            type="email"
            name="email"
            register={register}
            error={errors.email}
          />
          <Input
            label="Phone Number"
            placeholder="+1  |  Please enter your phone number"
            type="tel"
            name="phoneNumber"
            register={register}
            error={errors.phoneNumber}
          />
        </div>
      </div>
      <div className="flex justify-center w-full sm:w-[50vw] lg:w-[30vw] mx-auto gap-5">
        <button
          onClick={() => {
            reset();
            clearErrors();
          }}
          type="button"
          className="text-primary px-5 py-3 rounded-xl bg-white border border-primary flex-grow font-semibold cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-primary px-5 py-3 rounded-xl text-white flex-grow font-semibold cursor-pointer"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default SettingsForm;
