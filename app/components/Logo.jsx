import { BookMarkedIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link
        href={"/"}
        className="flex items-center gap-2 text-2xl sm:text-4xl prata-regular font-bold"
      >
        <BookMarkedIcon className="h-10 w-10 stroke-darkCyan" />

        <p className="tracking-tight leading-tight bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent">
          NarratorAI
        </p>
      </Link>
    </div>
  );
};

export default Logo;
