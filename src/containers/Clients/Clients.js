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
        text:'I really like what I got. It is a very professional document. Brilliant.',
        name: 'Peter',
        altText: 'Slide 1',
        key: 'Slide 1'
    },
    {
        text: 'Just a quick note to thank you for the great work you were doing! You are on top of everything and it was really great working with you!' ,
        name: 'Andres',
        altText: 'Slide 2',
        key: 'Slide 2'
    },
    {
        text: 'Thank you again for your tremendous professionalism, energy and dedication! It was a delight to work with you and we look forward to staying in touch!',
        name: 'Jane',
        altText: 'Slide 3',
        key: 'Slide 3'
    },
    {
        text: 'I am glad that I decided to work with you. I am grateful that you guided me through this stressful time. It really felt like you understood me from the very beginning.',
        name: 'Roland',
        altText: 'Slide 4',
        key: 'Slide 4'
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
                        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} ride="carousel" interval="6500">
                            
                            {slides}    
                        </Carousel>
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    </div>
                </div>
            </>
        );
    }
}

export default Clients;