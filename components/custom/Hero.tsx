"use client" 
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import DotPattern from "../magicui/dot-pattern"
import AnimatedShinyText from "../magicui/animated-shiny-text"

export default function Hero() {
  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden pt-12 pb-8">
      <div className="z-10 flex items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          )}
          role="button"
          aria-label="Introducing Magic UI"
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Welcome There! ✨</span>
          </AnimatedShinyText>
        </div>
      </div>
      <h1 className="z-10 bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text py-6 text-5xl font-bold leading-none tracking-tighter text-center text-balance sm:text-6xl md:text-7xl lg:text-8xl">
        Level up your online presence with a skilled Software Engineer
      </h1>
      <Avatar className="w-44 h-44 z-50">
        <AvatarImage className="object-cover " src="/avatar.sjpg" alt="Profile" />
        <AvatarFallback className="text-foreground">SE</AvatarFallback>
      </Avatar>
      <DotPattern
        className={cn("[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]")}
        aria-hidden="true"
      />
    </div>
  )
}