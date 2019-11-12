import React from 'react';

const Card = ({name,email,mobile,officetype,id}) => {
    
    return(
        <div className="text-center bg-green-300 inline-block rounded p-3 m-3 border-2 shadow-xl">
            <img alt="robots" src ={`https://robohash.org/${id}?200*200`}/>
            <div>
                
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{mobile}</p>
                <p>{officetype}</p>
            </div>
        </div>

    );
}

export default Card;