import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from '../robots'; // because we don't hava export default, we have to user destructor {}
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {

  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ robots: users})});
  // }

  async componentDidMount() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      this.setState({ robots: users });
    } catch (err) {
      console.log(err)
    }
  }



  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    // if we don't use arrow(=>) function, this will be the parenet of what happend, 
    // for below example, onSearchChange is called by SearchBox, input, the 'this' should be input
    // If we use arrow function, we can make sure that this is the APP
    // const fiflterRobots = this.state.robots.filter(robot => {
    //   return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    // })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />

          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default App;