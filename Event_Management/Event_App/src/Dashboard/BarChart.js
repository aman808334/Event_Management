import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Event1', 'Event2', 'Event3',
           'Event4', 'Event5'],
  datasets: [
    {
      label: 'Events',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class Bar1 extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'No of Persons Enrolled in Event',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}