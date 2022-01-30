import { signOut, useSession } from "next-auth/react";
import { LogoutIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

const Center = () => {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div
          className="flex items-center bg-transparent space-x-3 opacity-90 hover:opacity-70
        cursor-pointer rounded-full p-1 pr-2 bg-yellow-200"
          onClick={() => signOut()}
        >
          <img
            className="rounded-full w-8 h-8"
            src={session?.user?.image}
            alt="user-img"
          />
          <h2 className="">{session?.user?.name}</h2>
          <LogoutIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 h-80 padding-8
        bg-gradient-to-b to-black ${color}`}
      >
        <h1>Hello</h1>
      </section>
    </div>
  );
};

export default Center;
