import "./skills.scss"
import {VerifiedOutlined} from "@material-ui/icons"
export default function Skills() {
  return (
    
    <div className="skills" id="skills">
      <div className="heading">
        <h1>Skills</h1>
      </div> 

      <div className="skills__container">

        <div className="skills__content">
            <h3 className="skills__title">Languages</h3>

            <div className="skills__box">

              <div className="skills__group">

                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">CPP</h3>
                    <span className="skills_level">Intermediate</span>
                  </div>
                </div>

                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">C</h3>
                    <span className="skills_level">Intermediate</span>
                  </div>
                </div>

                
              </div>

              <div className="skills__group">
                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">JAVA</h3>
                    <span className="skills_level">Intermediate</span>
                  </div>
                </div>

                {/* <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">Assembly Language</h3>
                    <span className="skills_level">Intermediate</span>
                  </div>
                </div> */}
      
              </div>

            </div>
          </div>

          <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">

              <div className="skills__group">

                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">HTML</h3>
                    <span className="skills_level">Basic</span>
                  </div>
                </div>

                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">CSS</h3>
                    <span className="skills_level">Basic</span>
                  </div>
                </div>

                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">Javascript</h3>
                    <span className="skills_level">Basic</span>
                  </div>
                </div>
              </div>

              <div className="skills__group">
                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">Bootstrap</h3>
                    <span className="skills_level">Intermediate</span>
                  </div>
                </div>
                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">Git</h3>
                    <span className="skills_level">Intermediate</span>
                  </div>
                </div>
                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">React</h3>
                    <span className="skills_level">Intermediate</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">

              <div className="skills__group">

                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">MySQL</h3>
                    <span className="skills_level">Intermediate</span>
                  </div>
                </div>

                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">PHP</h3>
                    <span className="skills_level">Basic</span>
                  </div>
                </div>

                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">NodeJS</h3>
                    <span className="skills_level">Basic</span>
                  </div>
                </div>
              </div>

              <div className="skills__group">
                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">MySQL</h3>
                    <span className="skills_level">Intermediate</span>
                  </div>
                </div>
                <div className="skills__data">
                  <img src="assets/badge.png" alt=""></img>

                  <div>
                    <h3 className="skills_name">Firebase</h3>
                    <span className="skills_level">Intermediate</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

      </div>
    </div>
  )
}
