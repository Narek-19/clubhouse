import Link from "next/link";
import React from "react";

interface BackButtonProps {
  href: string;
  children: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      {/* <h3>
        <span>{"<"}</span>-{children}
      </h3> */}
      <button
        type="button"
        className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-4 h-4 transform rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        <span className="sr-only">Icon description</span>
        Back
      </button>
    </Link>
  );
};
