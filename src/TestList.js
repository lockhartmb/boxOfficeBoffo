import React, { Component, Fragment } from 'react';

class TestList extends Component{
    constructor(){
        super();
        this.state = {
            movieList: []
        }
    }


    componentDidUpdate(){
        this.setState({
            movieList: this.props.getMovieList
        })
        console.log(this.movieList);
    }
    render(){
        return(
            <Fragment>
                <div>hello {this.props.getMovieList}</div>
            </Fragment>
        )
    }
}

export default TestList;


