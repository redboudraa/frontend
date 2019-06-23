import React, {Component} from 'react';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import axios from 'axios';

export default class Admin extends Component {
constructor(props)
  {
    super(props);
    this.state = {
  data : {
    labels: [ "janvier", "février", "mars", "avril",
"mai", "juin", "juillet", "août", "septembre", "octobre", "novembre"],
    datasets: [{
     label: "visiteurs par mois",
     backgroundColor: ["rgba(255, 0, 255, 0.75)","rgba(4, 206, 210, 0.89)","rgba(0, 0, 0, 0.75)","rgba(255, 0, 0, 0.75)","rgba(75, 0, 255, 0.75)","rgba(75, 20, 123, 0.67)","rgba(20, 123, 89, 0.67)","rgba(14, 81, 129, 0.67)","rgba(102, 14, 129, 0.67)","rgba(129, 14, 30, 0.67)","rgba(136, 14, 180, 0.75)","rgba(175, 180, 14, 0.75)"],
     data: [4, 5, 15 ,20 ,30 , 16, 4, 5, 15 ,20 ,30 ,16]
   }
    ]
  }

,data1 : 

{
    labels: [ "1", "5", "10", "15",
"20", "25", "30"],
    datasets: [{
     label: "le mois dernier",
     backgroundColor: ["rgba(102, 14, 129, 0.67)"],
     data: [4, 5, 15 ,20 ,30 , 16, 4, 5]
   },{
     label: "ce mois",
     backgroundColor: ["rgba(14, 81, 129, 0.67)","rgba(102, 14, 129, 0.67)"],
     data: [4, 45, 15 ,230 ,0 , 0, 0, 0]
   }
    ]
  }


  ,data2 : {
    labels: [ "med1", "med2", "med3"],
    datasets: [{
     label: "Top 3 med",
     backgroundColor: ["rgba(75, 20, 123, 0.67)","rgba(20, 123, 89, 0.67)","rgba(14, 81, 129, 0.67)"],
     data: [20 ,30 , 16]
   }
    ]
  },

  data3 : {
  labels: ['0 h', '3 h', '6 h', '9 h', '13 h', '17 h', '20 h','24 h'],
  datasets: [
   
    {
      label: 'Visiteur par heure',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [60, 48, 40, 19, 96, 50, 100, 50]
    }
  ]
}


 

}

   


  }








   



  render() {return (

<div style={{ position: "relative", width: 600, hight: 550}}>

    <Bar
    options={{
     responsive: true
    }}
      data={this.state.data}
    />


   


    <Line
    options={{
     responsive: true
    }}
      data={this.state.data1}
    />

    

      <Radar options={{
     responsive: true
    }}
     data={this.state.data3} />
   
    
      <Pie
    options={{
     responsive: true
    }}
      data={this.state.data2}
    />
 </div>

  

  	)}

}