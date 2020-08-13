/* Заказной компонент App v4.1 */

//Импорт основного компонента React.js
/* import React from 'react';
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

export default App */

/* Заказной компонент App vv4.2, 4.3 */

//Импорт основного компонента React.js
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleList from './ArticleList'
import articles from '../articles'

class App extends Component {
	state = {
		reverted: false
	}
	render(){
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-3">My App</h1>
					<button className="btn btn-secondary" onClick={this.revert}>Revert</button>
				</div>
				{/* <ArticleList articles={ this.state.reverted ? articles.reverse() : articles} /> */}
				<ArticleList articles={ this.state.reverted ? articles.slice().reverse() : articles} />
			</div>
		)
	}
	revert = () => {
		this.setState({
			reverted: !this.state.reverted
		})
	}
}

export default App