import React from "react";
import OrderList from "./OrderList";
import ProfileTab from "./ProfileTab";

function ProfileSection() {
  return (
    // Place All Products/Books to buy Here with .map() in cards... DRY Code.
    // this will be placed at the top of the Profile.jsx main page.
    <>
    {/* These are tabs inside this profile Card */}
      <div>ProfileSection</div>
      {/* Update Profile */}
      <ProfileTab />
      {/* Update Order or checkout */}
      <OrderList />
    </>
  );
}

export default ProfileSection;
