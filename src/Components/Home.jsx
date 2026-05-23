import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Navbar'
import "./Home.css"
import Bg from "../assets/bg.jpg"
import Search from "../assets/search-icon-removebg-preview.png"
import kashmir from "../assets/kashmir.png"
import Manasbal from "../assets/Places/manasbal.png"
import Gulmarg from "../assets/Places/Gulmarg.png"
import Sonmarg from "../assets/Places/Sonmarg.png"
import Mountain from "../assets/Category/Mountain.png"
let places = [
    {
        img1: Manasbal,
        Name: "manasbal",
        Description: "Manasbal Lake is one of Kashmir’s most beautiful lakes, known for its calm waters, mountain views, and peaceful surroundings.",
    },
    {
        img1: Gulmarg,
        Name: "Gulmarg",
        Description: "Gulmarg is a famous hill station in Kashmir, popular for snow-covered mountains, gondola rides, and breathtaking landscapes.",
    },
    {
        img1: kashmir,
        Name: "Sonamarg",
        Description: "Sonamarg, known as the Meadow of Gold, offers stunning valleys, glaciers, rivers, and unforgettable mountain scenery......................",
    }
];
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
            <div className="FutureDetinationOuter">
                <div className="FutureDetinationLabel">
                    <div className="dd1">
                        <h1>Featured Destination</h1>
                        <p>Explore some of the beautiful pleaces in kashmir</p>
                    </div>
                    <div className="dd2">
                        <button>View all</button>
                        <i class="fa-solid fa-right-long"></i>
                    </div>
                </div>
                <div className="FutureDetination">
                    {places.map((place, index) => (
                        <div className="card">
                            <img src={place.img1} alt={place.Name} />
                            <h2>{place.Name}</h2>
                            <p>{place.Description}</p>
                            <div className='cardBtn'>
                                <button>Explore</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Categories">
                <div className='CategoriesTitle'>
                    Explore by Categories
                </div>
                <div className="CategoriesPLaces">
                    <div className="placsDEs">
                        <img src={Mountain} alt="" />
                        <p>Mountain</p>
                        <button>Explore</button>
                    </div>
                    <div className="placsDEs">
                        <img src={Mountain} alt="" />
                        <p>Lakes</p>
                        <button>Explore</button>
                    </div>
                    <div className="placsDEs">
                        <img src={Mountain} alt="" />
                        <p>Gardens</p>
                        <button>Explore</button>
                    </div>
                    <div className="placsDEs">
                        <img src={Mountain} alt="" />
                        <p>Historical</p>
                        <button>Explore</button>
                    </div>
                    <div className="placsDEs">
                        <img src={Mountain} alt="" />
                        <p>Religous</p>
                        <button>Explore</button>
                    </div>
                    <div className="placsDEs">
                        <img src={Mountain} alt="" />
                        Advanture
                        <button>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
