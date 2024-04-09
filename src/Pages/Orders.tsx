import React from "react";
import { useAuth } from "../AuthProvider";

const Orders: React.FC = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="pb-4">
        <h2 className="text-3xl pb-4">{user?.displayName}</h2> here is your
        Orders
      </div>
      <ul>
        <li>item-1</li>
        <li>item-2</li>
        <li>item-3</li>
      </ul>
    </>
  );
};

export default Orders;
