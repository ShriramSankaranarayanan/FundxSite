import React from "react";

const Header: React.FC = () => (
  <header className="flex items-center justify-between border-b border-[#e7f3ee] px-10 py-3 bg-white">
    <div className="flex items-center gap-4 text-[#0e1b16]">
      <div className="w-6 h-6">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
        FundexSecurities
      </h2>
    </div>
    <nav className="flex flex-1 justify-end gap-8">
      <div className="flex items-center gap-9">
        <a className="text-[#0e1b16] text-sm font-medium" href="#">
          Home
        </a>
        <a className="text-[#0e1b16] text-sm font-medium" href="#">
          About
        </a>
        <a className="text-[#0e1b16] text-sm font-medium" href="#">
          Services
        </a>
        <a className="text-[#0e1b16] text-sm font-medium" href="#">
          Contact
        </a>
      </div>
      <button className="rounded-lg h-10 px-4 bg-[#17d38b] text-[#0e1b16] text-sm font-bold">
        Get Started
      </button>
    </nav>
  </header>
);

export default Header;
