import axios from 'axios';

export default class VODService {
	constructor(endpointUrl) {
		this.endpointUrl = endpointUrl;
	}
	getData() {
		return axios.get(this.endpointUrl)
		.then(response =>
			response.status === 200 ? response.data.movies : []
		)
		.catch(error =>
			console.log(error)
		);
	}
}
