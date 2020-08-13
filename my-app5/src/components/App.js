/* Заказной компонент App v5.1 */

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