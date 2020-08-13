/* Заказной компонент ArticleList v5.1 */

/* import React, {PureComponent} from 'react';
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
            { 
              1. this.handleClick - для поиска функции в контексте данного компонента;
              2. .bind(this, a.id) - привяка функции к контексту текущего компонента,
              иначе функция handleClick будет в будущем пытаться вызваться на контексте
              ближайшего родительского объекта

              При создании экземпляров компонент Статья
              каждому передаем настройку: должен ли он быть развернут,
              для чего вычисляем выражение "равен ли идентификатор модели текущего пункта
              идентификатору пункта, по которому кликнули (хранится в состоянии)"
            }
						<Article article={a} isOpen={this.state.openArticleId === a.id} />
					</li>
			)
		return (
			<ul>
				{articleElements}
			</ul>
		)
  }
  // функция, принимающая идентификатор модели той статьи,
  // по которой кликнул пользователь
  // (запоминает в состояние компонента списка)
	handleClick = openArticleId => {
    console.log(openArticleId);
    // this.setState({'openArticleId': openArticleId});
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