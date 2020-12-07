import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';

const menuItems = [
  {
    title : "home",
    bookmark : "#home"
  },
  {
    title : "about us",
    bookmark : "#team"
  },
  {
    title : "product",
    bookmark : "#product"
  },
  {
    title : "blogs & resources",
    bookmark : "#blog"
  }
];

const social = [
  {
    title : "facebook",
    url : 'https://www.facebook.com/AgroBead/',
    logo : facebook,
  },

  {
    title : "instagram",
    url : 'https://www.instagram.com/agrobeads/',
    logo : instagram,
  }
];

export { menuItems, social };
