import React from "react";
import styles from "./Home.module.css";
import MainPage from "../MainPage/MainPage";
import News from "../News/News";
import testPicture from "../../Assats/Images/home/P1080211.jpg";
import NewFooter from "../NewFooter/NewFooter";

interface HomeProps {
  overlay: boolean;
  teamImages: any; // Assuming 'any' is a placeholder. Consider specifying a more accurate type.
}

const exampleNewsData = [
  {
    picture: testPicture,
    date: "2023-03-25",
    title: "Exciting News Update",
    shortText: "This is a short introduction to our exciting news update.",
    longText:
      "Here's the more detailed content of the news update. It includes all the in-depth information that was not present in the short introduction. This text can be expanded upon clicking 'Show More'.",
    link: "https://example.com/full-article",
    linkText: "Zum Projekt",
  },
  {
    picture: testPicture,
    date: "2023-03-20",
    title: "Another Important Update",
    shortText: "Brief overview of another important news update.",
    longText:
      "This is the extended version of the news update. It goes into great detail about the subject matter, providing valuable insights and information.",
  },
  {
    picture: testPicture,
    date: "2023-03-20",
    title: "Another Important Update",
    shortText: "Brief overview of another important news update.",
    longText:
      "This is the extended version of the news update. It goes into great detail about the subject matter, providing valuable insights and information.",
  },
  {
    picture: testPicture,
    date: "2023-03-20",
    title: "Another Important Update",
    shortText: "Brief overview of another important news update.",
    longText:
      "This is the extended version of the news update. It goes into great detail about the subject matter, providing valuable insights and information.",
  },
];

export default function Home({ overlay, teamImages }: HomeProps) {
  return (
    <div className={styles.home}>
      <div id="Home">
        <MainPage isVisible={!overlay} blur={true} />
      </div>
      <div id="Directions">
        <News newsData={exampleNewsData} />
      </div>
      <NewFooter mainPage={true} />
    </div>
  );
}
