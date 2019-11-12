import React from 'react'

const Scroll = (props) =>{
    return  (

        <div className="overflow-y-scroll border border-black border-solid" style ={{height:'450px'}}>
            {props.children}
        </div>
    );
};


export default Scroll;