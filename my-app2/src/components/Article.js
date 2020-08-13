/* Заказной компонент Article v2.1 */

//Импорт основного компонента React.js
//и базового компонента Component
import React, {Component} from 'react';

class Article extends Component {
	
	//Старый синтаксис инициализации состояния -
	//в конструкторе компонента
	/*constructor(props){
		super(props)
		this.state = {
			isOpen: true
		}
    //Старый синтаксис инициализации свойства функцией
    // bind - функция, встроенная в язык js
    // 1. в правой части выражения указываем, что когда пользовательская функция handleClick
    // будет вызвана, она бужет вызвана на объекте this,
    // то есть на текущем экземпляре компонента Article
    // 2. в левой части выражения создаем свойство
    // экземпляра компонента Article и сохраняем в него настроенную версию функции handleClick
		this.handleClick = handleClickExternal.bind(this)
	}*/

	//Новый синтаксис инициализации состояния -
	//без конструктора
	state = {
		isOpen: true
	}

	render(){
    const {article} = this.props
    // false + smth = false
    // true + smth = smth
		const content = this.state.isOpen && <section>{article.content}</section>
		return (
			<div>
				<h2>{article.title}<button onClick={this.handleClick}>Toggle</button></h2>
			  {content}
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

/* function handleClickExternal(){
	console.log("Toggled")
	this.setState({
		isOpen: !this.state.isOpen
	})
} */

export default Article