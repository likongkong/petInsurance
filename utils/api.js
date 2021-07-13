import { apiResquest } from './http.js'

//POST 请求案例

//保险列表
export const insuranceList = (query) => {
	return apiResquest({
		url: 'insurance/list',
		method: 'GET'
	})
}

//创建宠物
export const petCreate = (query) => {
	return apiResquest({
		url: 'insurance/list',
		method: 'POST',
		query: {...query}
	})
}

//发送短信验证码
export const smsSend = (query) => {
	return apiResquest({
		url: 'sms/send',
		method: 'POST',
		query: {...query}
	})
}



//GET 请求案例可以传递参数也可以不传递
// export const validateCode  = (query) => {
// 	let str = query
// 	return apiResquest({
// 		url: `您的API地址 ?${str}`,
// 		method: 'GET'
// 	})
// }