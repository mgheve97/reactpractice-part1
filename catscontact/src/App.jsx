import { useState } from 'react'
import './App.css'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="contacts">
      <Contact 
        img = "images/mr-whiskerson.png"
        name = "Mr. Whiskerson"
        cpnum = "(212) 555-1234"
        email = "mr.whiskaz@catnap.meow"
      />
      <Contact 
        img = "images/fluffykins.png"
        name = "Fluffykins"
        cpnum = "(212) 555-2345"
        email = "fluff@me.com"
      />
      <Contact 
        img = "images/felix.png"
        name = "Felix"
        cpnum = "(212) 555-4567"
        email = "thecat@hotmail.com"      
      />
      <Contact 
        img = "images/pumpkin.png"
        name = "Pumpkin"
        cpnum = "(212) 555-4567"
        email = "pumpkin@scrimba.com"      
      />
    </div>
  )
}

export default App

{/* 
  <div className="contact-card">
          <img src="images/mr-whiskerson.png"/>
          <h3>Mr. Whiskerson</h3>
          <div className="info-group">
              <img src="images/phone-icon.png" />
              <p>(212) 555-1234</p>
          </div>
          <div className="info-group">
              <img src="images/mail-icon.png" />
              <p>mr.whiskaz@catnap.meow</p>
          </div>
      </div>
    <div className="contact-card">
          <img src="images/fluffykins.png"/>
          <h3>Fluffykins</h3>
          <div className="info-group">
              <img src="images/phone-icon.png" />
              <p>(212) 555-2345</p>
          </div>
          <div className="info-group">
              <img src="images/mail-icon.png" />
              <p>fluff@me.com</p>
          </div>
      </div>
      
      <div className="contact-card">
          <img src="images/felix.png"/>
          <h3>Felix</h3>
          <div className="info-group">
              <img src="images/phone-icon.png" />
              <p>(212) 555-4567</p>
          </div>
          <div className="info-group">
              <img src="images/mail-icon.png" />
              <p>thecat@hotmail.com</p>
          </div>
      </div>
      
      <div className="contact-card">
          <img src="images/pumpkin.png"/>
          <h3>Pumpkin</h3>
          <div className="info-group">
              <img src="images/phone-icon.png" />
              <p>(0800) CAT KING</p>
          </div>
          <div className="info-group">
              <img src="images/mail-icon.png" />
              <p>pumpkin@scrimba.com</p>
          </div>
      </div>
    </div> */}
