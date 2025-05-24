"use client"
// import dynamic from "next/dynamic"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"

// const PhoneModel = dynamic(() => import("@/components/PhoneModel"), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
    </div>
  )
}
