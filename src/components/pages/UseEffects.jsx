import React, { useEffect } from 'react'

function UseEffects() {

    useEffect(()=>{

        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())            
            .then(json=>console.log(json))

        }, 5000)

    }, [])

 
  return (
    

    <>
    
        <div className="container">
            <h2>useEffects</h2>
            <h2>useEffects</h2>
            
            <h2>useEffects</h2>

            <h2>useEffects</h2>

            <h2>useEffects</h2>


        </div>
    
    
    
    </>




  )
}

export default UseEffects