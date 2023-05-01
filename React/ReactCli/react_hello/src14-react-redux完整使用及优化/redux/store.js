/* applyMiddleware 使用中间件 */
import { createStore, applyMiddleware } from 'redux'
/* 
**安装包 redux-thunk
**按需要安装它，没有异步需求就不需要
*/
//引入可以使用异步 action 的中间件，有了它 dispatch 就可以接收一个函数
import thunk from 'redux-thunk'
import countReducer from './count_reducer'
export default createStore(countReducer, applyMiddleware(thunk))