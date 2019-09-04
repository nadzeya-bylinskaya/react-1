import React from "react";
import StoreContext from "../../StoreContext";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        return <Navbar sidebar={store.getState().sidebar} />;
      }}
    </StoreContext.Consumer>
  );
};

export default NavbarContainer;
