import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Navbar'
import "./Home.css"
import Bg from "../assets/bg.jpg"
import Search from "../assets/search-icon-removebg-preview.png"
import kashmir from "../assets/kashmir.png"
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
                        <button><p>Explore now</p> <i class="fa-solid fa-right-long"></i></button>
                    </div>
                    <div className="Cardrefrencs">
                        <div className="location">
                            <div>
                                <i class="fa-solid fa-location-pin"></i>
                            </div>
                            <div>
                                <p>50+</p>
                                <p>Destinations</p>
                            </div>

                        </div>
                        <div className="rating">
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <p>TOP</p>
                                <p>Rated places</p>
                            </div>
                        </div>
                        <div className="guides">
                            <div>
                                <i class="fa-regular fa-map"></i>
                            </div>
                            <div>
                                <p>Travel</p>
                                <p>Guides</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="HomeSearchbar">
                <div className="boxsearc">
                    <div>
                        <i class="fa-regular fa-magnifying-glass"></i>
                        {/* <img src={Search}></img> */}
                    </div>
                    <input type="search" placeholder='Search destinations(e.g. Manasbal, gulmarg,sonamarg)' />
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Home
