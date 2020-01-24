  
import React, { useEffect, useState } from 'react';
import Detail from './detail.js';
import 'bootstrap/dist/css/bootstrap.css';
import './search.css';
import Carousel from './carousel';
import Profile from './profile.jsx';
import Navbar1 from './navbar1.jsx';


const Search = () => {

  const [detail, setdetail] = useState([]);
  const [search, setSearch] = useState(' ');
  const [query, setQuery] = useState('');
  const [search1, setSearch1] = useState(' ');
  const [query1, setQuery1] = useState('');

  useEffect( () => {
    getDetails();
  },[query,query1]);
  
  


  const getDetails = async () => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${query}&location=${query1}`);
    const response1 =await fetch(`http://localhost:7000/postjob?location=${query1}&description=${query}`);
    const data = await response.json();
    const data1 = await response1.json();
    var alldata = data.concat(data1);
    setdetail(alldata);
    console.log(alldata);
  }
 

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const updateSearch1 = e => {
    setSearch1(e.target.value);
    console.log(search1);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search); 
    setQuery1(search1);
  }
  return(
    <div className="Job-Search">   
<Navbar1/>
<br/>
<br/>




    <center>
      <div class="s01" data-aos="fade" data-stellar-background-ratio="0.5">
   
        
      <form onSubmit={getSearch} className="search-form">        
<div class="inner-form">
          <div class="input-field first-wrap">
    <h2 style={{fontSize:"50px",color:"red"}}><b>Specification</b></h2> 
    <div>
       <input 
       name="search" 
       //type="text"
        placeholder="search" 
        value={search} 
         onChange={updateSearch} 
         />
         </div>   
          </div>
          
<div class="input-field second-wrap">
             <h2 style={{fontSize:"50px",color:"red"}}><b>Location</b></h2>
            <input id="location" type="text" placeholder="location"  value={search1} onChange={updateSearch1} required/>
          
</div>
      <div class="input-field third-wrap">
        <button class="btn-search" type="submit">Search</button>
      </div>        
</div>
      </form>
    </div>

    </center>
    
    <hr/>



   
  
<div class="row">
  <div class="col-xs-0 col-sm-3 col-lg-3" >
  
  <Profile/>


  </div>
  <div class="col-xs-12 col-sm-6 col-lg-6" >
  <center><h1>Suggested Jobs</h1></center>
  {detail.map(details => (
      <Detail
      Company={details.company}
      Location={details.location}
      title={details.title}
      type={details.type}
      how={details.how_to_apply}
      />
      ))}


  </div>
  <div class="col-xs-0 col-sm-3 col-lg-3">

    
    <Carousel/>






    </div>

</div>




{/*categories cards*/}

<div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto text-center mb-5 section-heading">
            <h2 class="mb-5">Popular Categories</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="100">
            <a href="#" class="h-100 feature-item">
              <span class="d-block icon flaticon-calculator mb-3 text-primary"></span>
              <h2>Accounting / Finanace</h2>
              <span class="counting">10,391</span>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="200">
            <a href="#" class="h-100 feature-item">
              <span class="d-block icon flaticon-wrench mb-3 text-primary"></span>
              <h2>Automotive Jobs</h2>
              <span class="counting">192</span>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="300">
            <a href="#" class="h-100 feature-item">
              <span class="d-block icon flaticon-worker mb-3 text-primary"></span>
              <h2>Construction / Facilities</h2>
              <span class="counting">1,021</span>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="400">
            <a href="#" class="h-100 feature-item">
              <span class="d-block icon flaticon-telecommunications mb-3 text-primary"></span>
              <h2>Telecommunications</h2>
              <span class="counting">1,219</span>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="500">
            <a href="#" class="h-100 feature-item">
              <span class="d-block icon flaticon-stethoscope mb-3 text-primary"></span>
              <h2>Healthcare</h2>
              <span class="counting">482</span>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="600">
            <a href="#" class="h-100 feature-item">
              <span class="d-block icon flaticon-computer-graphic mb-3 text-primary"></span>
              <h2>Design, Art &amp; Multimedia</h2>
              <span class="counting">5,409</span>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="700">
            <a href="#" class="h-100 feature-item">
              <span class="d-block icon flaticon-trolley mb-3 text-primary"></span>
              <h2>Transportation &amp; Logistics</h2>
              <span class="counting">291</span>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="800">
            <a href="#" class="h-100 feature-item">
              <span class="d-block icon flaticon-restaurant mb-3 text-primary"></span>
              <h2>Restaurant / Food Service</h2>
              <span class="counting">329</span>
            </a>
          </div>
        </div>

      </div>
    </div>






{/*Footer stART*/}

    <footer class="site-footer">
      <div class="container">
        

        <div class="row">
          <div class="col-md-4">
            <h3 class="footer-heading mb-4 text-white">About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.</p>
            <p><a href="#" class="btn btn-primary pill text-white px-4">Read More</a></p>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6">
                <h3 class="footer-heading mb-4 text-white">Quick Menu</h3>
                  <ul class="list-unstyled">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Approach</a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Careers</a></li>
                  </ul>
              </div>
              <div class="col-md-6">
                <h3 class="footer-heading mb-4 text-white">Categories</h3>
                  <ul class="list-unstyled">
                    <li><a href="#">Full Time</a></li>
                    <li><a href="#">Freelance</a></li>
                    <li><a href="#">Temporary</a></li>
                    <li><a href="#">Internship</a></li>
                  </ul>
              </div>
            </div>
          </div>

          
          <div class="col-md-2">
            <div class="col-md-12"><h3 class="footer-heading mb-4 text-white">Social Icons</h3></div>
              <div class="col-md-12">
                <p>
                  <a href="#" class="pb-2 pr-2 pl-0"><span class="icon-facebook"></span></a>
                  <a href="#" class="p-2"><span class="icon-twitter"></span></a>
                  <a href="#" class="p-2"><span class="icon-instagram"></span></a>
                  <a href="#" class="p-2"><span class="icon-vimeo"></span></a>

                </p>
              </div>
          </div>
        </div>
        
      </div>
    </footer>



</div>





  );
};
export default Search;
/*







import React, { useEffect, useState } from 'react';
import Detail from './detail.js';
import 'bootstrap/dist/css/bootstrap.css';
import './search.css';
import logo1 from '.././logo1.png';
import {Link} from 'react-router-dom';
import Carousel from './carousel.jsx';
import Profile from './profile.jsx';
const Search = () => {

 const [detail, setdetail] = useState([]);
 const [search, setSearch] = useState(' ');
 const [query, setQuery] = useState('');
 const [search1, setSearch1] = useState(' ');
 const [query1, setQuery1] = useState('');

 useEffect( () => {
   getDetails();
 },[query,query1]);
 
 const getDetails = async () => {
   const response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${query}&location=${query1}`);
   const data = await response.json();
   setdetail(data)
   console.log(data);
 }

 const updateSearch = e => {
   setSearch(e.target.value);
   console.log(search);
 };

 const updateSearch1 = e => {
   setSearch1(e.target.value);
   console.log(search1);
 };

 const getSearch = e => {
   e.preventDefault();
   setQuery(search); 
   setQuery1(search1);
 }
 return(
   <div className="Job-Search">   






<div className="row">
             <div className="col">
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                 <div className="navbar-brand ml-12 pl-14">
                 <img src={logo1} alt="pic" width="80px" height="40px"></img>
                     </div>
                     <div className="navbar-nav">
                     <a>Home</a>
                     </div>
                     <div className="navbar-nav">
                     <a><Link to='postjob'>Post Job</Link></a>
                     </div>
                     <div className="navbar-nav">
                     <a>Profile</a>
                     </div>
                     <div className="navbar-nav">
                     <a>Message</a>
                     </div>
                     
                 </nav>
             </div>
         </div >
<br/>
<br/>




   <center>
     <div class="s01">
     <form onSubmit={getSearch} className="search-form">        
<div class="inner-form">
         <div class="input-field first-wrap">
        
<input id="search" type="text" placeholder="Specification" value={search}  onChange={updateSearch} required />
         </div>
         
<div class="input-field second-wrap">

           <input id="location" type="text" placeholder="location"  value={search1} onChange={updateSearch1} required/>
         
</div>
     <div class="input-field third-wrap">
       <button class="btn-search" type="submit">Search</button>
     </div>        
</div>
     </form>
   </div>

   </center>
   
   <hr/>



  
   

  
 
<div class="row">
 <div class="col-xs-0 col-sm-3 col-lg-3" >
 <Profile/>



 </div>
 <div class="col-xs-12 col-sm-6 col-lg-6" >

 {detail.map(details => (
     <Detail
     Company={details.company}
     Location={details.location}
     title={details.title}
     type={details.type}
     how={details.how_to_apply}
     />
     ))}

 </div>

 <div class="col-xs-0 col-sm-3 col-lg-3">
 <Carousel/>

</div>

</div>
</div>
 );
};
export default Search;*/