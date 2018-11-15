/* Заказной компонент Article v4.1 */

/*import React, {Component} from 'react';

class Article extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			isOpen: props.defaultOpen
		}
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
					<section>{content}</section>
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

export default Article*/

/* Заказной компонент Article v4.2 */

/*import React, {Component} from 'react';

class Article extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			isOpen: props.defaultOpen
		}
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.defaultOpen !== this.props.defaultOpen) {
			this.setState({
				isOpen: nextProps.defaultOpen
			})
		}
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
					<section>{content}</section>
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

export default Article*/

/* Заказной компонент Article v4.3 */

import React, {Component} from 'react';

class Article extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			isOpen: props.defaultOpen
		}
	}

	shouldComponentUpdate(nextProps, nextState){
		return this.state.isOpen !== nextState.isOpen
	}

	componentWillUpdate(){
		console.log('componentWillUpdate')
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.defaultOpen !== this.props.defaultOpen) {
			this.setState({
				isOpen: nextProps.defaultOpen
			})
		}
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
					<section>{content}</section>
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