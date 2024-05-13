import React, { useEffect, useState } from "react";
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

const News: React.FC<NewsProps> = ({ newsData }) => {
  const [showAll, setShowAll] = useState(false); // State to manage whether all news items should be shown
  const [visibleCount, setVisibleCount] = useState(3); // Initialize visibleCount to 3 to show the first three news items by default

  useEffect(() => {
    if (showAll) {
      const interval = setInterval(() => {
        setVisibleCount((current) => {
          if (current < newsData.length) {
            return current + 1; // Increment to show the next item
          }
          clearInterval(interval); // Clear interval when all items are displayed
          return current;
        });
      }, 200); // Set interval to 200ms between each item's appearance
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [showAll, newsData.length]); // Dependency array includes showAll and newsData.length

  return (
    <div className={styles.newsContainer2}>
      <div className={styles.newsContainer}>
        <h1 className={styles.newsTitle}>Aktuelles</h1>
        {newsData.slice(0, visibleCount).map((newsItem, index) => (
          <NewsItemComponent key={index} newsItem={newsItem} />
        ))}
      </div>
      {!showAll && (
        <button
          onClick={() => setShowAll(true)} // Set showAll to true when button is clicked
          className={styles.showMoreButton}
        >
          Mehr anzeigen
        </button>
      )}
    </div>
  );
};

const NewsItemComponent: React.FC<NewsItemProps> = ({ newsItem }) => {
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const textLimit = 100; // Set the limit for text before showing "Read More"

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleReadMore = () => {
    setIsReadMoreShown(!isReadMoreShown);
  };

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
          {isReadMoreShown || !isTextLong || !isMobile
            ? newsItem.text
            : `${newsItem.text.substring(0, textLimit)}...`}
        </p>
        {isTextLong && isMobile && (
          <button onClick={toggleReadMore} className={styles.readMoreButton}>
            {isReadMoreShown ? "Show Less" : "Read More"}
          </button>
        )}
        {newsItem.linkText && (
          <a
            onClick={() =>
              (window.location.href =
                newsItem.link?.url || `/projekte/${newsItem.title}`)
            }
            className={styles.newsLink}
          >
            {newsItem.linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default News;
