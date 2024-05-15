import React from "react";
import styles from "./Projects.module.css";
import NewFooter from "../NewFooter/NewFooter";
import { ProjectsArray } from "../../App";
import { Helmet } from "react-helmet";

export default function Projects({ projects }: ProjectsArray) {
  const handleClick = (title: string) => {
    const specificProject = projects.filter(
      (project) => project.title === title
    );
    const singleProject = specificProject[0];
    if (singleProject.direktLink === "") {
      window.location.href = `/projekte/${title}`;
    } else {
      window.location.href = singleProject.direktLink;
    }
  };

  return (
    <div>
      <div className={styles.Projects}>
        <Helmet>
          <title>Projekte - Genkel Architekten</title>
          <meta
            name="description"
            content="Übersicht der Projekte von Genkel Architekten, spezialisiert auf Leistungsphasen 6 und 7. Entdecken Sie unsere Beteiligungen an Ausschreibungen und Vergaben."
          />
          <meta
            name="keywords"
            content="Genkel Architekten, Architekturprojekte, Leistungsphase 6, Leistungsphase 7, Ausschreibung, Vergabe, Stuttgart"
          />
        </Helmet>
        {projects.map((item, index) => (
          <div
            key={index}
            className={styles.projectItem}
            onClick={() => handleClick(item.title)}
            style={{
              animationName: index < 15 ? styles.fadeInProject : styles.swipeIn,
              animationDelay: index < 15 ? `${index * 0.3}s` : "0s",
            }}
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
