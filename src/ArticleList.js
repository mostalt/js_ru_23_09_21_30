import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Chart from './Chart'
import accordion from './decorators/accordion'

const ArticleList = (props) => {
    const { articles, openArticleId, toggleArticle } = props

    const articleComponents = articles.map(article => (
        <li key={article.id}>
            <Article article = {article} isOpen = {article.id == openArticleId}
                     openArticle = {toggleArticle(article.id)}/>
        </li>
      )
    )

    return (
      <div>
          <ul>
              {articleComponents}
          </ul>
          <Chart />
      </div>
    )
};

ArticleList.propTypes = {
    articles: PropTypes.array
};

export default accordion(ArticleList)