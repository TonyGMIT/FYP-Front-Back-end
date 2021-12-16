import React, { Component } from 'react';
// https://plotly.com/javascript/react/#introduction
import Plot from 'react-plotly.js';

class ActivityChart extends Component {
	render(){
		return (
			<div className="chartBox">
			<Plot 
				data={[
					{
						x: ['Pycharm','Chrome-YouTube','Spotify','Discord','Chrome-Moodle', 'Chrome-Outlook', 'Steam'],
						y: [3,4,1,1,2,1,3],
					}
				]}
				layout={ { width: 635, height: 510, title: 'Mouse Tracker Activity Graph'}}
			/>
			</div>
		)
	}

}

export default ActivityChart;