// Topic = activity Like Button

import { useState } from "react";

function LikeButton() {
    let [isLiked, setIsLiked] = useState(false); //same name deto bus set word use karto
    let [clicks, setClicks] = useState(0);

    let toggleLike = () => {
        setIsLiked(!isLiked);
        setClicks(clicks + 1); // <-- This is fixed
    };

    let likeStyle = { color: "red" };

    return (
        <div>
            <hr></hr>
            <h1>Activity - like button</h1>
            <p>Clicks = {clicks}</p>
            <p onClick={toggleLike}>
                {
                    isLiked
                        ? <i className="fa-solid fa-heart" style={likeStyle}></i>
                        : <i className="fa-regular fa-heart"></i>
                }
            </p>
        </div>
    );
}

export default LikeButton;