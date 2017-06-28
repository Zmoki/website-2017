import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';

class About extends Component {


    constructor(props) {

        super(props);

        this.isMobile = window.innerWidth < 768;

    }

    resize() {

        debugger

    	let width = (window.innerWidth / 2);

    	//let imageRatio = this.image

    	let imageWidth = (window.innerWidth / 2);
    	let imageHeight = (window.innerWidth / 2);

        this.wrapper.style.width =  width + 'px';

        this.image.style.width = imageWidth + 'px';
        this.image.style.height = imageHeight + 'px';

    }

    componentDidMount() {

        this.wrapper = ReactDOM.findDOMNode(this.refs.wrapper);
        this.image = ReactDOM.findDOMNode(this.refs.image);

        if (!this.isMobile) {
            this.image.onload = this.resize.bind(this);
            this.resize();
            window.addEventListener('resize', this.resize.bind(this));   
        }
    }

    render() {
        return (
		  <div className="about">
		      <div className="container container-fluid">
		      	<div className="container-header">
		      		<span>2 <i>Awesome Spaces</i></span>
		      		<h1>The Venue</h1>
		      		<div className="container-header-flexbox">
			      		<div className="container-header-info">
				      		<p className="main">This year the conference will take place, once again, at the elegant Cameri Theatre - Tel Aviv's municipal theathre. Located in the center of bohemic Tel Aviv, it is considered one of Israel's largest and most respected theathers. Classical and modern will meet under an urban wrap, for another unforgettable conference.</p>
				      		<h3>The Cameri Theatre of Tel Aviv</h3>
				      		<p className="address">Sderot Sha'ul HaMelech 19, Tel Aviv-Yafo, Israel</p>
				      		<a className="directions" href="#">Get directions</a>
				      	</div>
			      		<div className="container-header-image">
			      			<div className="container-header-image-wrapper drop-shadow" ref="wrapper">
				      			<img src="kamari.png" ref="image"/>
				      		</div>
			      		</div>
		      		</div>
		      	</div>
		      </div>
	      </div>
        );
    }
}

export default About;
