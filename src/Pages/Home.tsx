import React from "react";
import { useAuth } from "../AuthProvider";

const Home: React.FC = () => {
  const { value, handleValue } = useAuth();
  console.log(value);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleValue}>Change The Value</button>
    </div>
  );
};

export default Home;
