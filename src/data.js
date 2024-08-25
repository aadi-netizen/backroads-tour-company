import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", iconClass: "fab fa-facebook" },
  { id: 2, href: "https://www.facebook.com", iconClass: "fab fa-twitter" },
  {
    id: 3,
    href: "https://www.squarespace.com",
    iconClass: "fab fa-squarespace",
  },
];

export const ourServices = [
  {
    id: 1,
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    title: "saving money",
    icon: "fas fa-wallet fa-fw",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    title: "endless hiking",
    icon: "fas fa-tree fa-fw",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    title: "amazing comfort",
    icon: "fas fa-socks fa-fw",
  },
];

export const tours = [
  {
    id: 1,
    image: img1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    duration: "6 days",
    cost: "from $2100",
  },
  {
    id: 2,
    image: img2,
    date: "october 1th, 2020",
    title: "Best of java",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    duration: "11 days",
    cost: "from $1400",
  },
  {
    id: 3,
    image: img3,
    date: "september 15th, 2020",
    title: "Explore hong kong",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong kong",
    duration: "8 days",
    cost: "from $5000",
  },
  {
    id: 4,
    image: img4,
    date: "December 5th, 2019",
    title: "Kenya highlights",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    duration: "20 days",
    cost: "from $3300",
  },
];
