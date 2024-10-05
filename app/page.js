import Image from "next/image";
import Link from "next/link";

const categories = [
	{category: "All"},
	{category: "Trending for you"},
	{category: "Today"},
	{category: "Online"},
	{category: "This weekend"},
	{category: "Music"},
	{category: "Shows"},
	{category: "Festival"},
	{category: "Foods and Drinks"},
	{category: "Happening now"},
	{category: "Games"},
]

const category_cards = [
	{
		image_src: "/Image 16.png",
		caption: `Africa’s fashion industry is growing to meet global demand.<br> 
		“but needs more investment, UNECO says.`
	},
	{
		image_src: "/Rectangle 251.png",
		caption: `Many Nigerians on Friday remembered the victims of the historic protests against police brutality which took place three years ago`
	},
	{
		image_src: "/Rectangle 253.png",
		caption: `New Netflix thriller tackling theme of justice in Nigeria is a global hit and a boon for Nollywood <br><br> A Nigerian action thriller that tells a gripping story of corruption and police brutality in Africa`
	},
	{
		image_src: "/Rectangle 252.png",
		caption: `Nigerian President Muhammadu Buhari has opened Africa’s biggest oil refinery, with hopes it will help the country achieve self-sufficiency and become a net exporter of refined petroleum products`
	}
]

export default function Home() {
  return (
    <>
      <header className="flex justify-between py-4 px-[1.5em] md:px-[3em] bg-[#F68B61]">
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
            href="/"
          >
            Get Tickets
          </Link>
        </nav>
      </header>

      <main className="">
        <section className="background px-[1.5em] md:px-[3em] py-[3em] ">
          <div className="grid place-items-center md:flex gap-2 ">
            <Image
              src="/IMG_0832 3.png"
              quality={100}
              className="my-auto min-w-[100px]"
              alt={"logo"}
              height={24}
              width={24}
              unoptimized={true}
            />

            <h1 className="max-sm:text-center text-white text-[2.8em] font-bold md:max-w-[65vw] md:leading-[1.4em]">
              From Concept to Curtain Call Quiktis Has You Covered
            </h1>
          </div>
          <div className="max-sm:items-center gap-3 md:ml-[7em] mt-5 items-center flex max-sm:flex-col">
            <p className="max-sm:text-center text-white max-w-[15em] md:leading-[1.4em]">
              {`
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
            quality={100}
            className="my-auto w-[100%]"
            alt={"logo"}
            height={24}
            width={24}
            unoptimized={true}
          />

          <div className="my-auto">
			<p className="text-[#F58560] text-[1.24em] font-semibold">WELCOME TO QUIKTIS</p>
            <h2 className="font-bold text-[2em] md:max-w-[15em] md:leading-[1.4em]">
              Where Event Experiences Are Revolutionized!
            </h2>
            <p className="py-3 text-[#666666]">{`At Quiktis, we're on a mission to transform the way events are managed and experienced. With our cutting-edge ticketing platform, we're dedicated to simplifying the intricate world of event management, making it easier and more enjoyable for both organizers and attendees alike.`}</p>
          </div>
        </section>

        <section className="px-[1.5em] md:px-[3em] py-[3.5em]">
          <p className="font-bold text-[1.4em]">UP NEXT</p>
          <div className="mt-3 flex flex-col md:grid grid-cols-[1fr,1fr,1fr,1fr] gap-5">
            <div className="relative grid place-items-center">
              <Image
                src="/Rectangle 246.png"
                quality={100}
                className="my-auto w-[100%] object-cover rounded-md max-sm:max-h-[10em]"
                alt={"logo"}
                height={24}
                width={24}
                unoptimized={true}
              />
              <p className="absolute text-white font-bold text-[1.1em] md:mb-[-6.2em]">
                Catchy Date
              </p>
            </div>
            <div className="relative grid place-items-center">
              <Image
                src="/Rectangle 249.png"
                quality={100}
                className="my-auto w-[100%] object-cover rounded-md max-sm:max-h-[10em]"
                alt={"logo"}
                height={24}
                width={24}
                unoptimized={true}
              />
              <p className="absolute text-white font-bold text-[1.1em] md:mb-[-6.2em]">
                The Club Guru
              </p>
            </div>
            <div className="relative grid place-items-center">
              <Image
                src="/Rectangle 248.png"
                quality={100}
                className="my-auto w-[100%] object-cover rounded-md max-sm:max-h-[10em]"
                alt={"logo"}
                height={24}
                width={24}
                unoptimized={true}
              />
              <p className="absolute text-white font-bold text-[1.1em] md:mb-[-6.2em]">
                Laides Night
              </p>
            </div>
            <div className="relative grid place-items-center">
              <Image
                quality={100}
                src="/Rectangle 247.png"
                className="my-auto w-[100%] object-cover rounded-md max-sm:max-h-[10em]"
                alt={"logo"}
                height={24}
                width={24}
                unoptimized={true}
              />
              <p className="absolute text-white font-bold text-[1.1em] md:mb-[-6.2em]">
                Talent Show
              </p>
            </div>
          </div>
        </section>

		<section className="px-[1.5em] md:px-[3em] my-[3em]">
			<h3 className="text-[2em] font-bold text-gray-800 flex gap-3">Happening in <Image src="/Vector.svg" alt="icon" height={24} width={24} /> <span className="text-[#F58560]
">Nigeria</span></h3>
			<ul className="flex gap-[1.6em] my-4 flex-wrap">
				{categories.map((item, index) => (
					<li key={index} className="cursor-pointer font-semibold text-gray-700">{item.category}</li>
				))}
			</ul>

			<div className="grid md:grid-cols-[1fr,1fr,1fr] lg:grid-cols-[1fr,1fr,1fr,1fr] gap-[1.5em] mt-5">
				{category_cards.map((item, index) => (
					<div className="bg-[#000000] text-white rounded-[1em]">
						<Image src={item.image_src} alt="category" className="w-[100%]" height={100} width={100} unoptimized={true} />
					<div className="p-4 pt-[1.2em] md:text-[0.98]" dangerouslySetInnerHTML={{ __html: item.caption }}>
				
					</div>
				</div>
				))}
				
			</div>
		</section>
      </main>
    </>
  );
}
