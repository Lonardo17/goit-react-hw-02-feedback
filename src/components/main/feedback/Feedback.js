import React from "react";
import s from "./feedback.module.css"
const Feedback = ({addGood,addNeutral,addBad}) => {
        return(<div>
        <h2>Please leave feedback</h2>
           <button type="button" onClick={addGood} className={s.button }>Good</button>
             <button type="button" onClick={addNeutral} className={s.button }>Neutral</button>
             <button type="button" onClick={addBad} className={s.button }>Bad</button>
   </div>)
         
}

export default Feedback;