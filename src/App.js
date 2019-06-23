import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, withRouter, Redirect  } from "react-router-dom";

import Admin from "./compenents/admin.compenents";
import Med from "./compenents/med.compenents";

export default class App extends Component {


  constructor(props)
  {
    super(props);


    this.handleInput = this.handleInput.bind(this)
this.state = {
      what: '',
      redirect: false
    }

  }



//     this.state = {
//   data : {
//     labels: [ "janvier", "février", "mars", "avril",
// "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre"],
//     datasets: [{
//      label: "visiteurs par mois",
//      backgroundColor: ["rgba(255, 0, 255, 0.75)","rgba(4, 206, 210, 0.89)","rgba(0, 0, 0, 0.75)","rgba(255, 0, 0, 0.75)","rgba(75, 0, 255, 0.75)","rgba(75, 20, 123, 0.67)","rgba(20, 123, 89, 0.67)","rgba(14, 81, 129, 0.67)","rgba(102, 14, 129, 0.67)","rgba(129, 14, 30, 0.67)","rgba(136, 14, 180, 0.75)","rgba(175, 180, 14, 0.75)"],
//      data: [4, 5, 15 ,20 ,30 , 16, 4, 5, 15 ,20 ,30 ,16]
//    }
//     ]
//   }

// ,data1 : 

// {
//     labels: [ "1", "5", "10", "15",
// "20", "25", "30"],
//     datasets: [{
//      label: "le mois dernier",
//      backgroundColor: ["rgba(102, 14, 129, 0.67)"],
//      data: [4, 5, 15 ,20 ,30 , 16, 4, 5]
//    },{
//      label: "ce mois",
//      backgroundColor: ["rgba(14, 81, 129, 0.67)","rgba(102, 14, 129, 0.67)"],
//      data: [4, 45, 15 ,230 ,30 , 116, 4, 5]
//    }
//     ]
//   },
//   data2 : {
//     labels: [ "med1", "med2", "med3"],
//     datasets: [{
//      label: "Top 3 med",
//      backgroundColor: ["rgba(75, 20, 123, 0.67)","rgba(20, 123, 89, 0.67)","rgba(14, 81, 129, 0.67)"],
//      data: [20 ,30 , 16]
//    }
//     ]
//   }


//       }

    
  handleInput(event) {
    const target = event.target
    this.setState({
      what: event.target.value
      
    })
  }  

//   submitHandler(event) {
//     event.preventDefault()
//     // do some sort of verification here if you need to
//   // const history = createHashHistory()
// this.props.history.push('/page');
//   }


    navigate = () => {
      if (this.state.what !== '')
       { this.setState({
      redirect: true
    })
   }
    }




    renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={"/med/"+this.state.what} />
    }
  }
  render() {return (
    // <div style={{ position: "relative", width: 600, hight: 550}}>
    // <h3>Chart Sample</h3>
    // <Line
    // options={{
    //  responsive: true
    // }}
    //   data={this.state.data1}
    // />

    // <Bar
    // options={{
    //  responsive: true
    // }}
    //   data={this.state.data}
    // />
    // <h4 >Top 3 med</h4>
    //   <Pie
    // options={{
    //  responsive: true
    // }}
    //   data={this.state.data2}
    // />
    // </div>


  <Router>

 <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Dashborad</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/admin" className="nav-link">Admin </Link>
                </li>
                <li className="navbar-item">
{this.renderRedirect()}
              <form onSubmit={this.navigate.bind(this)}>
        <input
        
          type='text'
          name='what'
          value={this.state.what}
          onChange={this.handleInput} />
      
        <button>médecin</button>
      </form>
                </li>




              </ul>
            </div>
          </nav>
    <div className="container container-table">
     

       <Route path="/admin" component={Admin} />
       <Route path="/med/:id" component={Med} />


    </div>












</div>

 </Router>







    
  );
}
}


