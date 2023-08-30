// 'use client'

import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { MobileNavigation } from './MobileNavigation'
// import SignOutButton from './ui/Navbar/SignOutButton';
import SignOutButton from './SignOutButton';

import { createServerSupabaseClient } from '@/app/supabase-server';

export async function Header() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#demo">Demo</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              {/* <NavLink href="/login">Sign in</NavLink> */}
              {/* <NavLink href="/signin">Sign in</NavLink> */}
              {user ? (
                <SignOutButton />
              ) : (
                <NavLink href="/signin">
                  Sign in
                </NavLink>
              )}
            </div>
            {/* <Button href="/register" color="blue">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button> */}
            <div className="-mr-1 md:hidden">
              <MobileNavigation user={user}/>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
