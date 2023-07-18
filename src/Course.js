import Bootstrap from "./images/bootstrap5...png"
import Web from "./images/compleweb.jpg"
import Developer from "./images/developer.jpg"
import React2 from "./images/react2.png"
import "./Course.css"

const courseMap = {Bootstrap , Web , Developer , React2}

function Course({courseName}) {
    console.log(Bootstrap);
    console.log(courseName);
    return (
        <div className="courseDiv">
            <img className="course" src={courseMap[courseName]} alt="course" />
        </div>
    );
}

export default Course;