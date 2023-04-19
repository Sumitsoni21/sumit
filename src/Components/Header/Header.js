import Mode from "../Mode/Mode";
import "./Header.css";

function Header() {

 
  return (
    <div className='header'>
      <nav className='nav_container container'>
        <div>
          <a href='' className='nav_logo'> Sumit </a>
        </div>
        <div className='nav_menu'>
          <ul className='nav_list'>
            <li className='nav_item'>
              <a href='' className='nav_link active_link'>Home</a>
            </li>
            <li className='nav_item'>
              <a href='' className='nav_link'>About</a>
            </li>
            <li className='nav_item'>
              <a href='' className='nav_link'>Skills</a>
            </li>
            <li className='nav_item'>
              <a href='' className='nav_link'>Contact</a>
            </li>
            <li className='nav_item'>
              <a  className='nav_link ibar' onClick={()=> {}}>X</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header