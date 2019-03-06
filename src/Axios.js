import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Qs from 'qs';
const apiUrl = 'https://api.themoviedb.org/3/discover/movie/'
const apiKey = '9ce0982a9b86c5a78ad6ab14e214b652'

// Axios component has a state of results that can be passed back up to GamePage as needed
class Axios extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {

	// 	}
	// }

	// we're making fetchData it's own function that gets the currentYear from GamePage through props. Then fetchData can be called many times depending on situation
	// used props to get the year from GamePage and saved as variable. Variable is used in search parameters to make that dynamic
	fetchData = async () => {
		let { currentYear } = this.props;
		console.log(currentYear);

		await axios({
			method: 'GET',
			url: 'http://proxy.hackeryou.com',
			dataResponse: 'json',
			paramsSerializer: function (params) {
				return Qs.stringify(params, { arrayFormat: 'brackets' })
			},
			params: {
				reqUrl: apiUrl,
				params: {
					api_key: apiKey,
					format: 'json',
					language: 'en-US',
					'primary_release_date.gte': `${currentYear}-05-01`,
					'primary_release_date.lte': `${currentYear}-09-04`,
					region: 'US',
					page: 1,
					sort_by: 'revenue.desc'
				},
				proxyHeaders: {
					'some_header': 'lfkjg'
				},
				xmlToJson: false,
			}
			// .then() and this.setState() will wait until the axios call is done because it has "await" on it
		}).then(response => {
			const movies = response.data.results;
			this.props.getResults(movies);
		})
	}

	
	// when component mounts, it will fetchData which is with the year 2019 as default
	componentDidMount() {
		this.fetchData();
	}

	// if the component updates (ie, if the currentYear changes), then it will fetchData again
	componentDidUpdate(prevProps) {
		if (this.props.currentYear !== prevProps.currentYear) {
			this.fetchData();
		}
		
	}
	// this is just so that the return is not empty
	render() {
		return (
			<Fragment></Fragment>
		)
	}
}


export default Axios;