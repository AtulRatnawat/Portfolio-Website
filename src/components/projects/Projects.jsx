import { useState } from "react"
import "./projects.scss"
import {StarBorder,GitHub} from "@material-ui/icons"

export default function Projects() {

  const [currSlide,setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      topic: "PIZZA STORE",
      image: "assets/pizza.png",
      title: "Key Skills: ",
      skills: "Java, MySQL, Java Database Connectivity(JDBC)",
      desc: "A Platform for a pizza store wherein you can place an order, view previous purchase records and update the records in the database. Used Java for front-end, MySQL for Back-end and JDBC to connect MySQL and JAVA",
      link: "https://github.com/AtulRatnawat/PizzaStore"
    },
    {
      id: "2",
      image: "assets/f2.jpg",
      title: "*****",
      skills: "",
      desc: 
        "Hello 2",
      link: ""
    }
    // {
    //   id: "3",
    //   image: "assets/f3.jpeg",
    //   title: "*****",
    //   desc: 
    //     "Hello 3",
    //   link:  ""
    // },
    // {
    //   id: "4",
    //   image: "",
    //   title: "",
    //   desc: " ",
    //   link: ""
    // }
  ]

  const handleClick = (way)=>{
    way === "left" 
      ? setCurrentSlide(currSlide>0 ? currSlide-1:2)
      : setCurrentSlide(currSlide<data.length-1 ? currSlide + 1 : 0);
  }
  return (
    <div className="projects" id="projects">
      <div className="slider" style={{ transform: `translateX(-${currSlide * 100}vw)` }}>
        {data.map((d)=>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <StarBorder/>
                    <span>{d.topic}</span>
                  </div>
                  <h2>{d.title}</h2>
                  <h4>{d.skills}</h4>
                  <p>
                    {d.desc}
                  </p>
                  <div className="bottom">
                    <div className="logo"><GitHub color="blue"/></div>
                    <div className="link"><a href={d.link}>Link to GitHub Repository.</a></div>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={d.image} alt=""></img>
              </div>
            </div>
          
          </div>
          ))
        }
      </div>

      <img src="assets/leftarrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}></img>
      <img src="assets/leftarrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}></img>
    </div>
  )
}
