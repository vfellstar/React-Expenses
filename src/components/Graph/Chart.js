import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {

	// create an array of 12 values
	const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);

	// Total maximum - takes in array
	const totalMaximum = Math.max(...dataPointsValues);

	return (
		<div className="chart">
			{
				props.dataPoints.map((dataPoint) => (
					<ChartBar 
					key={Math.random()}
					value={dataPoint.value} 
					maxValue={totalMaximum} 
					label={dataPoint.label} 
					/>)
				)
			}
		</div>
	);
};

export default Chart;