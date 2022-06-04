import React from "react";
import { useState } from "react";

function Projects({ myprojects }) {
  console.log(myprojects)
 // const [zINdex, setzIndex] = useState(true);
  return (
    <div className="resumeSection">
      <div className="subHeading">Projects</div>
      {myprojects?.map((x, i) => (
        
        <div key={i}  className="dataArea pb-20" >
          <script>console.log(x)</script>
          <div className="subSubHeading">{x.title}</div>
          <div className="flex-row">
            <div className="year">{x.time1}</div>
            
          </div>

          <em className="summaryPart">{x.summary}</em>

  
        </div>
      ))}
    </div>
  );
}

export default Projects;
