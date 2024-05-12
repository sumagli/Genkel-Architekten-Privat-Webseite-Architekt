import React from "react";
import styles from "./Projects.module.css";
import NewFooter from "../NewFooter/NewFooter";
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
            style={{ animationDelay: `${index * 0.3}s` }} // Each project fades in 0.1s after the previous one
          >
            <div className={styles.imageContainer}>
              <img
                src={item.image[0].imageLink}
                alt={item.title}
                className={styles.projectImage}
              />
              {item.image[0].photoBy && (
                <div className={styles.PhotoBy}>
                  Foto: {item.image[0].photoBy}
                </div>
              )}
            </div>
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
            <p>{item.partner}</p>
          </div>
        ))}
      </div>
      {projects[0]?.title && <NewFooter mainPage={false} />}
    </div>
  );
}
