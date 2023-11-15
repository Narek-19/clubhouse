import { BackButton } from "@/app/components/Buttons/BackButton";
import { Header } from "@/app/components/Header";
import { Room } from "@/app/components/Room";

interface RoomProps {
  params: any;
}

async function getRoomData() {
  const res = await fetch("http://localhost:3000/rooms.json", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const RoomPage: React.FC<RoomProps> = async ({ params }) => {
  const rooms = await getRoomData();
  const room = rooms.find((el: any) => el.id === params.id);
  return (
    <div>
      <Header />
      <BackButton href="/rooms">All Rooms</BackButton>
      <Room title={room.title} />
    </div>
  );
};

export default RoomPage;
