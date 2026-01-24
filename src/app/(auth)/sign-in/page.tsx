import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect, RedirectType } from "next/navigation";
import { auth } from "../../../../auth";
import CredentialsSignInForm from "./credentials-signin-form";

export const metadata: Metadata = {
  title: "Sign In",
};
type Props = {
  searchParams: Promise<{ callbackUrl: string }>;
};

export default async function SignInPage(props: Props) {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();

  if (session) return redirect(callbackUrl || "/", RedirectType.replace);

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href={"/"} className="flex items-center justify-center">
            <Image
              src={"/images/logo.svg"}
              height={100}
              width={100}
              alt={`${APP_NAME}`}
              priority={true}
            />
          </Link>
          <CardTitle className="text-center">
            <CardDescription className="text-center">
              Sign In to your account
            </CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CredentialsSignInForm />
        </CardContent>
      </Card>
    </div>
  );
}
