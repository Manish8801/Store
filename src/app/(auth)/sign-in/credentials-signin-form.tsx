"use client";

import { signInWithCredentials } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const DEFAULT_VALUES = {
  email: "",
  password: "",
};

const CredentialsSignInForm = () => {
  const callbackUrl = useSearchParams().get("callbackUrl") || "/";
  const [data, action] = useActionState(signInWithCredentials, {
    message: "",
    success: false,
  });

  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant={"default"}>
        {pending ? "Signing In..." : "Sign In"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
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
        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        <div>
          <SignInButton />
        </div>
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" target="_self">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
