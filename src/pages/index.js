import React from "react";
import http from '../service/http';
import {
  BrowserRouter as Router,
  Route,
	Switch
} from 'react-router-dom'
import Nav from '../components/Nav'
import Routers from '../router'

import '../assets/css/base.scss'


class Index extends React.Component {
	constructor(props) {
		super(props);
	}
	async componentWillMount() {
		const data = await http('/book/1220562');
		console.log(data);
	}

  render() {
    return (
			<Router>
				<div>
					<Nav/>
						<Switch>
							{
								Routers.map((route, index) => (
									<Route
										key={index} 
										exact={route.exact} 
										path={route.path} 
										component={route.component}/>
								))
							}
						</Switch>
				</div>
			</Router>
		)
  }
}

export default Index;
