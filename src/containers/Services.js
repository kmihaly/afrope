import React, { Component } from 'react'

class Services extends Component {
	state = {
		top: '300px'
	}

	reduceOverlayTop = () => {
		this.setState({
			top: '0px'  
		})
	}

	increaseOverlayTop = () => {
		this.setState({
				top: '300px'  				
		})
	}

	render() {
		return (
				<div className="services-section">
					<div className="services-title">
							<h1 className="heading__secondary">Services</h1>
					</div>
					<div 
						className="services-card"
						onMouseEnter={this.reduceOverlayTop}
						onMouseLeave={this.increaseOverlayTop}
					>
						<div className="services-card__image"></div>
						<div className="services-card__overlay" style={{top: this.state.top}}>
							<span className="services-card__overlay-text">
							OUR PROCESS
							</span>
						</div>
					</div>
			</div>
		);
	}
}

export default Services;