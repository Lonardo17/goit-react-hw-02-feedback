import React from "react";
import s from "./statistics.module.css"
const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => 
(<div>
            <h2>Statistics</h2>
            {total === 0 ?("There is no feedback") : (           
                <ul className={s.list}>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive feedback: {positiveFeedback}%</li>
                </ul>
            )
            }
        </div>    
)

export default Statistics;
//  