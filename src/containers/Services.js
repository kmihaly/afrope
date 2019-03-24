import React, { Component } from 'react'
import LogoBox from '../components/LogoBox';

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
					<div className="services-card__image">
					</div>
					<div className="services-card__overlay" style={{ top: this.state.top }}>
						<span className="services-card__overlay-text">
							OUR PROCESS
							</span>
					</div>
				</div>
				<div className="services-graybox">
					<div className="services-graybox__description">
						<LogoBox style={"logo-box--black"}>
						</LogoBox>
						<p>You live in African and you are an engineer or business undergrad student? Or you have started working but you decided to move your career to the next level with a European degree? Do you simply want to get a high paying career and you know that a degree from oversees could help you achieve it? A European university might be the key for it! We help you finding the best match to reach your goals!</p>
						<p>First things first, a degree from oversees has a great value we all know that. It is not a secret that employers prefer to hire those fresh graduates who have overseas experience. The starting salary of these students is also much higher than those who have never left their countries for academic purposes.</p>
						<p>Let us suggest you to check our publication section to familiarize yourself with the pros and cons of a European master degrees. We add here only those articles that are useful from the African perspective. It means that you do not have to do your research and find the information that suits you the most - we have done it for you.</p>
						<p>We know that finding the best university can be stressful. Especially if you are planning to leave your home country and you want to start your overseas experience. Before you get too overwhelmed let us assure you that we are able to take the stress down from your shoulders. We do the work instead of you allowing you to concentrate on your everydays.</p>
						<p>We know that each and every students are UNIQUE and we do not try to come up with a “one size fits all” solution. Our consultants are the best in the industry with actual experience in Africa and Europe. We find you the best country and best university matching your skills and needs. It is also possible that you already have a university in mind but you are lost in the application process or in the world of scholarships. We recommend you to get in touch with us. We help with the application process, scholarships and visa issues. We will do our best to guide you through this hectic period.</p>
						<p>So what exactly do you get from us? We create a package based on your needs and skills. The package is focusing on two things: YOU and YOUR GOALS.<br />
The package usually contains information like:</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Services;