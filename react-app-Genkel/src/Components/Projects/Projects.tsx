import React from "react";
import styles from "./Projects.module.css";
import NewFooter from "../NewFooter/NewFooter";
import testPicture from "../../Assets/Images/home/P1080211.jpg"; // Fixed 'Assats' typo to 'Assets'
import { ProjectsArray } from "../../App";

export default function Projects({ projects }: ProjectsArray) {
  const handleClick = (title: string) => {
    const specificProject = projects.filter(
      (project) => project.title === title
    );
    const singleProject = specificProject[0];
    if (singleProject.link == "") {
      window.location.href = `/projekte/${title}`;
    } else {
      window.location.href = singleProject.link;
    }
  };

  return (
    <div>
      <div className={styles.Projects}>
        {projects.map((item, index) => (
          <div
            key={index}
            className={styles.projectItem}
            onClick={() => handleClick(item.title)}
          >
            <img
              src={item.image[0].imageLink}
              alt={item.name}
              className={styles.projectImage}
            />
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
            <p>{item.partner}</p>
          </div>
        ))}
      </div>
      <NewFooter mainPage={false} />
    </div>
  );
}
