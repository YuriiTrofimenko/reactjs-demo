/* Заказной компонент ArticleList v4.1 */

import React from 'react';
import Article from '../Article'
import './style.css'

export default function ArticleList({articles}) {
	const articleElements =
		articles.map(
			(a, idx) =>
				<li key={a.id} className="article-list__li">
					<Article article={a} defaultOpen={idx === 0} />
				</li>
		)
	return (
		<ul>
			{articleElements}
		</ul>
	)
}