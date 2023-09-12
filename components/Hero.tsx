import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image src={"/movie.png"} width={250} height={250} layout="responsive"></Image>
      </div>
      <h1 className="text-2xl text-indigo-700 uppercase font-bold">Welcome to MovieSide</h1>
      <p className="text-indigo-900">Enjoy and Find your happiness with top film!</p>
      <Link href="/contact">
        <button className="bg-indigo-500 text-white py-3 px-6 rounded text-sm mt-4">Contact Us</button>
      </Link>
    </div>
  );
};

export default Hero;
