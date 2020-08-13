/* Заказной компонент Article v3.1 (без стилизации) */

/*import React, {Component} from 'react';

class Article extends Component {
	
	state = {
		isOpen: true
	}

	render(){
		const {article} = this.props
		const content = this.state.isOpen && <section>{article.content}</section>
		return (
			<div>
				<h2>{article.title}<button onClick={this.handleClick}>Toggle</button></h2>
				<section>{content}</section>
				<section>{(new Date(article.date)).toDateString()}</section>
			</div>
		)
	}

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

export default Article*/

/* Заказной компонент Article v3.2 (со стилизацией) */

import React, {Component} from 'react';

class Article extends Component {
	
	state = {
		isOpen: true
	}

	render(){
		const {article} = this.props
		const content = this.state.isOpen && <section className="card-text">{article.content}</section>
		return (
			<div className="card mx-auto" style={{width:'50%'}}>
				<div className="card-header">
					<h2>
						{article.title}
						<button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">Toggle</button>
					</h2>
				</div>
				<div className="card-body">
					<section className="card-subtitle text-muted">{(new Date(article.date)).toDateString()}</section>
					{content}
				</div>
			</div>
		)
	}

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

export default Article