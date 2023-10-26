import React,{Component} from "react";
class  User extends Component{
    
    render(){
        const data ={
            firstName :'anand',
            lastName:'kumar',
        }
        return(
        <div>
            {this.state.firstName}
            {this.state.lastName}
        </div>
        )
    }
}
export default User;