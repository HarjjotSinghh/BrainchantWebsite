import { Button } from "@/components/ui/button"
import Image from "next/image"
import LandingPageLottie from "./landing-page-lottie"
import SearchBar from "./search-bar"
import { Skeleton } from "../ui/skeleton"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <section className="lg:h-screen h-auto lg:pt-0 mt-0 lg:mt-[-64px] pt-24 flex justify-center items-center lg:flex-row-reverse flex-col xl:gap-16 gap-4 px-4 lg:px-8">
          <div className="">
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to <span className="font-bold ">Brainchant</span>.
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Learn from the best, become the best.
              </p>
              <div className="w-full flex justify-center items-center pt-4">
                <SearchBar></SearchBar>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <LandingPageLottie></LandingPageLottie>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 px-4 lg:px-12 bg-foreground/[2%] dark:bg-zinc-800">
          <div className="container px-4 md:px-6 space-y-12">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-5xl">Featured Courses</h2>
            <div className="flex flex-wrap gap-12 justify-start items-center">
              <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[270px] xl:w-[300px] p-6 rounded-xl shadow-lg shadow-foreground/5">
                <Skeleton className="w-full aspect-square rounded-xl"></Skeleton>
                <h3 className="text-xl font-semibold mt-4">Course 1</h3>
                <p className="text-foreground/60 max-w-[200px]">A short description of the course with some important details.</p>
                <Button variant={"secondary"} className="mt-4">Enroll Now</Button>
              </div>
              <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[270px] xl:w-[300px] p-6 rounded-xl shadow-lg shadow-foreground/5">
                <Skeleton className="w-full aspect-square rounded-xl"></Skeleton>
                <h3 className="text-xl font-semibold mt-4">Course 1</h3>
                <p className="text-foreground/60 max-w-[200px]">A short description of the course with some important details.</p>
                <Button variant={"secondary"} className="mt-4">Enroll Now</Button>
              </div>
              <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[270px] xl:w-[300px] p-6 rounded-xl shadow-lg shadow-foreground/5">
                <Skeleton className="w-full aspect-square rounded-xl"></Skeleton>
                <h3 className="text-xl font-semibold mt-4">Course 1</h3>
                <p className="text-foreground/60 max-w-[200px]">A short description of the course with some important details.</p>
                <Button variant={"secondary"} className="mt-4">Enroll Now</Button>
              </div>
              <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[270px] xl:w-[300px] p-6 rounded-xl shadow-lg shadow-foreground/5">
                <Skeleton className="w-full aspect-square rounded-xl"></Skeleton>
                <h3 className="text-xl font-semibold mt-4">Course 1</h3>
                <p className="text-foreground/60 max-w-[200px]">A short description of the course with some important details.</p>
                <Button variant={"secondary"} className="mt-4">Enroll Now</Button>
              </div>
              <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[270px] xl:w-[300px] p-6 rounded-xl shadow-lg shadow-foreground/5">
                <Skeleton className="w-full aspect-square rounded-xl"></Skeleton>
                <h3 className="text-xl font-semibold mt-4">Course 1</h3>
                <p className="text-foreground/60 max-w-[200px]">A short description of the course with some important details.</p>
                <Button variant={"secondary"} className="mt-4">Enroll Now</Button>
              </div>
              <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[270px] xl:w-[300px] p-6 rounded-xl shadow-lg shadow-foreground/5">
                <Skeleton className="w-full aspect-square rounded-xl"></Skeleton>
                <h3 className="text-xl font-semibold mt-4">Course 1</h3>
                <p className="text-foreground/60 max-w-[200px]">A short description of the course with some important details.</p>
                <Button variant={"secondary"} className="mt-4">Enroll Now</Button>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-5xl">Testimonials</h2>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-foreground/[2%] dark:bg-zinc-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-5xl">Meet Our Team</h2>
          </div>
        </section> */}
      </main>
    </div>
  )
}

