import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App(){

    return(

        <div className="App">

            <h1>Blogger App</h1>

            <BookDetails/>

            <hr/>

            <BlogDetails/>

            <hr/>

            <CourseDetails/>

        </div>

    );

}

export default App;