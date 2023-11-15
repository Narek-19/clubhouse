import Link from "next/link";
import MainButton from "../components/Buttons/MainButton";
import { ConversationCard } from "../components/ConversationCard";
import { Header } from "../components/Header";

async function getData() {
  const res = await fetch("http://localhost:3000/rooms.json", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const RoomsPage = async () => {
  const rooms = await getData();
  // console.log(rooms, "rooms");
  return (
    <div>
      <Header />
      <div className="flex justify-around">
        <div className="flex">
          <div className="m-2">
            <h1>All Conversation</h1>
          </div>
          <div className="m-2">
            <h4>Explore</h4>
          </div>
        </div>
        <div className="m-2">
          <MainButton>Start a Room</MainButton>
        </div>
      </div>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        {rooms.map((room: any, i: number) => {
          return (
            <Link key={i} href={`/rooms/${room.id}`}>
              <ConversationCard
                title={room.title}
                avatars={room.avatars}
                guests={room.guests}
                guestsCount={room.guestsCount}
                speakersCount={room.speakersCount}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RoomsPage;
