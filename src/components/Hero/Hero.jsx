import heroImage from "../../assets/images/heroImage.png"
import "./Hero.css"
function Hero() {
  return (
    <>
        <section className='hero' id='home'>
            <div className="container-fluid p-0">
                <div className="hero-image">
                    <img src={heroImage} alt={"Hero Banner"} className='img-fluid w-100'/>
                    <div className="hero-overlay">
                        <div className="container">
                            <div className="hero-content">
                                <h1>Cooler Living.
                                    <br />
                                    <span>Smarter Choice.</span>
                                </h1>
                                <p>Discover energy-efficient fans built for comfort, performance and modern living</p>
                                <button
                                    className="btn btn-success pt-1 px-4"
                                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Explore Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero
