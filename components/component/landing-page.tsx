import { Button } from "@/components/ui/button"
import Image from "next/image"
import LandingPageLottie from "./landing-page-lottie"
import { SearchBar } from "../ui/search-bar"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <section className="lg:h-screen h-auto lg:pt-0 mt-0 lg:mt-[-20px] pt-24 flex justify-center items-center lg:flex-row-reverse flex-col xl:gap-16 gap-4 px-4 lg:px-8">
          <div className="">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to <span className="font-bold">Brainchant</span>.
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Learn from the best, become the best.
              </p>
              <div className="w-full flex justify-center items-center">
                <SearchBar></SearchBar>
              </div>
              <Button variant={"outline"}>Get Started</Button>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <LandingPageLottie></LandingPageLottie>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-foreground/[2%] dark:bg-zinc-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Courses</h2>
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <Image
                  alt="Course 1"
                  className="object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-xl font-semibold mt-2">Course 1</h3>
                <p className="text-gray-500">This is a short description of the course.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <blockquote>
                  <p className="text-gray-500">This is a testimonial from a student.</p>
                  <footer className="mt-2 text-right">
                    <cite className="text-sm text-gray-700">- Student Name</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-foreground/[2%] dark:bg-zinc-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us</h2>
            <ul className="list-disc ml-5">
              <li className="text-gray-500">Reason 1</li>
              <li className="text-gray-500">Reason 2</li>
              <li className="text-gray-500">Reason 3</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

