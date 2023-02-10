import React from 'react'

const Carousel = () => {
  return (
    <div>
        <div className="carousel">
                        <div className="images-wrapper">
                            <img src="images/image1.png" className="carousel-1 show" alt="" />
                            <img src="images/image2.png" className="carousel-2" alt="" />
                            <img src="images/image3.png" className="carousel-3" alt="" />
                        </div>

                        <div className="text-slider">
                                <div className="text-wrap">
                                    <div className="text-group">
                                        <h2>Choose from a variety of courses</h2>
                                        <h2>Keep track of your progress</h2>
                                        <h2>Interact with the teachers directly</h2>
                                    </div>
                                </div>

                                <div className="bullets">
                                    <span className="active" data-value="1"></span>
                                    <span data-value="2"></span>
                                    <span data-value="3"></span>
                                </div>
                        </div>
                </div>
    </div>
  )
}

export default Carousel