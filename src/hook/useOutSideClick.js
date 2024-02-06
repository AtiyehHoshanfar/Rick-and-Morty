import { useEffect } from "react";

function useOutSideClick(ref, exceptionId, cb) {
  useEffect(() => {
    function handleoOutsideClick(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.id !== exceptionId
      )
        cb();
    }
    document.addEventListener("mousedown", handleoOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleoOutsideClick);
    };
  }, [exceptionId, cb, ref]);
}
export default useOutSideClick;
