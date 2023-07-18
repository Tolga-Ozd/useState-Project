import Course from './Course';
import { useState } from 'react';
import "./App.css"

function getRandomCourse() {
  const courseArray = ["Bootstrap" ,"Web" , "Developer" , "React2"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function getRandomColor() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  return colors[Math.floor(Math.random() * colors.length)];
}


  function App() {
    const [courses, setCourses] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState("white"); // Başlangıçta beyaz arka plan
  
    const handleClick = () => {
      setCourses([...courses, getRandomCourse()]);
      setBackgroundColor(getRandomColor()); // Rastgele bir arka plan rengi belirle
    };
  
    const courseList = courses.map((course, index) => {
      return <Course key={index} courseName={course} />;
    });
  
    return (
      <div className="App" style={{ backgroundColor }}>
        <button className='appButton' onClick={handleClick}>Add Course</button>
        <div className='courseList'>{courseList}</div>
      </div>
    );
  }
  

export default App;
