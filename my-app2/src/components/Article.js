/* Заказной компонент Article v2.1 */

//Импорт основного компонента React.js
//и базового компонента Component
import React, {Component} from 'react';

class Article extends Component {
	
	// //Старый синтаксис инициализации состояния -
	// //в конструкторе компонента
	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		isOpen: true
	// 	}
	// 	//Старый синтаксис инициализации свойства функцией
	// 	this.handleClick = handleClick.bind(this)
	// }

	//Новый синтаксис инициализации состояния -
	//без конструктора
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

	//Новый синтаксис инициализации свойства функцией
	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

/*function handleClick(){
	console.log("Toggled")
	this.setState({
		isOpen: !this.state.isOpen
	})
}*/

export default Article