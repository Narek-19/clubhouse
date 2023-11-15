import { FC } from "react";
import { Avatar } from "../Avatar";
import Link from "next/link";
import { BackButton } from "../Buttons/BackButton";

interface ProfileProps {
  fullname: string;
  username: string;
  avatarUrl: string;
  about: string;
}

export const Profile: FC<ProfileProps> = ({
  fullname,
  username,
  avatarUrl,
  about,
}) => {
  return (
    <div className="h-full bg-gray-200 p-8">
      <div className="my-2">
      <BackButton href="/rooms">Back</BackButton>
      </div>
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div className="w-full h-[250px]">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
            className="w-full h-full rounded-tl-lg rounded-tr-lg"
            alt="Profile Background"
          />
        </div>
        <div className="flex flex-col items-center -mt-20">
          <Avatar
            width="200px"
            height="200px"
            src={avatarUrl}
            className="w-40 border-4 border-white rounded-full"
          />
          {/* Profile information */}
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl">{fullname}</p>
            <span className="bg-blue-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </div>
          <p className="text-gray-700">@{username}</p>

          <p className="text-sm text-gray-500">Armenia, Yerevan</p>
          <p>{about}</p>
        </div>
      </div>
      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
            <ul className="mt-2 text-gray-700">
              {/* Personal info details */}
              <li className="flex border-y py-2">
                <span className="font-bold w-24">Full name:</span>
                <span className="text-gray-700">Amanda S. Ross</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Birthday:</span>
                <span className="text-gray-700">24 Jul, 1991</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Joined:</span>
                <span className="text-gray-700">10 Jan 2022 (25 days ago)</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Mobile:</span>
                <span className="text-gray-700">(123) 123-1234</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Email:</span>
                <span className="text-gray-700">amandaross@example.com</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Location:</span>
                <span className="text-gray-700">New York, US</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Languages:</span>
                <span className="text-gray-700">English, Spanish</span>
              </li>
              <li className="flex items-center border-b py-2 space-x-2">
                <span className="font-bold w-24">Elsewhere:</span>
                <a href="#" title="Facebook">
                  <svg className="w-5 h-5">
                    {/* Include the SVG content for Facebook here */}
                  </svg>
                </a>
                <a href="#" title="Twitter">
                  <svg className="w-5 h-5">
                    {/* Include the SVG content for Twitter here */}
                  </svg>
                </a>
                <a href="#" title="LinkedIn">
                  <svg className="w-5 h-5">
                    {/* Include the SVG content for LinkedIn here */}
                  </svg>
                </a>
                <a href="#" title="Github">
                  <svg className="w-5 h-5">
                    {/* Include the SVG content for Github here */}
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
            <h4 className="text-xl text-gray-900 font-bold">Activity log</h4>
            <div className="relative px-4">
              <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
              {/* Activity log items */}
              <div>
                {/* Timeline item 1 */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Profile information changed.</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>

                {/* Timeline item 2 */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">
                      Connected with{" "}
                      <a href="#" className="text-blue-600 font-bold">
                        Colby Covington
                      </a>
                      .
                    </p>
                    <p className="text-xs text-gray-500">15 min ago</p>
                  </div>
                </div>

                {/* Timeline item 3 */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">
                      Invoice{" "}
                      <a href="#" className="text-blue-600 font-bold">
                        #4563
                      </a>{" "}
                      was created.
                    </p>
                    <p className="text-xs text-gray-500">57 min ago</p>
                  </div>
                </div>

                {/* Timeline item 4 */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">
                      Message received from{" "}
                      <a href="#" className="text-blue-600 font-bold">
                        Cecilia Hendric
                      </a>
                      .
                    </p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>

                {/* Timeline item 5 */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">
                      New order received{" "}
                      <a href="#" className="text-blue-600 font-bold">
                        #OR9653
                      </a>
                      .
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>

                {/* Timeline item 6 */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">
                      Message received from{" "}
                      <a href="#" className="text-blue-600 font-bold">
                        Jane Stillman
                      </a>
                      .
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
