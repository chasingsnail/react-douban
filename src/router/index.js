import Cinema from '../pages/Cinema';
import Chart from '../pages/Chart';
import Tag from '../pages/Tag';

const Routers = [
    {
		path: '/',
		exact: true,
		component: Cinema
	},
	{
		path: '/cinema',
		exact: false,
		component: Cinema
	},
	{
		path: '/chart',
		exact: false,
		component: Chart
	},
	{
		path: '/tag',
		exact: false,
		component: Tag
	}
]

export default Routers;