import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  //when a user clicks outside the modal, the modal will close
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          //   console.log("click outside");
          handler();
        }
      }
      //handleing the click event in the capturing phase
      document.addEventListener("click", handleClick, listenCapturing);

      //cleanup function
      return () => document.removeEventListener("click", handleClick);
    },
    [handler, listenCapturing],
  );

  return ref;
}
