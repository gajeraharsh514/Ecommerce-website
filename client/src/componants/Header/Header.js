import React,{useState} from 'react'
import "./Header.css";
import { FaBars,FaLessThanEqual,FaShoppingCart } from 'react-icons/fa';
import {GrClose} from "react-icons/gr";
import Logo from "../../assets/images/download.webp";
function Header() {
    const [menu,setmenu] = useState(false)
    return (
        <>
        <div className="navbar_header">
                <div className="first_part">
                    <div className="logo"><img  src={Logo} alt={`Logo not avalible`} /></div>
                </div>
                <div className="second_part">
                    <ul className="ul_list">
                          <li className="li_list"><a href="/home" className="a_list">Home</a></li>
                          <li className="li_list"><a href="/home" className="a_list">Shop</a></li>
                          <li className="li_list"><a href="/home" className="a_list">About</a></li>
                          <li className="li_list"><a href="/home" className="a_list">Contect</a></li>
                    </ul>
                </div>
                <div className="third_part">
                       <div className="icon_header">
                           <div className="icon">
                               <FaShoppingCart />
                            </div>
                           <div className="icon">
                               <FaBars onClick={() => setmenu(!menu)} />
                           </div>
                       </div>
                </div>

    </div>
           {/* navbar toggle menu */}
               <div className={menu ? "asider visiblemenu" : "asider"}>
                               <div className= {menu ? "nevbar_toggle_menu active" : "nevbar_toggle_menu"}>
                                   <div className="closemenusection">
                                       <div className="icon closeicon">
                                           <GrClose onClick={() => setmenu(false)} />
                                       </div>
                                   </div>
                                   <div className="navigarionlinks_menu">
                                   <ul className="menu_ul">
                                       <li className="menu_li">
                                           <a href="/home" className="menu_a">Home</a>
                                       </li>
                                       <li className="menu_li">
                                           <a href="/home" className="menu_a">My Whatchlist</a>
                                       </li>
                                       <li className="menu_li">
                                           <a href="/home" className="menu_a">My Account</a>
                                       </li>
                                       <li className="menu_li">
                                           <a href="/home" className="menu_a">Track Oder</a>
                                       </li>
                                       <li className="menu_li">
                                           <a href="/home" className="menu_a">About</a>
                                       </li>
                                   </ul>
                                   </div>
                               </div>
                           </div>
            </>
    )
}

export default Header
