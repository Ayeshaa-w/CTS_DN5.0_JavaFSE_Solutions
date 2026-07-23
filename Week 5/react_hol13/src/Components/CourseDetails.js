import React from "react";

function CourseDetails(){

    const courses=[
        {id:1,name:"React",available:true},
        {id:2,name:"Angular",available:false},
        {id:3,name:"Spring Boot",available:true}
    ];

    return(

        <div>

            <h2>Course Details</h2>

            <ul>

                {

                    courses.map(course=>{

                        let status;

                        if(course.available){

                            status="Available";

                        }

                        else{

                            status="Not Available";

                        }

                        return(

                            <li key={course.id}>

                                {course.name}

                                {" - "}

                                {status}

                                {

                                    course.available &&

                                    <span style={{color:"blue"}}>

                                        {" "}✔

                                    </span>

                                }

                            </li>

                        );

                    })

                }

            </ul>

        </div>

    );

}

export default CourseDetails;