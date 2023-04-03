import axios from 'axios';
const http = axios.create({
	baseURL: 'http://localhost:3001/api',
	headers: { 'Content-Type': 'application/json' }
});
http.interceptors.request.use(
    async config => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers = {
				'Content-Type': 'application/json',
				authorization: token,
			};
		} 
        // else {
        //     this.props.history.push({ pathname: '/React-form-registration/register' })
		// 	// history.push({ pathname: '/login' });
		// }
		return config;
	},
	err => {
		return Promise.reject(err);
	}
);

export default http;