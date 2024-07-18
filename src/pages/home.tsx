import React from 'react';
import './home.css'
import { Chart } from "react-google-charts";

// export const data = [
//   ["Language", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];

// export const options = {
//   title: "Programming Languages",
//   is3D: true,
// };

class Home extends React.Component {
  constructor (props) {
    super(props);  
  }
  
  render() {
    return (
      <>
          <div className="homeBody">
              <h1>Hi, I'm Daniel Kim</h1>
              <h4>An aspiring software developer studying at the University of Waterloo.</h4>
              Ever since I started coding in 2020, I have always been fascinated about creating <br/>
              new and innovated new projects to improve my skills as a programmer. I have been working on creating                 <br/> games, computer applications, and professional websites during my time as an engineer. <br/> 
              <br/>
            <a href="/projects">
              View my projects →
            </a>
            {/* <div className="pieChart">
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"70%"}
                height={"200px"}
              />
            </div> */}
          </div>
      </>
    )
  }
}

export default Home;