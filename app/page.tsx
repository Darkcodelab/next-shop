import DifferenceAccordion from "@/components/home/DifferenceAccordion";
import Testimonials from "@/components/home/Testimonials";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="container mx-auto px-1">
      {/* hero section */}
      <section className="py-12 px-4 bg-[url('/hero-banner.jpg')] ">
        <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px] block py-6 max-w-[900px] rounded-sm mx-auto">
          <div className="text-center">
            <small className="text-sm text-gray-100">
              Dive into aquatic paradise with
            </small>
            <h1 className="text-4xl mt-2 mb-4 text-white font-semibold ">
              The Eden Lab
            </h1>
            <p className="text-gray-100 max-w-[400px] mx-auto lg:max-w-[600px]">
              Elevate your aquascape with Lab-Grown Brilliance. Your ultimate
              destination for top-tier aquarium plants!
            </p>
          </div>
          <Link
            href="/about"
            className="text-center block max-w-[150px] mx-auto bg-accent p-3 rounded-sm mt-8"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* premium plants */}
      <section className="py-8">
        <h2 className="text-center text-lg">Our Premium Plants</h2>
        <Skeleton className="w-full h-64 mt-4" />
      </section>

      {/* difference accordion */}
      <section className="py-8">
        <h2 className="text-center text-lg">How We Stand Out</h2>
        <DifferenceAccordion />
      </section>

      {/* testimonials */}
      <section className="py-8">
        <h1 className="text-center text-lg">Testimonials</h1>
        <Testimonials />
      </section>

      {/* newsletter */}
      <section className="py-8">
        <h2 className="text-center text-lg">Harvest Reports</h2>
        <p className="text-gray-500 text-center max-w-[700px] mx-auto my-4">
          Stay in the Loop with Our Exclusive Harvest Reports! Be the First to
          Know About New Arrivals, Special Offers, and Insider Tips Straight
          from The EDEN Lab.
        </p>
        <Link
          href="/newsletter"
          className="bg-accent p-3 rounded-sm block text-center max-w-[200px] mx-auto mt-8"
        >
          Subscribe!!
        </Link>
      </section>
    </main>
  );
}
