import React from "react";

const Header = () => {
  return (
    <>
    <nav className="flex pl-5" style={{justifyContent:"space-between",alignItems:"center",backgroundColor:"black",color:"white",height:"10vh"}}>
        <h3>MatsyaTech</h3>
        <ul className="flex px-5">
            <li className="flex px-5">About Us</li>
            <li className="flex px-5">Service</li>
            <li className="flex px-5"  >Contact US</li>
        </ul>
    </nav>
    </>
  );
}
export default Header;