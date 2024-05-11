import React, { useState } from "react";
import styles from "./News.module.css";

// Define the structure of a single news item
interface NewsItem {
  picture: PictureItem;
  date: string;
  title: string;
  text: string;
  link?: URL;
  linkText?: string;
  photoBy: string;
}

interface PictureItem {
  filename: string;
}

interface URL {
  url: string;
}

interface NewsItemProps {
  newsItem: NewsItem;
}

// Define the props for the News component
interface NewsProps {
  newsData: NewsItem[];
}

// News component
const News: React.FC<NewsProps> = ({ newsData }) => {
  // State to toggle the display of all news items
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={styles.newsContainer2}>
      <div className={styles.newsContainer}>
        <h1 className={styles.newsTitle}>Aktuelles</h1>
        {newsData
          .slice(0, showAll ? newsData.length : 3)
          .map((newsItem, index) => (
            <NewsItemComponent key={index} newsItem={newsItem} />
          ))}
      </div>
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className={styles.showMoreButton}
        >
          Mehr anzeigen
        </button>
      )}
    </div>
  );
};

// NewsItem component with conditional "Read More" rendering
const NewsItemComponent: React.FC<NewsItemProps> = ({ newsItem }) => {
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);
  const textLimit = 100; // Set the limit for text before showing "Read More"

  const toggleReadMore = () => {
    setIsReadMoreShown(!isReadMoreShown);
  };

  // Determine if the text is longer than the limit
  const isTextLong = newsItem.text.length > textLimit;

  return (
    <div className={styles.newsItem}>
      <div className={styles.image}>
        <img
          src={newsItem.picture.filename}
          alt={newsItem.title}
          className={styles.newsImage}
        />
        {newsItem.photoBy && (
          <div className={styles.PhotoBy}>Foto: {newsItem.photoBy}</div>
        )}
      </div>
      <div className={styles.newsContent}>
        <h3 className={styles.newsTitle}>{newsItem.title}</h3>
        <p className={styles.newsDate}>{newsItem.date}</p>
        <p className={styles.newsShortText}>
          {isReadMoreShown || !isTextLong
            ? newsItem.text
            : `${newsItem.text.substring(0, textLimit)}...`}
        </p>
        {/* Render the Read More button only if the text is longer than the limit and on mobile */}
        {isTextLong && (
          <button onClick={toggleReadMore} className={styles.readMoreButton}>
            {isReadMoreShown ? "Show Less" : "Read More"}
          </button>
        )}
        {newsItem?.link?.url && (
          <a href={newsItem.link.url} className={styles.newsLink}>
            {newsItem.linkText ? newsItem.linkText : "Learn more"}
          </a>
        )}
      </div>
    </div>
  );
};

export default News;
