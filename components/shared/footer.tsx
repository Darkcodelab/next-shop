import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-4 border-t mt-10">
      <div className="text-center my-4">
        <Link href="/" className="text-3xl">
          EDEN
        </Link>
      </div>
      <section className="text-center mt-16">
        <h4>Quick Links</h4>
        <ul className="text-gray-500 text-[15px] mt-4 gap-3 flex flex-col flex-wrap items-center justify-center lg:flex-row lg:gap-8">
          <li>
            <Link href="/policies/terms-of-service">Terms of service</Link>
          </li>
          <li>
            <Link href="/policies/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/policies/refund">Returns and Refunds</Link>
          </li>
        </ul>
      </section>

      <section className="flex gap-2 items-center justify-center mt-8">
        <Link
          href="/"
          className="w-[30px] h-[30px] bg-[#1E7CF2] p-1 rounded-full  flex items-center justify-center"
        >
          <Image
            src="/social-icons/facebook.svg"
            alt="facebook"
            width={17}
            height={17}
          />
        </Link>
        <Link
          href="/"
          className="w-[30px] h-[30px] bg-[#FF0808] p-1 rounded-full flex items-center justify-center"
        >
          <Image
            src="/social-icons/youtube.svg"
            alt="youtube"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href="/"
          className="w-[30px] h-[30px] bg-[#EC624F] p-1 rounded-full  flex items-center justify-center"
        >
          <Image
            src="/social-icons/instagram.svg"
            alt="instagram"
            width={20}
            height={20}
          />
        </Link>
      </section>

      <section className="bg-black text-white p-2 mt-8">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()}, The Eden Lab Built by Human
        </p>
      </section>
    </footer>
  );
}
