import React, { useEffect, useState } from 'react';

const Event = () => {
  const [detail, setdetail] = useState([]);
  const [search, setSearch] = useState(' ');
  const [query, setQuery] = useState('');

  useEffect( () => {
     getDetails();
  },[query]);
  
  const getDetails = async () => {
    const response = await fetch(`https://www.eventbriteapi.com/v3/users/me/?token=WOWYYTGWFYSNZKEQYS3N`);
    const data = await response.json();
    setdetail(data)
    console.log(data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return(
     <div className="App">
       <form onSubmit={getSearch} className="search-form">
         <input className="search-bar" type="text" value={search} onChange={updateSearch} />
         <button className="search-button" type="submit">Search</button>
       </form>
       {/*{detail.map(details => (
         <Detail
         description={details.description}
         title={details.title}
         type={details.type}
         />
      ))}*/}
     </div>
  );
};
export default Event;