import React from 'react';
// https://plotly.com/javascript/react/#introduction
import Plot from 'react-plotly.js';

function ActivityChart() {
		return (
			<div className="chartBox">
			<Plot 
				data={[
					{
						x: ['Pycharm','Chrome-YouTube','Spotify','Discord','Chrome-Moodle', 'Chrome-Outlook', 'Steam'],
						y: [3,4,1,1,2,1,3],
						marker: {color: 'red'}
					}
				]}
				layout={ { width: 635, height: 510, title: 'Mouse Tracker Activity Graph'}}
			/>
			</div>
		)
}

export default ActivityChart;