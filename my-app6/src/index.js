/* Главный файл JSX v1 */

/*//Импорт основного компонента React.js
import React from 'react';
//Импорт функции render из библиотеки React.js DOM
import {render} from 'react-dom';
//Заказной компонент App
function App() {
	return (
		<div>
			<h1>My App</h1>
		</div>
	)
}
//Рендеринг компонента App и вставка в корневой элемент веб-страницы index.html
render(<App />, document.getElementById('root'));*/

/* Главный файл JSX v2 */

/*//Импорт основного компонента React.js
import React from 'react';
//Импорт функции render из библиотеки React.js DOM
import {render} from 'react-dom';
//Заказной компонент Article
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
//Заказной компонент App
function App() {
	return (
		<div>
			<h1>My App</h1>
			<Article/>
		</div>
	)
}
//Рендеринг компонента App и вставка в корневой элемент веб-страницы index.html
render(<App />, document.getElementById('root'));*/

/* Главный файл JSX v3 */

//Импорт всех функций из основной библиотеки React.js
import React from 'react';
//Импорт функции render из библиотеки React.js DOM
import {render} from 'react-dom';
//Импорт заказного компонента App
import App from './components/App'

//Рендеринг компонента App и вставка в корневой элемент веб-страницы index.html
render(<App />, document.getElementById('root'));
