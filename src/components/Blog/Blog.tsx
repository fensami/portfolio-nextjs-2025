import MainProfile from "../Pages/HomePage/MainProfile/MainProfile";

const Blog = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="about-wrapper mt-40">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 sm:col-span-4">
            <MainProfile />
          </div>
          <div className="col-span-12 sm:col-span-8">
            <div className="about-right-content  portfolio-global-box">
              Coming Soon Blogs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
