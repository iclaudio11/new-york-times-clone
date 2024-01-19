import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/AppContext';
import '../assets/css/newsSection.css';

const NewsSection = ({ section }) => {
  const { formatSection } = useGlobalContext();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section.toLowerCase()}.json?api-key=tGSXuRhPkNnojNA6gvTNHTClun0h8w0K`);
        const data = await response.json();
        setNews(data.results);
      } catch (error) {
        console.error('Errore durante il recupero delle notizie:', error);
      }
    };

    fetchData();
  }, [section]);

  return (
    <div className="news-section">
      {news &&
        news.map((article) => (
          <div key={article.id} className="article-container">
            <div>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-abstract">{article.abstract}</p>
            </div>
            {article.multimedia && article.multimedia.length > 0 && (
              <img
                src={article.multimedia[0].url}
                alt={article.multimedia[0].caption}
                className="article-image"
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default NewsSection;
