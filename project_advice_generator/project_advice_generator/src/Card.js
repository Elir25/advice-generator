import react, { useState } from "react";
import axios from "axios";

function Card() {
    const [advice, setAdvice] = useState("")
    const getAdvice = () => {
         
    axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            console.log(response)
            setAdvice(response.data.slip.advice)
          })
          .catch((error) => {
            // handle error
            console.log(error);
          })
    }
    
     getAdvice()
    return (
        <div className="card">
            <h2>some cool advice here!!</h2>
            <h3>{advice}</h3>
            <button onClick={getAdvice}>click here</button>
        </div>
    )

}


export default Card;