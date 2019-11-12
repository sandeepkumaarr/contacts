import React, {Component} from 'react';
import firebase from './firebase/firebase';
import 'firebase/firestore';
import CardList from './components/cardlist/cardlist.component';
import SearchBox from './components/searchbox/searchbox.component';
import Scroll from './components/scroll/scroll.component';
import ErrorBoundry from './components/errorboundry/errorboundry.component';
import './App.css';


class App extends Component {

    constructor(props)   {
        super(props)
        this.state = {
            users: [],
            searchfield:''
        }

    }

    componentDidMount() {                 
        
      
      const db = firebase.firestore();
      db.collection("users")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ users: data });
      });
  }


  onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    
    }
   
    
    render(){
      const filteredUsers = this.state.users.filter(user =>{

          return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

})

      return(
              <div className ='text-center h-screen'>
              <h1 className = "text-4xl mb-1 p-2">CONTACTS</h1>
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