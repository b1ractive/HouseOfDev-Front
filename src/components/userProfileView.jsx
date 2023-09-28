import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./userProfile";

const UserProfileView = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
};

export default UserProfileView;
