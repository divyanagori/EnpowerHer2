import { useRef, useEffect } from "react";

const Navbar = () => {
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <input ref={searchRef} placeholder="Search restaurant..." />
  );
};

export default Navbar;
