  
import React, { useEffect, useState } from 'react';
import Detail from './detail.js';
import 'bootstrap/dist/css/bootstrap.css';
import './search.css';
import logo1 from '.././logo1.png';
import {Link} from 'react-router-dom';
import Carousel from './carousel';
import Profile from './profile.jsx';
import Suggested from './suggested.js';

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