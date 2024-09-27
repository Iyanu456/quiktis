import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<header className="flex justify-between py-4 px-[3em] bg-[#F68B61]">
				<Image
					src="/logo.svg"
					className="my-auto min-w-[100px]"
					alt={"logo"}
					height={24}
					width={24}
				/>
				<nav className="hidden md:flex items-center gap-[2em] my-auto">
					<Link className="font-bold text-white" href="/">
						Home
					</Link>
					<Link className="font-bold text-white" href="/">
						Pages
					</Link>
					<Link className="font-bold text-white" href="/">
						Event
					</Link>
					<Link className="font-bold text-white" href="/">
						Help
					</Link>
					<Link
						className=" border border-2 px-3 py-1 rounded-md ml-3 font-bold text-white"
						href="/">
						Get Tickets
					</Link>
				</nav>
			</header>

			<main className="">
				<section className="background px-[1.5em] md:px-[3em] py-[3em] ">
					<div className="grid place-items-center md:flex gap-2 ">
						<Image
							src="/IMG_0832 3.png"
							className="my-auto min-w-[100px]"
							alt={"logo"}
							height={24}
							width={24}
						/>

						<h1 className="max-sm:text-center text-white text-[2.8em] font-bold max-w-[65vw] md:leading-[1.4em]">
							From Concept to Curtain Call Quiktis Has You Covered
						</h1>
					</div>
					<div className="max-sm:items-center gap-3 md:ml-[7em] mt-5 items-center flex max-sm:flex-col">
						<p className="max-sm:text-center text-white max-w-[15em] md:leading-[1.4em]">{`
							Stay Ahead of the Curve with Quiktis' Cutting-Edge
							Solutions`}
						</p>
						<button className="max-sm:mt-3 px-[2em] py-3 rounded-md bg-[#F68B61] text-white gap-3">
							Explore Events
						</button>
					</div>
				</section>


        <section className="px-[1.5em] md:px-[3em] mt-[3em] flex flex-col md:grid grid-cols-[1fr,1.55fr] gap-3 md:gap-[3em]">
        <Image
							src="/image2.png"
							className="my-auto w-[100%]"
							alt={"logo"}
							height={24}
							width={24}
						/>

<div className="my-auto">
						<h2 className="font-bold text-[2em] md:max-w-[15em] md:leading-[1.4em]">
            Where Event Experiences 
Are Revolutionized!
						</h2>
            <p className="py-3 text-[#666666]">{`At Quiktis, we're on a mission to transform the way events are managed and experienced. With our cutting-edge ticketing platform, we're dedicated to simplifying the intricate world of event management, making it easier and more enjoyable for both organizers and attendees alike.`}</p>
						
					</div>
        </section>
			</main>
		</>
	);
}
