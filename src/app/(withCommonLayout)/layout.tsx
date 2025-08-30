import Nav from "@/components/Nav/Nav";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      <main className="min-h-screen">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default CommonLayout;
