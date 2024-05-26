import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-12 px-[20vw]">
      <p className="text-center text-zinc-400 text-xs">
        Made with ❤️ by
        <Link href="/" className="text-red-300 hover:underline px-1">
          Shashank Ravikumar
        </Link>
        coded in Visual Studio Code by yours truly. 
        
      </p>
    </footer>
  );
};

export default Footer;
