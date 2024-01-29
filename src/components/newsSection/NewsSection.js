import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/AppContext.js';
import './newsSection.css';

const NewsSection = ({ section }) => {
  const { formatSection } = useGlobalContext();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section.toLowerCase()}.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`);
      const data = await response.json();
      setNews(data.results);
    } catch (error) {
      console.error('Errore durante il recupero delle notizie:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [section]);


  return (
    <div className="news-section">
      {loading ? (
        <LoadingSpinner />
      ) : (
        news &&
        news.map((article, index) => (
          <div key={index} className="article-container">
            <div>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-abstract">{article.abstract}</p>
            </div>
            {article.multimedia && article.multimedia.length > 0 && (
              <img
                key={article.multimedia[0].url}
                src={article.multimedia[0].url}
                alt={article.multimedia[0].caption}
                className="article-image"
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default NewsSection;
