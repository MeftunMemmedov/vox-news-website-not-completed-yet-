import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPoliticNews, getSepcificNews } from '../redux/newsSlice'
import SingleNews from '../components/SingleNews'
import '../assets/css/politics.css'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

const Politics = () => {
    
    const {news,isLoading}=useSelector(store=>store.news)

    const specificNews=news.filter((news)=>news.category.some((category)=>category=='Politics'))

    if(isLoading) return (<Loading />)

  return (
    <>
      <div className="container-fluid">
        <div className="container my-5">

            <div className="row border-bottom border-5 my-4 politics-head-text-box">
                <div className="col-lg-6 col-12 m-auto my-2">
                <h2 className='merriweather-bold-italic '>Politics</h2>
                <p>Vox's politics team explains everything you need to know about what's going on in Washington and what it means for your life.</p>
                </div>
            </div>
        </div>

        <div className="container-fluid  border mb-5">
          <div className="row top-politic-news overflow-hidden">
            <div className="col-lg-7 col-12 d-flex justify-content-center align-items-center p-0 position-relative">

              <img src={specificNews[0]?.main_img} className='w-100 object-fit-cover h-100'/>

              <div className="row position-absolute bg-secondary w-75 p-5 opacity-75">
                <div className="col-12">
                  <h3 className='fw-bold'>{specificNews[0]?.title}</h3>
                  <p><i>By {specificNews[0]?.written_by}</i></p>
                </div>
              </div>

            </div>

            <div className="col-lg-5 col-12 h-100">
              <div className="row h-100 ">
                <div className="col-lg-12 col-md-6 h-50  overflow-hidden p-0 d-flex justify-content-center align-items-center position-relative">
                  <img src={specificNews[1]?.main_img} className='w-100' />

                  <div className="row position-absolute w-100 p-5 top-news-title-box" style={{bottom:"-50px"}}>
                    <div className="col-12">
                    <Link className='nav-link' to={`/news/${specificNews[1]?.id}`}><h5 className='fw-bold text-light'>{specificNews[1]?.title}</h5></Link>
                      <p className='text-light'>By <Link className='nav-link d-inline' to={`/authors/${specificNews[1]?.written_by}`}>{specificNews[1]?.written_by}</Link></p>
                    </div>
                  </div>
                  
                </div>
                <div className="col-lg-12 col-md-6 h-50 overflow-hidden p-0 d-flex justify-content-center align-items-center position-relative" >
                  <img src={specificNews[2]?.main_img} className='w-100 object-fit-cover'/>
                  
                  <div className="row position-absolute w-100 p-5 top-news-title-box" style={{bottom:"-50px" }}>
                    <div className="col-12">
                      <Link className='nav-link' to={`/news/${specificNews[2]?.id}`}><h5 className='fw-bold text-light'>{specificNews[2]?.title}</h5></Link>
                      <p className='text-light'>By <Link className='nav-link d-inline' to={`/authors/${specificNews[2]?.written_by}`}>{specificNews[2]?.written_by}</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12">

                    {
                    specificNews.map((politicNews)=>{
                        return(
                             <SingleNews news={politicNews} />   
                        )
                    })
                    }

                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Politics
