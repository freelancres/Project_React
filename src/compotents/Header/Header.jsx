import "./Header.css";
import Header_Menu from "./Header_Menu.jsx";
import Header_ul_Language from "./Header_ul_Language.jsx";
import Header_ul_Socialmedia from "./Header_ul_Socialmedia.jsx";



function Header() {
  return (
    <header className="header">
        {/* <Header_Logo /> */}
        <Header_Menu />   
        <Header_ul_Language />  
        <Header_ul_Socialmedia />
    </header>
  )
};

export default Header;
