import React from "react";
import './card.css';
export default function Card(props){
    const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
    console.log(imageUrl)
    return (
        <div>
           <img className="card-poster" src={imageUrl}></img> 
        </div>
    );
}