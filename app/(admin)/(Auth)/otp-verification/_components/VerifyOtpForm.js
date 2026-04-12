"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormWrapper from "../../../../../components/Form/FormWrapper";
import UOtpInput from "../../../../../components/Form/UOtpInput";
import { Button } from "antd";

export default function VerifyOtpForm() {
  const router = useRouter();

  const onSubmit = async (data) => {

  };

  return (
    <div className="w-full rounded-md border bg-white px-6 py-8">
      <Link
        href="/login"
        className="flex-center-start mb-4 gap-x-2 font-medium hover:text-primary-blue/85"
      >
        <ArrowLeft size={18} /> Back to login
      </Link>

      <section className="mb-8 flex flex-col items-center justify-center space-y-2">
        <h4 className="text-3xl font-semibold">Verify OTP</h4>
        <p className="text-center">
          Enter the otp that we&apos;ve sent to your email
        </p>
      </section>

      <FormWrapper onSubmit={onSubmit}>
        <UOtpInput name="otp" />

        <Button
          type="primary"
          size="large"
          className="!h-10 w-full !font-semibold"
          style={{
            background: "#000000",
          }}
          htmlType="submit"
        >
          Submit
        </Button>
      </FormWrapper>
    </div>
  );
}
