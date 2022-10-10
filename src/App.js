import { useEffect, useState, useCallback, React } from 'react';
import './App.css';
import tv from './assets/tv.gif';
function App() {

  const descriptors = ['Dreamer', 'Creative explorer', 'Creator', 'Programmer']

  const [descriptor,setDescriptor] = useState("Progammer");
  const [showElement,setShowElement] = useState(false)

  const randomDescriptor = useCallback(()=>{
    const index = Math.floor(Math.random() * descriptors.length); 
    setDescriptor(descriptors[index]);
    setShowElement(false);
  },[])

    useEffect(() => {
      let interval;
          if(!showElement){ 
             interval =  setInterval(() => {
              setShowElement(true);
            }, 500);
          } else { 
           interval = setInterval(randomDescriptor, 2500)
          }
          return () => {
            clearInterval(interval);
          }
        }, [randomDescriptor, showElement])

      
    

  return (
    <div className="App">
      <body>
       <div className="banner">
      <div className="title-content">
        <h1>Hello Friend, <br />I'm Andres. </h1>
        <h2>A programmer and a...</h2>
       
      </div>

      <div className="tv-content">
      {showElement && <div className="tv-overlay"> <h2 className='tv-text'>{descriptor}</h2> </div>}
          <img class="television" src={tv} alt="TV" />
         
      </div>

       </div>
        

      </body>
    </div>
    
  );
}

export default App;
