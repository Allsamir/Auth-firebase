import React from "react";
import { useAuth } from "../AuthProvider";

const Profile: React.FC = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-4xl">Hello {user?.displayName}</h1>
    </div>
  );
};

export default Profile;
