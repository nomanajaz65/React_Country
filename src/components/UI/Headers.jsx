// import { NavLink } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from "react";

// export const Headers = () => {
//   const [show, setShow] = useState(false);

//   const handleButtonToggle = () => {
//     return setShow(!show);
//   };

//   return (
//     <header>
//       <div className="container">
//         <div className="grid navbar-grid">
//           <div className="Logo">
//             <NavLink to="/">
//               <h1>WorldAtlas</h1>
//             </NavLink>
//           </div>

//           <nav className={show ? "menu-mobile" : "menu-web"}>
//             <ul>
//               <li>
//                 <NavLink to="/">Home</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about">About</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/country">Country</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact">Contact</NavLink>
//               </li>
//             </ul>
//           </nav>

//           <div className="ham-menu">
//             <button onClick={handleButtonToggle}>
//               <GiHamburgerMenu />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };


import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect, useRef } from "react";

export const Headers = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);  // Reference for the menu
  const buttonRef = useRef(null);  // Reference for the hamburger button

  const handleButtonToggle = () => {
    setShow(!show);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setShow(false);
  };

  useEffect(() => {
    // Function to detect clicks outside of the menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShow(false); // Close the menu if clicked outside
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav ref={menuRef} className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleLinkClick}>About</NavLink>
              </li>
              <li>
                <NavLink to="/country" onClick={handleLinkClick}>Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button ref={buttonRef} onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
