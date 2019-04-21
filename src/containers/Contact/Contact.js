import React, { Component } from 'react';
import video from '../../images/video/1008365473-preview.mp4';

class Contact extends Component {
    render() {
        return (
            <div className="section-contact">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        {/* <source src="img/video.webm" type="video/webm" /> */}
                        Your browser is not supported!
                    </video>
                </div>
                <div>
                    Nisi tempor commodo ipsum mollit dolor voluptate ullamco laboris id quis. Proident sunt dolore anim dolore occaecat reprehenderit quis ea. Consequat sit voluptate anim sint laboris pariatur laboris aliqua id consequat. Minim cupidatat in elit reprehenderit cupidatat. Nostrud aliquip culpa quis velit consectetur quis ullamco labore cupidatat Lorem dolor eu. Commodo dolor anim dolor fugiat elit cillum eiusmod enim nulla tempor consectetur.

Magna ut ex veniam irure. Cupidatat sit commodo amet consequat velit id laboris. Incididunt incididunt qui culpa laborum tempor voluptate aliquip quis. Aliquip exercitation nulla duis mollit nisi minim laboris ad ex. Ut exercitation nulla amet do culpa aliquip ad qui exercitation excepteur. Veniam pariatur consectetur cupidatat id officia dolor voluptate consectetur minim est ipsum adipisicing. Cillum tempor cupidatat occaecat exercitation et aute duis anim non.

Dolor minim consectetur aute dolor duis adipisicing do nostrud consequat Lorem culpa. In deserunt est magna occaecat duis in voluptate fugiat irure ad Lorem. Pariatur ut exercitation dolore aliquip est labore dolor ea esse voluptate irure. Aute aliqua duis cupidatat ipsum voluptate.
                </div>
            </div>
        );
    }
}

export default Contact;