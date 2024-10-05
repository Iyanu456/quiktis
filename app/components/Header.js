"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	function closeMenuOnNavigation() {
		setMobileMenuOpen(false);
	}

	return (
		// Helps close the menu bar when the user clicks any of the links inside the menu dropdown or navigation to another route

		<header
			className={`flex justify-between py-4 px-[1.5em] md:px-[3em] bg-[#F68B61] shadow-lg z-[100] `}>
            <Link href="/" >
			<Image
				src="/logo.svg"
				className="my-auto min-w-[100px]"
				alt={"logo"}
				height={24}
				width={24}
			/>
            </Link>
			<nav className="hidden md:flex items-center gap-[2em] my-auto">
				<Link className="hover:underline font-bold text-white" href="/">
					Home
				</Link>
				<Link className="hover:underline font-bold text-white" href="/">
					Pages
				</Link>
				<Link className="hover:underline font-bold text-white" href="/">
					Event
				</Link>
				<Link className="hover:underline font-bold text-white" href="/">
					Help
				</Link>
				<Link
					className="hover:scale-[1.05] hover:shadow-md transition ease-in border border-2 px-3 py-1 rounded-md ml-3 font-bold text-white"
					href="/">
					Get Tickets
				</Link>
			</nav>

			<button
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				className="md:hidden">
				{mobileMenuOpen ? (
					<X className="h-6 w-6" color="white" />
				) : (
					<Menu className="h-6 w-6 " color="white" />
				)}
			</button>

			{mobileMenuOpen && (
				<div className="md:hidden  lg:hidden transition-all z-[50] absolute top-[4em] left-0 w-full bg-[#F68B61] text-white shadow-lg pb-1">
					<nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							href="/"
							className={`text-white hover:text-gray-900 block py-2 px-3 rounded-md text-base hover:bg-gray-50 transition-all 
                  ${pathname === "/" && " font-bold"}`}
							onClick={closeMenuOnNavigation}>
							Home
						</Link>
						<Link
							href="/"
							className={`text-white hover:text-gray-900 block py-2 px-3 rounded-md text-base hover:bg-gray-50 transition-all 
                  ${pathname === "/" && " font-bold"}`}
							onClick={closeMenuOnNavigation}>
							Pages
						</Link>
						<Link
							href="/"
							className={`text-white hover:text-gray-900 block py-2 px-3 rounded-md text-base hover:bg-gray-50 transition-all 
                  ${pathname === "/" && " font-bold"}`}
							onClick={closeMenuOnNavigation}>
							Event
						</Link>
						<Link
							href="/"
							className={`text-white hover:text-gray-900 block py-2 px-3 rounded-md text-base hover:bg-gray-50 transition-all 
                  ${pathname === "/" && " font-bold"}`}
							onClick={closeMenuOnNavigation}>
							Help
						</Link>
					</nav>
					<div className="pt-4 pb-3 border-t border-gray-200">
						<div className="flex px-5">
							<Link
								className="my-auto border border-2 px-4 py-3 rounded-md font-bold text-white"
								href="/">
								Get Tickets
							</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
