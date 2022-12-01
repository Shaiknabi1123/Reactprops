import {Component} from 'react'
class Event extends Component{
	state={
		username:""
	}
	handlechange=()=>{
		alert()
	}
	render(){
		return(
				<div>
					<input onChange={this.handleChange} placehodler="Enter username"/>
				</div>
			)
	}
}
export default Event