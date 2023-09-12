import Link from "next/link";

const navbar = () => {
  return (
    <nav className="bg-indigo-600">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link href="/" className="text-base md:text-2xl">
          Movie
          <span className="text-blue-950">Side</span>
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
