/* Заказной компонент Article v1 */

/*//Импорт основного компонента React.js
import React from 'react';

function Article() {
	const greeting = "Hello World!";
	return (
		<div>
			<h2>Article</h2>
			<section>{greeting}</section>
			<section>{(new Date()).toDateString()}</section>
		</div>
	)
}

export default Article*/

/* Заказной компонент Article v2 */

//Импорт основного компонента React.js
import React from 'react';

function Article(props) {
	console.log(props);
	const {article} = props
	const content = <section>{article.content}</section>
	return (
		<div>
			<h2>{article.title}</h2>
			<section>{content}</section>
			<section>{(new Date(article.date)).toDateString()}</section>
		</div>
	)
}

export default Article