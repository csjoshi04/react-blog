import React, { Component } from 'react';
import { connect } from "react-redux";

class UserHeader extends Component{

    renderUser(){
        if(this.props.user == null){
            return null
        }
        return (
            <div>
                {this.props.user.name}
            </div>
        )
    }

    render(){
        return (
            <div className="header">
                {this.renderUser()}
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user=>user.id===ownProps.id)
    }
}

export default connect(mapStateToProps)(UserHeader);
