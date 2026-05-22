import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import Bg from "../assets/bg.jpg"
function Home() {
    return (
        <div className='Home' >
            <div className="Homecard">
                <Navbar />
                <div className="Card">
                    <div className="cardData">
                        <p className='d1'>Explore kashmir's</p>
                        <p className='d2'>Hidden beauty</p>
                        <p className='d3'>Discover breathtaking destinations, serene lakes,</p>
                        <p className='d3'> majestic mountains and unforgettable journeys.</p>
                    </div>
                    <div className="cardbtn">
                        <button>Explore now </button>
                    </div>
                    <div className="Cardrefrencs">
                        <div className="location">
                            <p>50+</p>
                            <p>Destinations</p>
                        </div>
                        <div className="rating">
                            <p>TOP</p>
                            <p>Rated places</p>
                        </div>
                        <div className="guides">
                            <p>Travel</p>
                            <p>Guides</p>
                        </div>
                    </div>
                </div>
            </div>
            <p>sgsfc</p>
        </div>
    )
}

export default Home
