import MainProfile from "@/components/Pages/HomePage/MainProfile/MainProfile";
import Skills from "@/components/Pages/HomePage/Skills/Skills";
import RecentProjects from "@/components/RecentProjects/RecentProjects";

const HomePage = async () => {
  return (
    <div>
      <div className="container mx-auto px-5 xl:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          <MainProfile />
          <Skills />
          <RecentProjects />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
