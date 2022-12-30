import React, { useContext } from "react";
import { FaRegEnvelope, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-base-200 border rounded p-5 h-screen">
      <div className="w-16 rounded-full mx-auto">
        <FaUserCircle className="w-16 h-16" />
      </div>
      <div className=" text-center">
        <h4 className="text-2xl text-center mt-2 font-bold">
          {user?.displayName}
        </h4>
        <p className="flex items-center justify-center gap-2">
          <span>
            <FaRegEnvelope className="text-blue-500 mt-2" />
          </span>
          {user?.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
