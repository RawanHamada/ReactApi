import React  from 'react';
import './App.css';

function App() {
  const [state, usestate] =React.useState([]);

  
  React.useEffect(()=>{
    const fetchApi= async()=>{
        await fetch('https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals')
       .then((response) => response.json())
       .then((data) => {usestate(data)});
     }
     fetchApi();
   },[]);


  return (
    <div className="container">
    {state.map((element)=>(
          <div className='card'>
              <img src={element.image}/>
              <p>{element.name}</p>
          </div>
    ))}
  </div>
  
);
}

export default App;
