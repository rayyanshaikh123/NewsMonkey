
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import News from './components/News';
import {
  HashRouter as Router,
   Route,
    Routes
} from "react-router-dom";
 const App = ()=>  {
var pagesize = 6;
  const apiKey = process.env.REACT_APP_API_KEY;
 const [progress,setProgress] = useState(0)
    return (
      <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Navbar/>
      <div className="container w-100">
      <Routes>
          
          <Route exact path="/" element={<News setProgress={setProgress } apiKey={apiKey}   key="general" heading="NewsMonkey" pageSize= {pagesize} country ='in' category = "general"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress } apiKey={apiKey}   key="business" heading="Business" pageSize= {pagesize} country ='in' category = "business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress } apiKey={apiKey}   key="entertainment" heading="Entertainment" pageSize= {pagesize} country ='in' category = "entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress } apiKey={apiKey}   key="general" heading="General"pageSize= {pagesize} country ='in' category = "general"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress } apiKey={apiKey}   key="health" heading="Health" pageSize= {pagesize} country ='in' category = "health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress } apiKey={apiKey}   key="science" heading="Science" pageSize= {pagesize} country ='in' category = "science"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress } apiKey={apiKey}   key="sports" heading="Sports" pageSize= {pagesize} country ='in' category = "sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress } apiKey={apiKey}   key="technology" heading="Technology" pageSize= {pagesize} country ='in' category = "technology"/>}/>


      </Routes>
        
      </div>
      </Router>
      </>
    )
  
}

export default App