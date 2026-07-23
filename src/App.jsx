import React from 'react'
import SelfIntro from './components/selfIntro/SelfIntro'
import ChildComponent from './components/child/ChildComponent'
import './App.css'
import Counter from './components/counter/Counter'
import ConditionalRendering from './components/conditionalRendering/ConditionalRendering'
import RegisterForm from './components/form/RegisterForm'
import StopWatch from './components/stopwatch/StopWatch'

export default function App() {
  const user1 = {
    Name: "Arun",
    Age: 24,
    City: "Salem",
    Mobile: "9123456780",
    Email: "arun@gmail.com",
    Occupation: "Teacher",
    Address: "123, abc street, Salem"
  }

  const user2 = {
    Name: "Sanjeeth",
    Age: 34,
    City: "Chennai",
    Mobile: "9120056780",
    Email: "sanjeeth@gmail.com",
    Occupation: "Driver",
    Address: "123, xyz street, Chennai"
  }

  const user3 = {
    Name: "Sanjay",
    Age: 28,
    City: "Coimbatore",
    Mobile: "9123016780",
    Email: "sanjay@gmail.com",
    Occupation: "Doctor",
    Address: "123, pqrs street, Coimbatore"
  }

  const user4 = {
    Name: "Nithish",
    Age: 20,
    City: "Kochi",
    Mobile: "9093456780",
    Email: "nithish@gmail.com",
    Occupation: "Engineer",
    Address: "123, uvw street, Kochi"
  }

  const user5 = {
    Name: "Gokul",
    Age: 25,
    City: "Bengaluru",
    Mobile: "9099156780",
    Email: "gokul@gmail.com",
    Occupation: "Lawyer",
    Address: "123, abc street, Bengaluru"
  }

  return (
    <div>
      {/* <h1>Task 01</h1>
      <SelfIntro></SelfIntro> */}

      {/* <h1>Task 02</h1>
      <div className='cardLayout'>
        <ChildComponent userData={user1}></ChildComponent>
        <ChildComponent userData={user2}></ChildComponent>
        <ChildComponent userData={user3}></ChildComponent>
        <ChildComponent userData={user4}></ChildComponent>
        <ChildComponent userData={user5}></ChildComponent>
      </div> */}

      {/* <h1>Task 03</h1>
      <Counter></Counter> */}

      {/* <h1>Task 04</h1>
      <ConditionalRendering></ConditionalRendering> */}

      {/* <h1>Task 05</h1>
      <RegisterForm></RegisterForm> */}

      {/* <h1>Task 06 - Stop Watch</h1><br /> */}
      <StopWatch></StopWatch>

    </div>
  )
}
