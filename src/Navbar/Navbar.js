import { menuItems, social } from '../data/menuItems.js'
import navbar from '../css/Navbar.css';
import logo from '../assets/logo.svg'

const Navbar = (props) => {
  const menuItemsView = menuItems.map((item, key) => {
    return (
      <li key={key}>
        <a href={item.bookmark}>{item.title}</a>
      </li>
    );
  });

  const socialView = social.map((item, key) => {
    return (
      <li key={key}>
        <a href={item.url} className="social">
          <img alt={item.title} src={item.logo}/>
        </a>
      </li>
    );
  });

  return (
    <nav>
      <div class="innerNav">
        <span className="logoWrapper">
            <img attr="agrobeads logo" src={logo}/>
        </span>
        <ul className="navigationItems">
          { menuItemsView }
          { socialView }
        </ul>
        <button onClick={() => props.onClick()} className="hamburger mobile">
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
