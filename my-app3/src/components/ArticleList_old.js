/* Заказной компонент ArticleList v3.1 */

import React from 'react';
import Article from './Article'

export default function ArticleList({articles}) {
	const articleElements =
		articles.map(
			a => <li key={a.id}><Article article={a} /></li>
		)
	return (
		<ul>
			{articleElements}
		</ul>
	)
}