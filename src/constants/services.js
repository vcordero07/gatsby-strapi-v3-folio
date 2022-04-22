import React from "react";
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa";
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I'm baby migas cliche twee vegan, trust fund locavore aesthetic tousled. Celiac helvetica flannel selfies offal. Tumblr church-key pok pok gluten-free master cleanse, la croix deep v mustache cred iceland. `,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `I'm baby bespoke freegan vexillologist green juice umami selvage pabst. Tbh chia health goth drinking vinegar chillwave four dollar toast, narwhal truffaut humblebrag kale chips actually. `,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `I'm baby artisan 90's four dollar toast, heirloom chia photo booth swag tumeric poke lyft organic viral fanny pack. Photo booth biodiesel yr, next level deep v organic venmo literally mumblecore tbh small batch selfies.`,
  },
];

export default services;
