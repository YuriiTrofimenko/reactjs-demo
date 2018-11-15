/* Заказной компонент App v3.1 (без стилизации) */

/*//Импорт основного компонента React.js
import React from 'react';
import ArticleList from './ArticleList'
import articles from '../articles'

function App() {
	return (
		<div>
			<h1>My App</h1>
			<ArticleList articles={articles} />
		</div>
	)
}

export default App*/

/* Заказной компонент App v3.2 (со стилизацией) */

//Импорт основного компонента React.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleList from './ArticleList'
import articles from '../articles'

function App() {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-3">My App</h1>
			</div>
			<ArticleList articles={articles} />
		</div>
	)
}

export default App