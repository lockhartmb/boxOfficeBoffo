import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Qs from 'qs';
const apiUrl = 'https://api.themoviedb.org/3/discover/movie/'
const apiKey = '9ce0982a9b86c5a78ad6ab14e214b652'


class Axios extends Component {
	constructor(props) {
		super(props);	
		this.state = {
			results: [],
		}
	}
	
	componentDidMount() {
		const {currentYear} = this.props
		const fetchMovies = () => {

			axios({
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
			}).then(response => {
				const movies = response.data.results;
				// console.log(movies)
				this.setState({
					results: movies
				})
			})
		}
		fetchMovies()
		console.log(this.state.results)
	}
	
	render() {
		return (
			<Fragment></Fragment>
		)
	}
}


export default Axios;