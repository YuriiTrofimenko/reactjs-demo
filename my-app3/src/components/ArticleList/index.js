/* Заказной компонент ArticleList v3.2 */

import React from 'react';
import Article from '../Article'
import './style.css'

export default function ArticleList({articles}) {
	const articleElements =
		articles.map(
			a => <li key={a.id} className="article-list__li"><Article article={a} /></li>
		)
	return (
		<ul>
			{articleElements}
		</ul>
	)
}