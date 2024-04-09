import React from "react";
import { useAuth } from "../AuthProvider";

const Home: React.FC = () => {
  const { user } = useAuth();
  console.log(user?.email);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
