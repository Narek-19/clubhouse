import { Avatar } from "../Avatar";

interface ConversationProps {
  title: string;
  //   users: string[];
  avatars: string[];
  guestsCount: number;
  speakersCount: number;
  guests: string[];
}

export const ConversationCard: React.FC<ConversationProps> = ({
  title,
  avatars,
  guestsCount,
  speakersCount,
  guests,
}) => {
  return (
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
      <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </blockquote>
      <div className="flex w-full justify-around">
        <div className="w-full rounded-lg m-4">
          <div className="px-1 py-4">
            <h3 className="font-bold text-2xl font-sans">All Guests</h3>
          </div>
          <ul className="grid grid-cols-3 lg:grid-cols-6 gap-2 px-1">
            <li className="flex items-center flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
                className="rounded-full w-16 h-16 object-cover"
              />
              <h5 className="font-semibold">Jericho</h5>
            </li>
            <li className="flex items-center flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/28.jpg"
                alt=""
                className="rounded-full w-16 h-16 object-cover"
              />
              <h5 className="font-semibold">Dianna</h5>
            </li>
            <li className="flex items-center flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/66.jpg"
                alt=""
                className="rounded-full w-16 h-16 object-cover"
              />
              <h5 className="font-semibold">Bernard</h5>
            </li>
            <li className="flex items-center flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/19.jpg"
                alt=""
                className="rounded-full w-16 h-16 object-cover"
              />
              <h5 className="font-semibold">Francis</h5>
            </li>
            <li className="flex items-center flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/15.jpg"
                alt=""
                className="rounded-full w-16 h-16 object-cover"
              />
              <h5 className="font-semibold">Edna</h5>
            </li>
            <li className="flex items-center flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/21.jpg"
                alt=""
                className="rounded-full w-16 h-16 object-cover"
              />
              <h5 className="font-semibold">Carson</h5>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-1 py-4">
        <h3 className="font-bold text-2xl font-sans">Who is Speaking?</h3>
      </div>
      <div className="flex items-center -space-x-4">
        {avatars.map((src) => {
          return (
            <img
              alt="user 1"
              src={src}
              className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
            />
          );
        })}
      </div>
      <div className="flex">
        <div className="relative group my-8 mx-1">
          <button className="relative z-10 middle none center rounded-lg bg-gradient-to-tr from-fuchsia-600 to-cyan-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Speakers Count
          </button>
          <div className="absolute top-0 left-7 group-hover:-top-[2.5rem] transition-all ease-in-out duration-500">
            <div className="z-0 w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
              <h3 className="font-sans font-normal text-sm py-2 px-3">
                {speakersCount} Speakers
              </h3>
            </div>
          </div>
        </div>

        <div className="relative group my-8 mx-1">
          <button className="relative z-10 middle none center rounded-lg bg-gradient-to-tr from-orange-600 to-yellow-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Guests Count
          </button>
          <div className="absolute top-0 right-3 group-hover:-top-[2.5rem] transition-all ease-in-out duration-500">
            <div className="z-0 w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
              <h3 className="font-sans font-normal text-sm py-2 px-5">
                {guestsCount} Guests
              </h3>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};
