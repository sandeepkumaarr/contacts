import React from 'react';

const SearchBox = ({searchChange}) =>{
    return (
        <div className ='p-2'>

            <input  className ='p-3 placeholder-white border border-green-300 bg-blue-400 text-white'
                    type='search' 
                    placeholder="Search Users" 
                    onChange = {searchChange}
            />

        </div>
    );
}

export default SearchBox;