import "./App.css"

const Card1 = (props)=>{
  return(
    <div className="flexItems">
      <p className="type">{props.type}</p>
      <p className="paidVersion">${props.rupee}/month</p>
      <p><span id="option1" className="symbolright">✔  </span> Single User </p>
      <p><span id="option2" className="symbolright">✔  </span>50Gb storage</p>
      <p><span id="option3" className="symbolright">✔  </span>Unlimited Public Projects</p>
      <p><span id="option4" className="symbolright">✔  </span>Community Access</p>
      <p className="symbolwrong"><span id="option5" className="symbolwrong">✖  </span>Unlimited Private Projects</p>
      <p className="symbolwrong"><span id="option6" className="symbolwrong">✖  </span>Dedicated Phone Support</p>
      <p className="symbolwrong"><span id="option7" className="symbolwrong">✖  </span>Free SubDomain</p>
      <p className="symbolwrong"><span id="option8" className="symbolwrong">✖  </span> Monthly Status Reports</p>
      <button className="button1" disabled>BUTTON</button>
    </div>
  )
}

const Card2 = (props)=>{
  return(
    <div className="flexItems">
      <p className="type">{props.type}</p>
      <p className="paidVersion">${props.rupee}/month</p>
      <p><span id="option1" className="symbolright">✔  </span> Single User </p>
      <p><span id="option2" className="symbolright">✔  </span>50Gb storage</p>
      <p><span id="option3" className="symbolright">✔  </span>Unlimited Public Projects</p>
      <p><span id="option4" className="symbolright">✔  </span>Community Access</p>
      <p><span id="option5" className="symbolright">✔  </span>Unlimited Private Projects</p>
      <p><span id="option6" className="symbolright">✔  </span>Dedicated Phone Support</p>
      <p><span id="option7" className="symbolright">✔  </span>Free SubDomain</p>
      <p className="symbolwrong"><span id="option8" className="symbolwrong">✖  </span> Monthly Status Reports</p>
      <button className="button2" disabled>BUTTON</button>
    </div>
  )
}
const Card3 = (props)=>{
  return(
    <div className="flexItems">
      <p className="type">{props.type}</p>
      <p className="paidVersion">${props.rupee}/month</p>
      <p><span id="option1" className="symbolright">✔  </span> Single User </p>
      <p><span id="option2" className="symbolright">✔  </span>50Gb storage</p>
      <p><span id="option3" className="symbolright">✔  </span>Unlimited Public Projects</p>
      <p><span id="option4" className="symbolright">✔  </span>Community Access</p>
      <p><span id="option5" className="symbolright">✔  </span>Unlimited Private Projects</p>
      <p><span id="option6" className="symbolright">✔  </span>Dedicated Phone Support</p>
      <p><span id="option7" className="symbolright">✔  </span>Free SubDomain</p>
      <p><span id="option8" className="symbolright">✔  </span> Monthly Status Reports</p>
      <button className="button3">BUTTON</button>
    </div>
  )
}

const App = ()=>{

  return(
    <div>
      <div className="container">
        <Card1 type="FREE" rupee="0"/>
        <Card2 type="PLUS" rupee="9"/>
        <Card3 type="PRO" rupee="49"/>
      </div>
    </div>
  )
}



export default App ;