import React from 'react'; 
import Card from '../card/card.component';


const CardList = ({ users }) => {
    
    return(

                <div>    
                    {
                        users.map((user,i)=>{

                        return ( <Card 
                                    key = {i}
                                    id={i}
                                    name={user.name} 
                                    email ={user.email}
                                    mobile={user.mobile}
                                    officetype={user.officetype}
                                />);

                                            })
                    }
                </div>
    );
}

export default CardList;
