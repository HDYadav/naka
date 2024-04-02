import React from "react";
import Header from "./Header";
import Leftmenu from "./Leftmenu";
import Footer from "./Footer";

const LayoutHOC = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <Leftmenu />
          <WrappedComponent {...this.props} />
          <Footer />
        </div>
      );
    }
  };
};

export default LayoutHOC;
