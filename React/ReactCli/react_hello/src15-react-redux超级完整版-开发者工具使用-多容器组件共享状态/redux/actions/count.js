/* 
	创建action对象
*/
export const createIncrement = data => ({ type: 'increment', data })
export const createDecrement = data => ({ type: 'decrement', data })
/* 创建异步action对象 （其实就是异步里面调同步）*/
export const createAsyncIncrement = (data, time) => {
	/* dispatch如果接收到一个函数，那么store会调用它，并默认给他传递一个dispatch参数 */
	return (dispatch) => {
		setTimeout(() => {
			dispatch(createIncrement(data))
		}, time)
	}
}