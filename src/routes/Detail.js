import React, {useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
    const location= useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state === undefined){
            navigate("/");
        } else if (location.state === null){
            navigate("/");
        }
    });


    if (location.state){
         return (
            <div>
                <img src={location.state.poster} alt={location.state.poster} title={location.state.poster}/>
                <h1>{location.state.title}</h1>
                <p>year:{location.state.year}</p>
                <p>genre: {location.state.genres}</p>
                <p>{location.state.summary}</p>
            </div>
        );
    } else {
        return null;
    }
}

export default Detail;