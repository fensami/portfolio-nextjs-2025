import { getCurrentUser } from "@/services/authService";

const adminPage = async () => {
  const user = await getCurrentUser();
  console.log("user", user.email);
  return (
    <div>
      <h1 className="text-5xl text-center mb-3.5">Good Day,</h1>
      <h2 className="text-4xl text-center">{user.email}</h2>
      <p className="text-4xl text-center mt-5">! Manage Your Platform</p>
    </div>
  );
};

export default adminPage;
