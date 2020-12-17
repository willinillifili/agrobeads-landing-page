import React from 'react'
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Team from '../Team/Team';
import Product from '../Product/Product';
import Blog from '../Blog/Blog';
import app from '../css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navShowing : false,
    }

    this.handleShowNav = this.handleShowNav.bind(this);
    this.classToggle = this.classToggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const navbar = document.querySelector('nav');
    const navPanel = document.querySelector('.navigationItems');
    const app = document.querySelector('.App');
    const navHoverBreakPoint = document.querySelector('section:nth-child(3)')
                                       .offsetTop - navbar.offsetHeight - 100;
    this.setState({
      app : app,
      scrollTop : app.scrollTop,
      navbar : navbar,
      navPanel : navPanel,
      navHoverBreakPoint : navHoverBreakPoint
    });
  }

  /**
    * Toggles the visibility of the navigation when hamburger is clicked.
    * @param {Element} navItems The element to be toggled.
  */

  handleShowNav(navItems) {
    this.classToggle(navItems, 'showNav', this.state.navShowing,);
    this.setState({ navShowing : !this.state.navShowing});
  }

  /**
    Scrolls the screen to the section that was selected in the navbar.
    @param {Event} e An event of type 'click'
  */

  handleNavClick(e) {
    e.preventDefault();
    /* the id string of the element to which we navigate will be in the
       href of the clicked anchor */
    const sectionID = e.target.id;
    const sectionPosition = sectionID == "#home"
    ? this.state.navbar.offsetHeight : document.querySelector(sectionID).offsetTop;
    this.state.app.scrollTop = sectionPosition - this.state.navbar.offsetHeight;
  }

  handleScroll() {
    const scrolledPastBreakpoint = this.state.app.scrollTop > this.state.navHoverBreakPoint;
    this.classToggle(this.state.navbar, 'navHover', scrolledPastBreakpoint);
  }

  /**
    * Alternates between adding and removing a class on an element
    * @param {Element} element Element object whose classList will be modified
    * @param {String} className Name of class to be added/removed.
    * @param {boolean} condition If true, will add the class.
      Removes it otherwise
  */

  classToggle(element, className, condition) {
    const addClass = () => element.classList.add(className);
    const removeClass = () => element.classList.remove(className);
    condition ? addClass() : removeClass();
  }

  render() {
    return (
      <div className="App" onScroll={ () => this.handleScroll() }>
        <Navbar onBurgerClick={() => this.handleShowNav(this.state.navPanel)}
                onLinkClick={(e) => this.handleNavClick(e)}/>
        <Home />
        <Team />
        <Product />
        <Blog />
      </div>
    );
  }
}

export default App;
