import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing-old'
// import Pricing from '@/components/Pricing'
// import {
//   getSession,
//   getSubscription,
//   getActiveProductsWithPrices
// } from '@/app/supabase-server';
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Demo } from '@/components/Demo'

export default async function Home() {
  // const [session, products, subscription] = await Promise.all([
  //   getSession(),
  //   getActiveProductsWithPrices(),
  //   getSubscription()
  // ]);
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Pricing
          session={session}
          user={session?.user}
          products={products}
          subscription={subscription}
        /> */}
        <Demo />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
