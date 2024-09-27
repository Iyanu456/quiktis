import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header className="flex justify-between py-4 px-[2.5em] bg-[#F68B61]">
      <Image src="/logo.svg" className="my-auto min-w-[100px]" alt={"logo"} height={24} width={24} />
      <nav className="flex items-center gap-[2em] my-auto">
        <Link className="font-bold text-white" href="/">Home</Link> 
        <Link className="font-bold text-white" href="/">Pages</Link> 
        <Link className="font-bold text-white" href="/">Event</Link> 
        <Link className="font-bold text-white" href="/">Help</Link>
        <Link className=" border border-2 px-3 py-1 rounded-md ml-3 font-bold text-white" href="/">Get Tickets</Link> 
      </nav>
    </header>
  );
}
