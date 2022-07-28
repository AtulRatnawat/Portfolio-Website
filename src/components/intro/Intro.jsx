import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">   
      <div className="left">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Atul Kumar Ratnawat</h1>
          
          <a download="Atul Kumar Ratnawat CV" href="assets/cv.pdf" class="button button--ghost">
            Download CV
          </a>
          
        </div>
        <a href="#portfolio">
          <img src="" alt=""></img> 
        </a>
      </div>

      <div className="middle">
        <div className="imageContainer1"></div>
        <div className="imageContainer2"></div>
        <div className="imageContainer3"></div>
        <div className="imageContainer4"></div>
      </div>

      <div className="right">
        <h3>Currently studying at:</h3>
        <h1>The LNM Institute of Information Technology, Jaipur</h1> 
        <h3>B.Tech Communication & Computer Engineering (CCE) </h3>
        <h3>Expected Graduation: 2024</h3>
      </div>
    </div>
  )
}
