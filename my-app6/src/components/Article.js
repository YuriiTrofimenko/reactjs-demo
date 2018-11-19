/* Заказной компонент Article v5.1 */

/*import React, {Component} from 'react';

class Article extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	render(){
		const {article, isOpen} = this.props
		const content = isOpen && <section className="card-text">{article.content}</section>
		return (
			<div className="card mx-auto" style={{width:'50%'}}>
				<div className="card-header">
					<h2>
						{article.title}
						<button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
							{isOpen ? 'Close' : 'Open'}
						</button>
					</h2>
				</div>
				<div className="card-body">
					<section className="card-subtitle text-muted">{(new Date(article.date)).toDateString()}</section>
					<section>{content}</section>
				</div>
			</div>
		)
	}

	handleClick = () => {
		//this.setState({
		//	isOpen: !this.state.isOpen
		//})
	}
}

export default Article*/

/* Заказной компонент Article v5.1 */

import React, {Component} from 'react';

class Article extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	render(){
		const {article, isOpen, onButtonClick} = this.props
		const content = isOpen && <section className="card-text">{article.content}</section>
		return (
			<div className="card mx-auto" style={{width:'50%'}}>
				<div className="card-header">
					<h2>
						{article.title}
						<button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
							{isOpen ? 'Close' : 'Open'}
						</button>
					</h2>
				</div>
				<div className="card-body">
					<section className="card-subtitle text-muted">{(new Date(article.date)).toDateString()}</section>
					<section>{content}</section>
				</div>
			</div>
		)
	}

	handleClick = () => {
		/*this.setState({
			isOpen: !this.state.isOpen
		})*/
	}
}

export default Article