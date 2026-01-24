"use client";

import { signUpUser } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const DEFAULT_VALUES = {
  password: "",
  confirmPassword: "",
  email: "",
  name: "",
};

const SignUpForm = () => {
  const callbackUrl = useSearchParams().get("callbackUrl") || "/";
  const [data, action] = useActionState(signUpUser, {
    message: "",
    success: false,
  });

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant={"default"}>
        {pending ? "Signing Up..." : "Sign Up"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <Label
          htmlFor="name"
          className="flex flex-col justify-start items-start"
        >
          Name
          <Input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={DEFAULT_VALUES.name}
          />
        </Label>
        <Label
          htmlFor="email"
          className="flex flex-col justify-start items-start"
        >
          Email
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={DEFAULT_VALUES.email}
          />
        </Label>

        <Label
          htmlFor="password"
          className="flex flex-col justify-start items-start"
        >
          Password
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={DEFAULT_VALUES.password}
          />
        </Label>
        <Label
          htmlFor="confirm-password"
          className="flex flex-col justify-start items-start"
        >
          Confirm Password
          <Input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            required
            autoComplete="password"
            defaultValue={DEFAULT_VALUES.confirmPassword}
          />
        </Label>
        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        <div>
          <SignUpButton />
        </div>
        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" target="_self">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
