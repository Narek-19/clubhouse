"use client";
import { Avatar } from "@/app/components/Avatar";
import { Header } from "@/app/components/Header";
import { Profile } from "@/app/components/Profile";
import { useParams } from "next/navigation";

const ProfilePage = () => {
  // 2:18:20~`~~~~2 kam 1
  const params = useParams();
  return (
    <div>
      <Header />
      <Profile
        avatarUrl="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        fullname="Narek Chakhoyan"
        username="narek.ch"
        about="The default behavior of the Next.js App Router is to scroll to the top of a new route or to maintain the scroll position for backwards and forwards navigation."
      />
    </div>
  );
};

export default ProfilePage;