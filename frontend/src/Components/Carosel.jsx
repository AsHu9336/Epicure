import React, { useState } from 'react'
import './Carosel.css'

export default function Carosel() {

  const [searchTerm, setsearchTerm] = useState('');
  const handlechange = (e) => {
    e.preventDefault();
    setsearchTerm(e.target.value)

  }


  return (
    <>
      <div id="carouselExample" class="carousel slide">
        {/* <button>
          <input type='text' placeholder='Search' />
          <label>Search</label>
        </button> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://source.unsplash.com/random/700x200/?burger" class="d-block w-100 z-0 position-relative" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/700x200/?pizza" class="d-block w-100 z-0 position-relative" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/700x200/?noddles" class="d-block w-100 z-0 position-relative" alt="..." />
          </div>
          <div class=" carousel-caption  " style={{ zIndex: "9" }}>
            <form className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
              <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search..." aria-label="Search" />
              <button className="btn text-white bg-success" type="submit" onChange={handlechange} value={searchTerm}>Search</button>
            </form>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
