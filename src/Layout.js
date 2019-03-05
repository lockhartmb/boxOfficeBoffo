import React, { Component } from 'react';
import LandingPage from './LandingPage.js';
import Logo from './Logo.js';
import GamePage from './GamePage.js';
import axios from 'axios';
import Qs from 'qs';

const apiUrl = 'https://api.themoviedb.org/3/discover/movie/'
const apiKey = '9ce0982a9b86c5a78ad6ab14e214b652'
class Layout extends Component {
    constructor() {
        super();
        this.state = {
            clickToStart: null
        }
    }

    handleStart = (e) => {
        e.preventDefault();
        console.log('hi');
        this.setState({
            clickToStart: 'clicked'
        })
    }

    componentDidMount(){
        // console.log("did mount");
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
                    'primary_release_date.gte': '2015-05-01',
                    'primary_release_date.lte': '2015-09-04',
                    region: 'US',
                    page: 1,
                    sort_by: 'popularity.desc'
                },  
                proxyHeaders: {
                    'some_header': 'lfkjg'
                },
                xmlToJson: false,
            }
        }).then(response => {
            const movies = response.data.results;

            console.log(movies)
        })
    }
    

    render() {
        return(
            <section>
                <Logo />
                {this.state.clickToStart ? <GamePage /> : <LandingPage handleStart={this.handleStart}/> }
                
                
            </section>

        )
    }
}

export default Layout;