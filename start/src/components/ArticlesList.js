import React from 'react';
import Post from './Post'
import './style.css'

function ArticlesList({articles}) {
    const articlesElements = articles.map(article => 
        <li key={article.id} className="list">
            <Post article={article} />
        </li>
        )
    return(
        <ul>
            {articlesElements}
        </ul>

    )
}
export default ArticlesList