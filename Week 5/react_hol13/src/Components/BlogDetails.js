import React from "react";

function BlogDetails() {

    const blogs = [
        { id:1,title:"React Hooks",featured:true },
        { id:2,title:"NodeJS",featured:false },
        { id:3,title:"Spring Boot",featured:true }
    ];

    return(

        <div>

            <h2>Blog Details</h2>

            <ul>

                {
                    blogs.map(blog=>(

                        <li key={blog.id}>

                            {blog.title}

                            {

                                blog.featured ?

                                <span style={{color:"green"}}>
                                    ⭐ Featured
                                </span>

                                :

                                <span style={{color:"gray"}}>
                                    {" "}Normal
                                </span>

                            }

                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default BlogDetails;