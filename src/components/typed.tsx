"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ arrayText }: { arrayText: Array<string> }) => {
  const element = useRef(null!);
  const typedtext = useRef<any>(null!);

  useEffect(() => {
    const options = {
      strings: arrayText,
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
      loopCount: 2,
      backDelay: 900,
    };

    let typedRef = typedtext?.current;

    if (typedRef) {
      typedRef = new Typed(element.current, options);
    }

    return () => {
      if (typedRef) typedtext?.current.destroy();
    };
  }, [arrayText]);

  return <span ref={element} />;
};

export default TypedText;
