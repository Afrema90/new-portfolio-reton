import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const AwardsWon = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
            
            <div className="awards-area border-bottom pt-100 pb-70">
                <div className="common-right-text">
                    <span>AWARDS</span>
                </div>

                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">AWARDS</span>
                        <h2>I Achieved <span>Numerous</span> Awards During This Long Journey</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-sm-6 col-lg-6">
                            <div className="awards-inner">
                                <ul className="align-items-center">
                                    <li>
                                        <img src="/images/awards/award1.png" alt="Awards" />
                                    </li>
                                    <li>
                                        <h3>Best Graphic Designer</h3>
                                        <span>2014-2016</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="awards-inner">
                                <ul className="align-items-center">
                                    <li>
                                        <img src="/images/awards/award2.png" alt="Awards" />
                                    </li>
                                    <li>
                                        <h3>Design Of The Year</h3>
                                        <span>2017-2018</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="awards-inner">
                                <ul className="align-items-center">
                                    <li>
                                        <img src="/images/awards/award3.png" alt="Awards" />
                                    </li>
                                    <li>
                                        <h3>Best Designer Award</h3>
                                        <span>2019-2020</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-6">
                            <div className="awards-video">
                                <img src="/images/awards/award-main.jpg" alt="Award" />
                                <div className="video-wrap">
                                    <Link href="#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); openModal()}}
                                            className="popup-youtube"
                                        > 
                                            <i className='bx bx-play'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AwardsWon;