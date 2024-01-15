import React, { useRef } from "react";
import About from "./About";

const ParentComponent = () => {
  const aboutRef = useRef();

  const handleLearnMoreClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BodyContainer onLearnMoreClick={handleLearnMoreClick} />
      <About ref={aboutRef} />
    </div>
  );
};

export default ParentComponent;
