// EXTERNAL DEPENDENCIES
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';

// INTERNAL DEPENDENCIES
import { isDev } from '../../globals';
import ErrorModal from '../error-modal/error-modal';

// LOCAL DEPENDENCIES
import { articlesQuery } from './articles.config';
import './articles-feed.css';

// COMPONENT DEFINITION
const ArticleFeed = ({ mode }) => {
  const [articles, setArticles] = useState([]);
  const [isError, setIsError] = useState(false);

  const getArticles = () => {
    setTimeout(() => {
      axios
        .get(articlesQuery)
        .then(res => {
          setArticles(isDev ? res.data : res.data.articles);
        })
        .catch(err => {
          console.error(err);
          if (err) {
            setIsError(true);
          }
        });
    }, isDev && 1000);
  };

  useEffect(() => {
    getArticles();
  }, []);

  const uniqueArticles = Array.from(
    new Set(articles.map(article => article.title))
  ).map(title => {
    return articles.find(article => article.title === title);
  });

  const handleClose = () => {
    setIsError(false);
    getArticles();
  };

  return (
    <>
      {articles.length > 0 ? (
        uniqueArticles.map((article, index) => {
          return (
            <p className='article' key={index}>
              <span className={`article-header-${mode}`}>
                Published{' '}
                {article.source.name ? `by ${article.source.name}` : null}{' '}
                {moment(article.publishedAt).fromNow()}
              </span>
              <br />
              <a
                className={`article-title-${mode}`}
                href={article.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {article.title}
              </a>
            </p>
          );
        })
      ) : (
        <CircularProgress />
      )}
      {isError && <ErrorModal onClose={handleClose} />}
    </>
  );
};

export default ArticleFeed;

ArticleFeed.propTypes = {
  mode: PropTypes.string,
};
