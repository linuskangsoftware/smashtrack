"use client";

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { Gamepad2 } from "lucide-react"

export default function SmashTrackLanding() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Gamepad2 />
            <span className="text-xl font-bold">
              SmashTrack
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white" onClick={() => window.open("https://github.com/linuskangsoftware/smashtrack", "_blank")}>
              Github
            </Button>
            <Button
              className="default"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          </div>
        </div>
      </header>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 h-[28rem] w-[28rem] rounded-full bg-gradient-to-r from-emerald-400/60 to-blue-500/60 blur-2xl" />
            <div className="absolute bottom-1/3 right-1/3 h-[28rem] w-[28rem] rounded-full bg-gradient-to-r from-blue-500/60 to-purple-600/60 blur-2xl" />
          </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Master Your{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Badminton
              </span>{" "}
              Game
            </h1>

            <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              SmashTrack is made for you and your friends to easily record match scores, track progress, and analyze performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => router.push("/login")}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}