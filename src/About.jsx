import ourStory from "./assets/ourStory.jpg";
import ourCollection from "./assets/ourCollection.jpg";
import ourPromise from "./assets/ourPromise.jpg";
import './About.css';

function AboutUs(){
    return(
        <div className="shop">
            <div className="shop-title">
                <h1>The Legacy of Style & Sophistication</h1>
            </div>

            <div className="about-main-cont">
                <div className="layer-cont">
                    <div className="about-text-cont">
                        <div className="title">
                            <h3>Our Story</h3>
                        </div>
                        <div className="description">
                            <p>
                            Founded with a passion for sophistication, we curate the finest fashion and jewelry that blend elegance with modern trends. Our mission is to bring you luxurious styles that stand the test of time.
                            </p>
                        </div>
                    </div>
                    <div className="about-img">
                        <img src={ourStory} alt="" />
                    </div>
                </div>

                <div className="layer-cont">
                    <div className="about-text-cont">
                        <div className="title">
                            <h3>Our Collection</h3>
                        </div>
                        <div className="description">
                            <p>
                            We believe in providing authentic, high-quality fashion with exceptional customer service. Your satisfaction is our priority, and we strive to make luxury accessible, effortless, and truly unforgettable.
                            </p>
                        </div>
                    </div>
                    <div className="about-img">
                        <img src={ourCollection} alt="" />
                    </div>
                </div>

                <div className="layer-cont">
                    <div className="about-text-cont">
                        <div className="title">
                            <h3>Our Promise</h3>
                        </div>
                        <div className="description">
                            <p>
                            Founded with a passion for sophistication, we curate the finest fashion and jewelry that blend elegance with modern trends. Our mission is to bring you luxurious styles that stand the test of time.
                            </p>
                        </div>
                    </div>
                    <div className="about-img">
                        <img src={ourPromise} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;