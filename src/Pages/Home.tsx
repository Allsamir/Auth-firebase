import React from "react";
import { useAuth } from "../AuthProvider";

const Home: React.FC = () => {
  const { user } = useAuth();
  console.log(user?.email);
  return (
    <div>
      <h1 className="text-4xl">{user?.displayName} your Home</h1>
    </div>
  );
};

export default Home;
