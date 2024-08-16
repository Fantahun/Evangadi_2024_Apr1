import React from 'react'

function Welcome2(props) {
  return (
    <div>
      <h1>እንኳን ደህና መጡ፡ {props.name}!</h1>
    </div>
  )
}

Welcome2.defaultProps = {
    name: 'Guest',
  };

export default Welcome2
