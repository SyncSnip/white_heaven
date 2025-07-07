import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Centered Logo & Tagline */}
        <div className="flex flex-col items-center justify-center">
          <Image
            width={100}
            height={100}
            src="/logoonblack.png"
            alt="White Heaven Logo"
            className="mb-4"
          />
          <p className="text-sm text-gray-400 max-w-sm">
            Delivering unforgettable entertainment experiences since 2013
          </p>
        </div>

        {/* Divider Line */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} White Heaven Entertainments Pvt. Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
