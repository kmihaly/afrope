import React, { Component } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const items = [
    {
        text:'Spriti introduced new capabilities of the FirstSpriti Digital Experience Platform. Helping marketers serve unmatched cross-phase personalized experiences at every step of the FirstSpriti Digital Experience Platform powers enterprise-class. Helping marketers serve unmatched cross-phase personalized experiences at every step of the FirstSpriti Digital Experience Platform powers enterprise-class.',
        name: 'Johnny Bravo, half-god',
        altText: 'Slide 1',
        key: 'Slide 1'
    },
    {
        text: 'It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform powers enterprise-class. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the FirstSpriti Digital Experience Platform.' ,
        name: 'Katherine Pluto, hunter',
        altText: 'Slide 2',
        key: 'Slide 2'
    },
    {
        text: 'It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform powers enterprise-class. Spriti introduced new capabilities to the awards page of the FirstSpriti Digital Experience Platform. Spriti introduced new capabilities of the FirstSpriti Digital Experience Platform powers enterprise-class. It is pushing the envelope At the end of the customer journey. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the customer journey.',
        name: 'SimOne Echo',
        altText: 'Slide 3',
        key: 'Slide 3'
    }
];

class Clients extends Component {

    state = { activeIndex: 0 }

    onExiting = () => {
        this.animating = true
    }

    onExited = () => {
        this.animating = false
    }

    next = () => {
        if (this.animating) return
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
        this.setState({ activeIndex: nextIndex })
    }

    previous = () => {
        if (this.animating) return
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
        this.setState({ activeIndex: nextIndex })
    }

    goToIndex = (newIndex) => {
        if (this.animating) return
        this.setState({ activeIndex: newIndex })
    }

    render() {

        const { activeIndex } = this.state

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.key}
                >
                    <div 
                        alt={item.altText} 
                        className="carousel-textbox"
                    >
                        <p><i>"{item.text}"</i></p>
                        <p>{item.name}</p>
                    </div> 
                </CarouselItem>
            );
        });

        return (
            <>
                <div className="clients-section" id="clients">
                    <SectionTitle text="Clients" />
                    <div className="clients-text">
                        <span className="clients-text__font">Check out what our clients think of our work</span>
                    </div>
                    <div className="clients-carousel">
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {slides}    
                        </Carousel>
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </div>
                </div>
            </>
        );
    }
}

export default Clients;