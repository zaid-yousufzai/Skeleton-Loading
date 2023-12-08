
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from './CardSkeleton';

//random api.com
//for random avtar joe schmoe

function App() {

const[userList,setUserList]=useState([]);
const[isLoading,setIsLoading]=useState(true);  //it is used to apply condition when api is in delay skeleton will display else component will display
//for fetching api we need axis package to instsall axios we need to reun nmp i axios
//npm i axios 
//npm i react-loading-skeleton

useEffect(()=>{

setTimeout(()=>
{
  //here setTimeout is used to delay in loading it takes 3 second to load or fetch the data 

  axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
  .then(res=>
    {setUserList(res.data);
  setIsLoading(false);
    });
},1000);


  

},[])

  return (
    <div className="App">


<SkeletonTheme baseColor='red' highlightColor='green' >
    {
    
    isLoading?<>
      <CardSkeleton/>  <CardSkeleton/>  <CardSkeleton/> 

       <CardSkeleton/>  <CardSkeleton/>  <CardSkeleton/>  
    </>
    :
    
    
      userList.map(user=>
      (

        <div className="card">
      <img src={"https://joesch.moe/api/v1/random"+user.first} alt="" />
      <h1>{user.first} {user.last}</h1>
      <h2>{user.email}</h2>
      <h3>{user.address}</h3>
    </div>
      ))
    }
      </SkeletonTheme>
    
    </div>
  );
  
}


export default App;
