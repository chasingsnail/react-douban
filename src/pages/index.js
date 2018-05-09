import React from "react";
import http from '../service/http';

class Index extends React.Component {

	async componentWillMount() {
		const data = await http('/book/1220562');
		console.log(data);
	}
	
  render() {
    return <h1>douban demo</h1>;
  }
}

export default Index;
