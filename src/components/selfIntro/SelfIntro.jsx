import React from 'react'
import "./SelfIntro.css"

export default function SelfIntro() {
  return (
    <>
        <div>
            <h2>Self Intro</h2>

            <table className='selfIntro'>
                <tr>
                    <th>Name</th>
                    <td>Arun Kumar K</td>
                </tr>
                <tr>
                    <th>Education</th>
                    <td>B.E. CSE</td>
                </tr>
                <tr>
                    <th>Skills</th>
                    <td>HTML, CSS, JavaScript, React</td>
                </tr>
                <tr>
                    <th>Location</th>
                    <td>Salem</td>
                </tr>
                <tr>
                    <th>Hobbies</th>
                    <td>Cricket, Badminton</td>
                </tr>
                <tr>
                    <th>Career Goal</th>
                    <td>Full Stack Developer</td>
                </tr>
            </table>
        </div>
    </>
  )
}
