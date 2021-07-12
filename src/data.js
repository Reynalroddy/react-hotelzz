import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";

import ImgOne from "./images/house-1.jpg";
import ImgTwo from "./images/house-2.jpg";
import ImgThree from "./images/house-3.jpg";
import ImgFour from "./images/house-4.jpg";
import ImgFive from "./images/house-5.jpg";
import Imgsix from "./images/img-6.jpg";
import Imgseven from "./images/img-7.jpg";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/about",
    text: "about",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/rentals",
    text: "rentals",
    icon: <FaFolderOpen />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <FaSketch />,
  },
];

export const slider = [
  {
    id: 1,
    title: "houses in bali",
    price: "$4,567,657",
    path: "/",
    label: "View Home",
    img: ImgOne,
    alt: "imgone",
  },
  {
    id: 2,
    title: "houses in cambodia",
    price: "$4,567,657",
    path: "/",
    label: "View Home",
    img: ImgTwo,
    alt: "imgtwo",
  },
  {
    id: 3,
    title: "houses in New York",
    price: "$4,567,657",
    path: "/",
    label: "View Home",
    img: ImgThree,
    alt: "imgthree",
  },
  {
    id: 4,
    title: "houses in california",
    price: "$4,567,657",
    path: "/",
    label: "View Home",
    img: ImgFour,
    alt: "imgfour",
  },
  {
    id: 5,
    title: "houses in houston",
    price: "$4,567,657",
    path: "/",
    label: "View Home",
    img: ImgFive,
    alt: "imgfive",
  },
];

export const infoData = [
  {
    id: 1,
    title: "houses in bali",
    p1: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    p2: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    label: "View Home",
    img: Imgsix,
    reverse: false,
    delay: 100,
    angle: "left",
  },
  {
    id: 2,
    title: "houses in togo",
    p1: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    p2: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    label: "View Home",
    img: Imgseven,
    reverse: true,
    delay: 100,
    angle: "right",
  },
];
