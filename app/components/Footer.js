import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="grid px-[1.5em] gap-[2.5em] sm:grid-cols-[1fr,1fr] md:px-[3em] py-[2.5em] pb-[4em] text-white md:flex md:gap-[4em] flex-wrap justify-between mt-[3em] bg-black">
			<div>
				<Image
					quality={100}
					className="my-auto"
					src="/footer logo.svg"
					alt={"arrow icon"}
					height={150}
					width={150}
					unoptimized={true}
				/>
			</div>

			<div>
				<h3 className="text-[1.5em] font-bold poppins">Get in touch</h3>
				<div className="flex gap-5 mt-3">
					<Link href="">
						<Image
							quality={100}
							className="my-auto"
							src="Facebook.svg"
							alt={"Facebook"}
							height={9}
							width={9}
							unoptimized={true}
						/>
					</Link>

					<Link href="">
						<Image
							quality={100}
							className="my-auto"
							src="instagram.svg"
							alt={"Instagram"}
							height={15}
							width={15}
							unoptimized={true}
						/>
					</Link>

					<Link href="">
						<Image
							quality={100}
							className="my-auto"
							src="linkedin.svg"
							alt={"Linkedin"}
							height={15}
							width={15}
							unoptimized={true}
						/>
					</Link>

					<Link href="">
						<Image
							quality={100}
							className="mt-1"
							src="youtube.svg"
							alt={"Youtube"}
							height={15}
							width={15}
							unoptimized={true}
						/>
					</Link>

					<Link href="">
						<Image
							quality={100}
							className="my-auto"
							src="x.svg"
							alt={"X/Twitter"}
							height={15}
							width={15}
							unoptimized={true}
						/>
					</Link>
				</div>
			</div>

			<div className="flex flex-col gap-3">
				<Link href="">Home</Link>
				<Link href="">News</Link>
				<Link href="">Genres</Link>
			</div>

			<div className="flex flex-col gap-3">
				<Link href="">Event</Link>
				<Link href="">Ticket</Link>
				<Link href="">FAQ</Link>
			</div>

			<div>
				<Link
					href=""
					className="px-5 py-2 rounded-lg border border-[#F58560] border-2">
					Contact
				</Link>
			</div>
		</footer>
	);
}
