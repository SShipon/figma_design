
import { Star, Heart, Eye } from "lucide-react";
//collaborateData
import card1 from '../assets/collaborate/nlove.png'; 
import card2 from '../assets/collaborate/yLove.png';   
import card3 from '../assets/collaborate/gLove.png';
//products 
import image1 from "../assets/six/Frame 14165 (1).png";
import image2 from "../assets/six/Frame 14165 (2).png";
import image3 from "../assets/six/Frame 14165.png";

import { FaStar } from "react-icons/fa";

// perfect imgmae
import perfect1 from "../assets/img/1 (1).png";
import perfect2 from "../assets/img/2 (1).png";
import perfect3 from "../assets/img/3 (1).png";
// discovers 
import img1 from "../assets/one/3.png";
import img2 from "../assets/one/4.png";
import img3 from "../assets/one/Rectangle 3 (1).png";
import img4 from "../assets/one/Rectangle 3 (2).png";
import img5 from "../assets/one/Rectangle 3.png";
import img6 from "../assets/one/Rectangle 4 (1).png";
import img7 from "../assets/one/Rectangle 4 (2).png";
import img8 from "../assets/one/Rectangle 4.png";
// phone data 
import phone from "../assets/creative/phone.png";
import phone1 from "../assets/creative/phone1.png";
//watch data
import star1 from "../assets/seven/icon/star.svg";
import eye from "../assets/seven/icon/eye.svg";
import light from "../assets/seven/icon/light.svg";
import world from "../assets/seven/icon/world.svg";


import one from "../assets/shien/Frame 14594.jpg";
import two from "../assets/shien/Rectangle 82.jpg";
import three from "../assets/shien/Rectangle 83.jpg";
import froun from "../assets/shien/Rectangle 85 (1).jpg";
import five from "../assets/shien/Rectangle 85.jpg";
import sic from "../assets/shien/Rectangle 86.jpg";

export const cardData = [
  {
    id: 1,
    title: "Favorites",
    description: "Lorem ipsum dolor sit amet.",
    icon: <Star size={24} className="text-orange-500" />,
  },
  {
    id: 2,
    title: "Loved",
    description: "Lorem ipsum dolor sit amet.",
    icon: <Heart size={24} className="text-red-500" />,
  },
  {
    id: 3,
    title: "Views",
    description: "Lorem ipsum dolor sit amet.",
    icon: <Eye size={24} className="text-orange-500" />,
  },
];


export const titleData = [
  { id: 1, title: "Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum.", bgColor: "bg-white" },
  { id: 2, title: "Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum.", bgColor: "bg-gray-200" },
  { id: 3, title: "Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum.", bgColor: "bg-white" },
  { id: 4, title: "Title 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum.", bgColor: "bg-gray-200" }
];



  export const collaborateData = [ 
    { image: card1, color: "#6C63FF", text: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id." }, 
    { image: card2, color: "#FFD700", text: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id." }, 
    { image: card3, color: "#87CEFA", text: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id." }, 
  ]; 


 export const stats = [
    { value: "4.5K", text: "Lorem ipsum dolor sit amet" },
    { value: "12+", text: "Lorem ipsum dolor sit amet" },
    { value: "6.9K", text: "Lorem ipsum dolor sit amet" },
    { value: "4.9", text: "Lorem ipsum dolor sit amet" },
  ];
  

  export const products = [
    {
      id: 1,
      count: "01",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
      img: image1,
    },
    {
      id: 2,
      count: "02",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
      img: image2,
    },
    {
      id: 3,
      count: "03",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
      img: image3,
    },
  ];
  

  export const perfectData = [
    {
      id: 1,
      bgColor: "bg-blue-100",
      value: "351K",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      bgColor: "bg-yellow-200",
      value: "99%",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      bgColor: "bg-pink-200",
      value: (
        <div className="flex items-center mr-2">
          <FaStar className="text-yellow-500 mr-1" />
          <p className="text-lg sm:text-xl font-bold">4.89</p>
        </div>
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      colSpan: "sm:col-span-2 lg:col-span-1",
    },
  ];

 export const perfectImages = [
    {
      id: 1,
      src: perfect1,
      alt: "Architectural doorway",
    },
    {
      id: 2,
      src: perfect2,
      alt: "Glass ceiling structure",
    },
    {
      id: 3,
      src: perfect3,
      alt: "Ornate interior",
    },
  ];


 export const discoversData = [
    {
      id: 1,
      name: "Product A",
      img: img1,
    },
    {
      id: 2,
      name: "Product B",
      img: img2,
    },
    {
      id: 3,
      name: "Product C",
      img: img3,
    },
    {
      id: 4,
      name: "Product C",
      img: img4,
    },
    {
      id: 5,
      name: "Product C",
      img: img5,
    },
    {
      id: 6,
      name: "Product C",
      img: img6,
    },
    {
      id: 7,
      name: "Product C",
      img: img7,
    },
    {
      id: 8,
      name: "Product C",
      img: img8,
    },
  ];

  export const PhoneData = [
    {
      id: 1,
      title: "Creative",
      image: phone1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum. Quam vel aliquam sit vulputate.",
    },
    {
      id: 2,
      title: "Design",
      image: phone,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum. Quam vel aliquam sit vulputate.",
    },
  ];


  export const watchData = [
    { img: light, text: "Lorem ipsum dolor sit amet." },
    { img: star1, text: "Lorem ipsum dolor sit amet." },
    { img: eye, text: "Lorem ipsum dolor sit amet." },
    { img: world, text: "Lorem ipsum dolor sit amet." },
  ];
  

  export const images = {
    section1: [two, three, one],
    section2: [five],
    section3: [froun, sic],
  };