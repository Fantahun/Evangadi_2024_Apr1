import React, { Component } from 'react';

// Child component
class UserProfile extends Component {
  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <h3>{this.props.username}</h3>
        <p>Age: {this.props.age}</p>
        <p>Location: {this.props.location}</p>
      </div>
    );
  }
}

export default UserProfile;

        // <UserProfile username="JohnDoe" age={28} location="New York" />
        // <UserProfile username="JaneDoe" age={25} location="San Francisco" />
