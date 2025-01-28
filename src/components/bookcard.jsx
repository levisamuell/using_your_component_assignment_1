import React from 'react';

function bookCard({ item }){
    return(
        <div key = {item.id}>
            <img src = {item.image} alt="Title" />
            <h2>Name: {item.name}</h2>
            <p>Genre: {item.genre}</p>
            <p>Author: {item.author}</p>

        </div>
    );
};

export default bookCard;