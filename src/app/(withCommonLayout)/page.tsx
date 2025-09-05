import MainProfile from "@/components/MainProfile/MainProfile";
import MyExpertArea from "@/components/My_Expert_Area/MyExpertArea";
import RecentProjects from "@/components/RecentProjects/RecentProjects";
// import { getCurrentUser } from "@/services/authService";
import React from "react";

const HomePage = async () => {
  // const userData = await getCurrentUser();
  // console.log(userData);
  return (
    <div>
      {/* <Nav /> */}
      <div className="container mx-auto px-5 xl:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          <MainProfile />
          <MyExpertArea />
          <RecentProjects />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
