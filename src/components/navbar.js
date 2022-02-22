import { Link } from "react-router-dom";
import logo from '../images/apair.jpg'
const NavBar =()=>{

    return(
<div className="navBar">
    <img className="navlogo" src={logo}/>
<nav >
<Link className="linksNav" to="/" style={{color: 'black'}} >Home</Link>
<Link className="linksNav" to="/About" style={{color: 'black'}}>About</Link>
<Link className="linksNav" to="/Podcast" style={{color: 'black'}}>Podcast</Link>


</nav>

</div>
    )
}

export default NavBar;