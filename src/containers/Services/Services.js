import React, { Component } from 'react'
import LogoBox from '../../components/LogoBox/LogoBox'
import Package from '../../components/Package'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ScheduleButton from '../../components/ScheduleButton/ScheduleButton'
import {Waypoint} from 'react-waypoint'

class Services extends Component {
	state = {
		top: '300px',
		isProcessCaptionVisible: "block"
	}
/*
	reduceOverlayTop = () => {
		this.setState({
			top: '0px',
			isProcessCaptionVisible: "none"
		})
	}

	increaseOverlayTop = () => {
		this.setState({
			top: '300px',
			isProcessCaptionVisible: "block"
		})
	}
	*/

	changeOverlayTop = () => {
		console.log('state: '+ this.state.isProcessCaptionVisible)
		if (this.state.isProcessCaptionVisible === "block") {
			console.log("just this runs")
			this.setState({
				top: '0px',
				isProcessCaptionVisible: "none"
			})
		} else {
			console.log('made it visible')
			this.setState({
				top: '300px',
				isProcessCaptionVisible: "block"
			})
		}
	}

	scrollSpy = () => {
		console.log("scrollspy runs")
		console.log(window.innerWidth)
		if (window.innerWidth < 600) {
			this.changeOverlayTop()
		}
	}

	render() {
		return (
			<div className="services-section" id="services">
					<Waypoint
						onEnter={this.scrollSpy}
						onLeave={this.scrollSpy}
					/>
					<div
						className="services-card"
						id="services-card"
						onMouseEnter={this.changeOverlayTop}
						onMouseLeave={this.changeOverlayTop}
					>
						<span className="services-card__caption" style={{ display: this.state.isProcessCaptionVisible }}>
							OUR PROCESS
					</span>
						<div className="services-card__overlay" style={{ top: this.state.top }}>
							<span className="services-card__overlay-text">
								OUR PROCESS IS POWERFUL<br />
								1. We analyze your skills and desires<br />
								2. We design the best course of action to take<br />
								3. We provide expert advice<br />
							</span>
						</div>
					</div>
					{/* </Waypoint> */}
				<div className="break-section"></div>
				<SectionTitle text="Services" />
				<div className="graybox">
					<div className="graybox__logo">
						<LogoBox color="black" logoWidthPercent="10" />
					</div>
					<div className="graybox__description graybox__description--2columns">
						<p>A degree from overseas has a great value, we all know that. It is not a secret anymore that employers prefer to hire those fresh graduates who have overseas experience. The starting salary of these students tend to be much higher than those who have never left their countries for academic purposes.We know that finding the best university is stressful especially if you are planning to leave your home country. Before you get too overwhelmed, let us assure you that we are here to make this period EASY for you.</p>
						<p>Every student is unique and we do not try to come up with a “one size fits all” solution. Our consultants are the BEST in the industry with actual experience in Africa and Europe. We help with the application process, scholarships, visa issues, you name it! We know your struggles and will do our best to guide you through this hectic period. YOU and YOUR GOALS are in the middle of our operation!</p>

					</div>
					<div className="graybox__packages">
						<div className="row">
							<div className="col-1-3">
								<Package pictureClass="package-university" sizeClasses="picture-normal" caption="The Best Match University" />
								<Package pictureClass="package-masterprogramme" sizeClasses="picture-normal" caption="The Best Matching Master Programme" />
							</div>
							<div className="col-1-3">
								<Package pictureClass="package-appguide" sizeClasses="picture-normal" caption="Application Guide" />
								<Package pictureClass="package-scholarships" sizeClasses="picture-normal" caption="Scholarships" />
							</div>
							<div className="col-1-3">
								<Package pictureClass="package-travel" sizeClasses="picture-normal" caption="Travel and Visa Arrangement" />
								<Package pictureClass="package-countryguide" sizeClasses="picture-normal" caption="Country Guide" />
							</div>
						</div>
					</div>
					<div className="graybox__bottom_description">
						<p>Get in touch with us to discuss what could be the best for you and how you should reach it. The decision that you take now will determine your entire future! Schedule a FREE call now to see if we can help you.</p>
						<div className="graybox__schedule">
							<ScheduleButton />
						</div>
					</div>
				</div>
				<div className="break-section">
				</div>
			</div>
		);
	}
}

export default Services;