import Image from "next/image";
import { Button } from '@/components/ui/button';
import { SignInButton, SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <SignedOut>
        <SignInButton mode="modal">Sign Up</SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>Logout</SignOutButton>
      </SignedIn>
    </div>
  );
}
