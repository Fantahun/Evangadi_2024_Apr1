import React from 'react'

export default function ProfileCard({name,age,occupation,profileImage}) {
    // const {name,age,occupation,profileImage} = props
  return (
    <div className='cardHolder'>
      
        <img src={profileImage} alt={name} /> 
        <p className='name'>Name: {name}</p>
        <p className='age'>age: {age}</p>
        <p className='occupation'>Occupation: {occupation}</p>

    </div>
  )
}