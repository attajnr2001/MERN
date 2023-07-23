import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const DashboardScreen = () => {
    const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      <h1>Welcome {userInfo.name}</h1>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default DashboardScreen;
