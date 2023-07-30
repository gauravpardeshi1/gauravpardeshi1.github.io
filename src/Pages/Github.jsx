import React from "react";
import Githubcalendar from "react-github-calendar";
import { ThemeContext } from "../Context/theme";
import '../Styles/Github.css'
export const Github = () => {
  const colourTheme = {
    background: "transparent",

    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div  id='github' className={"section " + themename} data-aos="fade-right">
      <h2  className="section__title" data-aos="fade-right">
          Github <span  className="different">Calender</span>
        </h2>
        <div className="react-activity-calendar"> 
        <Githubcalendar
          username="gauravpardeshi1"
          blockSize={15}
          blockMargin={5}
          theme={themename}
          fontSize={16}
        />
        </div>
      <div className="g-card">
        <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=gauravpardeshi1&theme=react&hide_border=true&include_all_commits=true&count_private=true" alt="" />
        <img  id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=gauravpardeshi1&theme=react&hide_border=true&include_all_commits=true&count_private=true&layout=compact" alt="" />
        <img  id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=gauravpardeshi1&hide_border=true&theme=react&hide_border=true&bg_color=0D1117" alt="" />
      </div>
     
      </div>
     
      
      
    </>
  );
};
