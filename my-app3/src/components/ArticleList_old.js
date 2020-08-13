/* Заказной компонент ArticleList v3.1 */

import React from 'react';
import Article from './Article'

export default function ArticleList({articles}) {
  // массив моделей статей,
  // полученный от родительского компонента через параметры,
  // заменяем массивом фрагментов разметки,
  // каждый из которых содержит экземпляр компонента Статья
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