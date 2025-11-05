// import Nav from "@/components/Nav/Nav";

import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
