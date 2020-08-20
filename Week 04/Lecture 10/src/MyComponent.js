import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            image: ''
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log(props, state);
        return {
            ...state,
            count: 2
        }
    }

    async componentDidMount(){
        let response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        console.log(response);
        this.setState({
            image: response.data.url
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevProps, prevState);
        return {}
    }

    componentDidUpdate(prevProps,prevState, snapshot) {
        // Typical usage (don't forget to compare props):
        console.log('[DidUpdate] ',prevProps, prevState, snapshot);
        if(this.state.image){
            this.setState({
                image: ''
            })
        }
    }

    componentWillUnmount(){
        console.log('[Unmounted]', this.state);
    }

    render() {
        console.log(this.state);
        return (
        <div className="App">
            <h1>My Component</h1>
            <p>{this.state.image}</p>
            {this.state.image && <img src={this.state.image} alt="Img"></img>}
        </div>
        );
    }
}

export default MyComponent;