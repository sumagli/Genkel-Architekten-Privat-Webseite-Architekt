import React, { useState } from "react";
import styles from "./News.module.css";

// Define the structure of a single news item
interface NewsItem {
  picture: string;
  date: string;
  title: string;
  shortText: string;
  longText: string;
  link?: string;
  linkText?: string;
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
          Show More
        </button>
      )}
    </div>
  );
};

// NewsItem component
const NewsItemComponent: React.FC<NewsItemProps> = ({ newsItem }) => {
  return (
    <div className={styles.newsItem}>
      <img
        src={newsItem.picture}
        alt={newsItem.title}
        className={styles.newsImage}
      />
      <div className={styles.newsContent}>
        <h3 className={styles.newsTitle}>{newsItem.title}</h3>
        <p className={styles.newsDate}>{newsItem.date}</p>
        <p className={styles.newsShortText}>{newsItem.shortText}</p>
        <p className={styles.newsLongText}>{newsItem.longText}</p>
        {newsItem.link && (
          <a href={newsItem.link} className={styles.newsLink}>
            {newsItem.linkText && newsItem.linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default News;
