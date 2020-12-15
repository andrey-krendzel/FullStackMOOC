import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  var ids = props.id
  var names = props.name




  return (
    <h1>{props.id}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return(
    <p>Number of exercises {sum}</p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </div>
  )
}

const Course = ({ course, id, name}) =>
{
  return(
    <div>
      <Header course={course} id={id} name={name}/>
    </div>
  )
}

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  const id = course.map(courses => courses.id)
  const name = course.map(courses => courses.name)

  //Select course 1
  const course1 = course.filter(function(course) {
    return course.id === 1
  })

  //Get an array of course parts only
  const course1parts = course1.map(courses => courses.parts)

  //Get an array of names of each part
  const course1partsnames = course1parts.map(part => part.name)

 //Log returns undefined
 console.log(course1partsnames)



  return <Course course={course}  id={id} name={name}/>
}

ReactDOM.render(<App />, document.getElementById('root'))