/* Заказной компонент ArticleList v5.1 */

/*import React, {PureComponent} from 'react';
import Article from '../Article'
import './style.css'

export default class ArticleList extends PureComponent {
	state = {
		openArticleId : null
	}
	render(){
		const {articles} = this.props
		const articleElements =
			articles.map(
				(a, idx) =>
					<li key={a.id} className="article-list__li" onClick={this.handleClick.bind(this, a.id)}>
						<Article article={a} isOpen={this.state.openArticleId === a.id} />
					</li>
			)
		return (
			<ul>
				{articleElements}
			</ul>
		)
	}
	handleClick = openArticleId => {
		console.log(openArticleId);
		this.setState({openArticleId});
	}
}*/

/* Заказной компонент ArticleList v5.2 */

import React, {PureComponent} from 'react';
import Article from '../Article'
import './style.css'

export default class ArticleList extends PureComponent {
	state = {
		openArticleId : null
	}
	render(){
		const {articles} = this.props
		const articleElements =
			articles.map(
				(a, idx) =>
					<li key={a.id} className="article-list__li">
						<Article article={a}
							isOpen={this.state.openArticleId === a.id}
							onButtonClick={this.handleClick.bind(this, a.id)}
							/>
					</li>
			)
		return (
			<ul>
				{articleElements}
			</ul>
		)
	}
	handleClick = openArticleId => {
		//console.log(openArticleId);
		//this.setState({openArticleId});
		this.setState({openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId});
	}
}