
import React, { useRef } from "react";
import About from "./About";

const ParentComponent = () => {
  const aboutRef = useRef();

  const handleLearnMoreClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* ... other content ... */}
      <BodyContainer onLearnMoreClick={handleLearnMoreClick} />
      <About ref={aboutRef} />
    </div>
  );
};

export default ParentComponent;