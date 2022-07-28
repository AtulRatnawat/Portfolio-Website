import "./contact.scss"
import {useState} from "react";
import {Mail,GitHub,LinkedIn} from "@material-ui/icons"


export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thankyou! I will respond as soon as possible.')
  }

  return (
    <div className="contact" id="contact">

      <div className="left">
        <div className="container">
          <div className="top">
            {/* <img src="assets/Contact_Avatar.png" alt=""></img> */}
          </div>
          <div className="bottom">
            <div className="card">
              <div className="icon"><Mail/></div>
              <div className="text">
                <div className="up">Mail me at.....</div>
                <div className="down">atulratnawat100@gmail.com</div> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        
        <div className="container">

          <div className="card">

            <div className="top">
              <h2>Contact 🚀</h2>
            </div>

            <div className="center">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name*" required></input>
                <input type="text" placeholder="Email address*" required></input>
                <textarea placeholder="Message"></textarea>
                <div className="but">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
            
            <div className="bottom">
              
              <div className="pack">
                <div className="link1"><a href="https://github.com/AtulRatnawat"><GitHub/></a></div>
                <div className="link2">
                  <a href="https://www.linkedin.com/in/atul-ratnawat-21aa21203/"><LinkedIn/></a>
                </div>
                <div className="link3"><a href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJRzBTwhvBmqXXwfKMNBkLmtmLLmrpjzjWwWDCZGxkhbqmpLtLLNJKHJqVKWntzkGnsb"><Mail/></a></div>
              </div>
              {/* <a href=""><Facebook/></a>
              <a href=""><Instagram/></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 