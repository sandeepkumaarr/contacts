import React, {Component} from 'react';
import firebase from './firebase/firebase';
import 'firebase/firestore';
import CardList from './components/cardlist/cardlist.component';
import SearchBox from './components/searchbox/searchbox.component';
import Scroll from './components/scroll/scroll.component';
import ErrorBoundry from './components/errorboundry/errorboundry.component';


class App extends Component {

    constructor(props)   {
        super(props)
        this.state = {
            users: [],
            searchfield:''
        }

        console.log('one');
    }

    componentDidMount() {                 
        
      // this.onDataChange();
      // console.log('two');
      const db = firebase.firestore();
      db.collection("users")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ users: data });
      });
  }

//   onDataChange = () => {
//       const firestore = firebase.firestore();  
//       let usersData = []    
//       firestore.collection("users").get().then(function(querySnapshot) {

//         querySnapshot.forEach(function(doc) {
       
//            usersData.push((doc.data()));
//     }); 
//   })
//   this.setState({
//     users: usersData,
//   });
//   console.log('three');
// }

  onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    
    }
   
    
    render(){
      console.log('five')
      const filteredUsers = this.state.users.filter(user =>{

          return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

})

      return(
              <div className ='text-center'>
              <h1 className = "text-4xl">CONTACTS</h1>
              <SearchBox searchChange = {this.onSearchChange}/>
              <Scroll>
                  <ErrorBoundry>
                      <CardList users = {filteredUsers}/>
                  </ErrorBoundry>    
              </Scroll>
              </div>
      );
  }

}

export default App;