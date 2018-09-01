import React , {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';




class App  extends Component {
	constructor(){
		super()
		this.state = {
					 robots: [],
					 searchField: ''
				     } ;
	}
	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users')
		.then (response => {
            return  response.json();
		})
		.then(users => {
			this.setState({ robots: users})
		})
		.catch(err=>console.log)
		
	}
	OnsearchChange = (event) =>{
		this.setState({ searchField: event.target.value})
		
		
	}
	render(){
	  const filteredrobot = this.state.robots.filter((robot) => {
              return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
       return (
		   <div className='tc'>
		         <h1 className="f1">Robofriends</h1>
		         <SearchBox searchChange = {this.OnsearchChange} />
		         <Scroll>
			     <CardList robots = {filteredrobot }/>;
			     </Scroll>
	       </div>)
        }
   }
	
export default App;

