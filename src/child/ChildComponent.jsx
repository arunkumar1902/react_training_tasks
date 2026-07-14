import React from 'react'
import './ChildComponent.css'

export default function ChildComponent({userData}) {
  return (
    <div className='card'>
        <p><b>Name : </b>{userData.Name}</p>
        <p><b>Age : </b>{userData.Age}</p>
        <p><b>City : </b>{userData.City}</p>
        <p><b>Mobile : </b>{userData.Mobile}</p>
        <p><b>Email : </b>{userData.Email}</p>
        <p><b>Occupation : </b>{userData.Occupation}</p>
        <p><b>Address : </b>{userData.Address}</p>
    </div>
  )
}
