"use client";
import Link from "next/link";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import FormWrapper from "../../../../../components/Form/FormWrapper";
import UInput from "../../../../../components/Form/UInput";
import { toast } from "sonner";


export default function LoginForm() {
  const router = useRouter();
  const onLoginSubmit = async (data) => {
     try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
    
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || 'Login failed');
        return;
      }

      // LOGIN SUCCESS
      toast.success('Login successful');

      // token save korte chaile:
      localStorage.setItem('accessToken', result?.data?.accessToken);

      router.push('/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="w-full rounded-md border bg-white px-6 py-8 shadow-none shadow-primary-blue/10">
      <section className="mb-8 flex flex-col items-center justify-center space-y-2">
        {/* <Image src={logo} alt="logo" width={100} height={100} /> */}
        <h4 className="text-3xl font-semibold text-black">
          Welcome to Wizkid Games!
        </h4>
        <p className="text-center text-black/90">Sign in to your account</p>
      </section>

      <FormWrapper onSubmit={onLoginSubmit} >
        <UInput
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          size="large"
          className="!h-10"
          labelStyles={{ fontWeight: "500" }}
        />

        <UInput
          name="password"
          label="Password"
          type="password"
          placeholder="*************"
          size="large"
          className="!mb-0 !h-10"
          labelStyles={{ fontWeight: "500" }}
        />

        <Button
          htmlType="submit"
          type="primary"
          size="large"
          className="!h-10 w-full !font-semibold"
          style={{
            background: "linear-gradient(90deg, #000000 0%, #000000 100%)",
          }}
          // loading={isLoading}
        >
          Log In
        </Button>

        <Link
          href="/forgot-password"
          className="mt-2 block text-center font-medium text-black hover:text-primary-blue/85"
        >
          I forgot my password
        </Link>
      </FormWrapper>
    </div>
  );
}
