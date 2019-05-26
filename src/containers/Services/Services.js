import React, { Component } from 'react'
import LogoBox from '../../components/LogoBox/LogoBox'
import Package from '../../components/Package'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ScheduleButton from '../../components/ScheduleButton/ScheduleButton'

class Services extends Component {
	state = {
		top: '300px',
		isProcessCaptionVisible: "block"
	}

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

	render() {
		return (
			<div className="services-section" id="services">
				<div
					className="services-card"
					onMouseEnter={this.reduceOverlayTop}
					onMouseLeave={this.increaseOverlayTop}
				>
					<span className="services-card__caption" style={{display: this.state.isProcessCaptionVisible}}>
					OUR PROCESS
					</span>
					<div className="services-card__overlay" style={{ top: this.state.top }}>
						<span className="services-card__overlay-text">
						OUR PROCESS IS POWERFUL<br />
						1. We analyze your need and desire<br />
						2. We figure out the best course of action to
						take<br />
						3. We provide expert advice<br />
							
						</span>
					</div>
				</div>
				<SectionTitle text="Services" />
				<div className="graybox">
					<div className="graybox__description graybox__description--2columns">
						<LogoBox color="black" logoWidthPercent="20" />
						<p>You live in African and you are an engineer or business undergrad student? Or you have started working but you decided to move your career to the next level with a European degree? Do you simply want to get a high paying career and you know that a degree from oversees could help you achieve it? A European university might be the key for it! We help you finding the best match to reach your goals!</p>
						<p>First things first, a degree from oversees has a great value we all know that. It is not a secret that employers prefer to hire those fresh graduates who have overseas experience. The starting salary of these students is also much higher than those who have never left their countries for academic purposes.</p>
						<p>Let us suggest you to check our publication section to familiarize yourself with the pros and cons of a European master degrees. We add here only those articles that are useful from the African perspective. It means that you do not have to do your research and find the information that suits you the most - we have done it for you.</p>
						<p>We know that finding the best university can be stressful. Especially if you are planning to leave your home country and you want to start your overseas experience. Before you get too overwhelmed let us assure you that we are able to take the stress down from your shoulders. We do the work instead of you allowing you to concentrate on your everydays.</p>
						<p>We know that each and every students are UNIQUE and we do not try to come up with a “one size fits all” solution. Our consultants are the best in the industry with actual experience in Africa and Europe. We find you the best country and best university matching your skills and needs. It is also possible that you already have a university in mind but you are lost in the application process or in the world of scholarships. We recommend you to get in touch with us. We help with the application process, scholarships and visa issues. We will do our best to guide you through this hectic period.</p>
						<p>So what exactly do you get from us? We create a package based on your needs and skills. The package is focusing on two things: YOU and YOUR GOALS.</p>
						<p>The package usually contains information like:</p>
					</div>
					<div className="graybox__packages">
						<div className="row">
							<div className="col-1-3">
								<Package pictureClass="package-bestcountry" sizeClasses="picture-normal" caption="the best country"/>
								<Package pictureClass="package-university" sizeClasses="picture-normal" caption="the best matching universities"/>
								<Package pictureClass="package-masterprogramme" sizeClasses="picture-normal" caption="the best matching master programme"/>
							</div>
							<div className="col-1-3">
								<Package pictureClass="package-appguide" sizeClasses="picture-normal" caption="step by step application guide"/>	
								<Package pictureClass="package-information" sizeClasses="picture-normal" caption="travel and visa information"/>
								<Package pictureClass="package-scholarships" sizeClasses="picture-normal" caption="scholarships and application guide"/>
							</div>
							<div className="col-1-3">
								<Package pictureClass="package-culture" sizeClasses="picture-normal" caption="culture"/>
								<Package pictureClass="package-accommodation" sizeClasses="picture-normal" caption="accommodation"/>
								<Package pictureClass="package-friends" sizeClasses="picture-normal" caption="friends"/>
							</div>
						</div>
					</div>
					<div className="graybox__description">
					<p>If you are hesitating get in touch with us to discuss what could be the
						best for you. It is normal to feel stressed because you are before a huge
						change in your life! The decision that you make now will determine your
						entire future!</p>
					<p>Do you have questions? Schedule a call now to see if we can help you.
						The call is totally free, there are no hidden costs. This is our appreciation
						for your interest.</p>
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