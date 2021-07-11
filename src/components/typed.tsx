import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ arrayText }: { arrayText: Array<string> }) => {
  const element = useRef(null);
  const typedtext = useRef(null);

  useEffect(() => {
    const options = {
      strings: arrayText,
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
      loopCount: 2,
      backDelay: 900,
    };

    typedtext.current = new Typed(element.current, options);

    return () => {
      typedtext.current.destroy();
    };
  }, []);

  return <span ref={element}>{null}</span>;
};

export default TypedText;
