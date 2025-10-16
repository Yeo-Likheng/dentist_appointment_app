"use client";

import { useState } from "react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react"; // icons

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="DentWise Logo"
            width={32}
            height={32}
            className="w-11"
          />
          <span className="font-semibold text-lg">DentWise</span>
        </Link>

        {/* NAV LINKS - visible on medium+ screens */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            How it Works
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Pricing
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            About
          </a>
        </div>

        {/* AUTH BUTTONS - hidden on small screens */}
        <div className="hidden md:flex items-center gap-3">
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button size="sm">Sign Up</Button>
          </SignUpButton>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-t border-border/50 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col items-center gap-4 py-6">
            <a href="#" className="text-foreground hover:text-primary">
              How it Works
            </a>
            <a href="#" className="text-foreground hover:text-primary">
              Pricing
            </a>
            <a href="#" className="text-foreground hover:text-primary">
              About
            </a>

            <div className="flex flex-col gap-2 w-4/5 mt-4">
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm" className="w-full">
                  Login
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm" className="w-full">
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
