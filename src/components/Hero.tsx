import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"

const PhoneModel = dynamic(() => import("@/components/PhoneModel"), { ssr: false })

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
          <div className="space-y-4 lg:space-y-6">
            <div className="text-xs sm:text-sm font-medium text-white tracking-wider uppercase">NEW</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
            Master the
              <br />
                Game   Before
              <br />
             It Begins.
            </h1>
          </div>

          <Button className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-md w-full sm:w-auto">
            $299 - Pre-order
          </Button>
        </div>

        {/* 3D Model */}
        <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-pulse bg-gray-200 rounded-lg w-32 h-48"></div>
              </div>
            }
          >
            <PhoneModel />
          </Suspense>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 sm:mt-16 lg:mt-20 pt-6 lg:pt-8 border-t border-gray-200">
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider text-center lg:text-left">
          A 3D WEBSITE CONCEPT
          <br />
          CodeSage.
        </p>
      </div>
    </div>
  )
}
