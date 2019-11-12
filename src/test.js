import React from 'react';
import firebase from './firebase/firebase';
import 'firebase/firestore';

class HomePage extends React.Component {
 
    constructor(props){
        super(props)

        this.state = {

            name: "",
            item: []

        }
    }

    addUser = e => {
        e.preventDefault();

            const firestore = firebase.firestore();
            
            const usersData = []                    
            const userRef = firestore.collection("users").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        usersData.push((doc.data()));                
                   

    });
    console.log(usersData[0].email);

})
        
        console.log(userRef);
      };

render(){

    return (
        <div className="flex flex-col" onClick={this.addUser}>
           <h1>This is a test file</h1>            
        </div>
    );
    
}
}

export default HomePage;