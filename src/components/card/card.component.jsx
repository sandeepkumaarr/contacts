import React from 'react';
import './card.style.css';

const Card = ({name,email,mobile,officetype,id}) => {
    
    return(
        <div id="cardcom" className="text-center bg-green-300 inline-block rounded-lg p-4 m-4 border-2 shadow-xl">
            <img alt="robots" src ={`https://robohash.org/${id}?100*100`}/>
            <div>
                
                <h2 className="capitalize text-2xl p-2 font-bold">{name}</h2>
                <p className="text-lg border border-blue-500 ">{email}</p>
                <p className="text-lg border border-blue-500 ">{mobile}</p>
                <p className="capitalize text-lg border border-blue-500">{officetype}</p>
            </div>
        </div>

    );
}

export default Card;