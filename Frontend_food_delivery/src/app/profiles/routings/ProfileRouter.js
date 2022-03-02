import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfileForm from "../components/ProfileForm";

const ProfileRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/edit-Profile"
          element={<ProfileForm></ProfileForm>}
        ></Route>
      </Routes>
    </div>
  );
};

export default ProfileRouter;
