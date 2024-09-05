/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/wooden-box-3714128_1280.jpg";
const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Compra Price Website",
    description:
      "Developed a price comparison website using React and Node.js that integrates Amazon and Flipkart APIs to find the best deals, improving performance and user experience.",
    url: "https://github.com/yshagit31/MiniProject",
  },
  {
    title: " Supplier Search API",
    description:
      "Developed a RESTful API for a Makersharks search page, improving search speed by 40% and accuracy by 35% with enhanced performance and exception handling.",
    url: "https://github.com/yshagit31/searchapi",
  },
  {
    title: "My Resume Site",
    description:
      "Developed a portfolio website that enhanced professional presentation, improved mobile compatibility, and boosted site performance. Integrated interactive elements to increase user engagement and ensure smooth navigation.",
    url: "https://yshagit31.github.io/Portfolio/",
  },
  {
    title: "Object Detection System",
    description:
      "Developed an object detection system in Embedded C++ that improved detection accuracy, provided real-time distance measurement up to 5 meters, and reduced latency, leading to enhanced system responsiveness and efficiency.",
    url: "https://github.com/yshagit31/Object_Distance",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
