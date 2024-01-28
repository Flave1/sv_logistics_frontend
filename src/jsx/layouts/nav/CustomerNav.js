import React, { Fragment, useState } from "react";

import ChatBox from "../ChatBox";
import CustomerNavHeader from "./CustomerNavHeader";
import CustomerSideBar from "./CustomerSideBar";
import CustomerHeader from "./CustomerHeader";

const CustomerNav = ({ title, onClick: ClickToAddEvent, onClick2, onClick3 }) => {
  const [toggle, setToggle] = useState("");
  const onClick = (name) => setToggle(toggle === name ? "" : name);
  return (
    <Fragment>
      <CustomerNavHeader />
      <ChatBox onClick={() => onClick("chatbox")} toggle={toggle} />
      <CustomerHeader
          onNote={() => onClick("chatbox")}
          onNotification={() => onClick("notification")}
          onProfile={() => onClick("profile")}
          toggle={toggle}
          title={title}
          onBox={() => onClick("box")}
          onClick={() => ClickToAddEvent()}
        /> 
      <CustomerSideBar />
    </Fragment>
  );
};

export default CustomerNav;
