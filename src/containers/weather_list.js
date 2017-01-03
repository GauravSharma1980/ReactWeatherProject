

import 	React,{Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';

 class WeatherList extends Component
{

	renderWeather(cityData)
	{
		const name = cityData.city.name;
		//each of the row is of cityData.list is passed in this function as weather
		const temps = cityData.list.map(weather => weather.main.temp);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		//console.log(temps);
			return(
					<tr key = {name} >
							<td>{name}</td>
							<td>
							  <Chart data = {temps} color = "orange" />
							</td>
							<td>
							  <Chart data = {pressure} color = "green" />
							</td>
							<td>
							  <Chart data = {humidity} color = "black" />
							</td>
				 </tr>

			);
	}
	render()
	{
		return(
		<table className = "table table-hover" >
			<thead>
				<tr>
					<th>City</th>
					<th>Tempreture</th>
					<th>Pressure</th>
					<th>Humidity</th>
				</tr>
			</thead>
		<tbody>
		{this.props.weather.map(this.renderWeather)}
		</tbody>
		</table>

		);
	}

}

// we are using state.weather because we are using weather:WeatherReducer in our weather reducers
function mapStateToProps(state) {

return { weather : state.weather };

}

//we need to connect our above function to our Component WeatherList

export default connect (mapStateToProps)(WeatherList);
