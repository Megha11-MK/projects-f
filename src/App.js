import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import { filterData , apiData} from './CommonData';
import './App.css';
import moment from 'moment';


const App = () => {

  const [filters, setFilters] = useState([])
  const [blog, setBlog] = useState([])
  const [searchValue, setSearchValue] = useState("");
 const [originalData, setOriginalData] = useState("");


  

  useEffect(() => {
    setFilters(filterData)
    setBlog(apiData)
   setOriginalData(apiData)
  },  )

  
  const onSearch = () => {
    console.log("searchValue", searchValue)
    const updatedValues = originalData.filter(item => item.authorname.includes(searchValue))
    setBlog(updatedValues)
  
  }

  return (
    <div>
      
      <TopBar />
      

      <input onChange={(e) => setSearchValue(e.target.value)}/> <button onClick={onSearch}>Search</button>
      
      <div className="capsules"> 

        {filters.length && filterData.map(({ id, title }) =>

          <div className="capsule" key={id}> {title} </div>)}
</div>
<div className="blogs">
            {blog.length && blog.map(({authorname,description, id, small_image, title,slug, posted_on}) => 
            <div className="blog"> 
                <img src={small_image}/>
                <h5>{title}</h5>
                <h5>{authorname} {moment.utc(posted_on).format("DD MMM YYYY")}</h5>
                <p>{description}</p>

                </div>
                ) }
        </div>
    </div>
    
  );

}

export default App;