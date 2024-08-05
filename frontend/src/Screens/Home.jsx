import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
//import Footer from './Footer'
//import Carosel from '../Components/Carosel'
//import '../Components/Carosel.css'
import Footer from './Footer'
//import Carosel from '../Components/Carosel'

export default function Home() {

  const [cat_data, setcat_data] = useState([]);
  const [food_item, setfood_item] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/fooddata", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json()

    //console.log(response[0],response[1])
    setcat_data(response[1])
    setfood_item(response[0])
  }

  useEffect(() => {
    loadData()
  }, [])


  const [searchTerm, setsearchTerm] = useState('');

  const handlechange = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    setsearchTerm(e.target.value)
  }


  return (
    <>
      <Navbar />
      {/* <Carosel/> */}
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        {/* <button>
          <input type='text' placeholder='Search' />
          <label>Search</label>
        </button> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://source.unsplash.com/random/700x200/?burger,cheeseburger" class="d-block w-100 z-0 position-relative" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/700x200/?pizza,pannerpizza" class="d-block w-100 z-0 position-relative" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/700x200/?biryani,chicken" class="d-block w-100 z-0 position-relative" alt="..." />
          </div>
          <div class=" carousel-caption  " style={{ zIndex: "9" }}>
            <form className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
              <input className="form-control me-2 w-75 bg-white text-dark" type="search" onChange={handlechange} value={searchTerm} placeholder="Search..." aria-label="Search" />
              {/* <button className="btn text-white bg-success" type="submit" >Search</button> */}
            </form>
          </div>
        </div>

        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>


      <div className="d-flex flex-column flex-fill" >
        {
          cat_data == []
            ? <div></div>
            : cat_data.map((data) => {
              return (
                <>
                  <div className='container mt-4 p-4 bg-warning rounded-3' key={data._id} >
                    <h3 className=''>{data.CategoryName} <br /></h3>
                  </div>
                  <hr />
                  <div className='container d-flex flex-row flex-fill flex-wrap'>


                    {
                      food_item == []
                        ? <div></div>
                        : food_item.filter((food_data) => (food_data.CategoryName == data.CategoryName) && (food_data.name.toLowerCase().includes(searchTerm.toLowerCase()))).map((filter_food_data) => {
                          return (
                            <div key={filter_food_data.name}>
                              <Cards food_data={filter_food_data}
                                food_options={filter_food_data.options[0]} />
                            </div>
                          )
                        })
                    }
                  </div>
                </>
              )
            })
        }
      </div>

      <Footer/>

    </>
  )
}
