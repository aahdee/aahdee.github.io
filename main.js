'use strict';

const e = React.createElement;

class MyButton extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = { trigger: false };
	}

	render()
	{
		if (this.state.trigger)
		{
			<div>
		}
		return e(
			'button',
			{ onClick: () => this.setState({trigger: !trigger})},
			'ye'
		);
	}
}
const domContainer = document.querySelector('#test');
ReactDOM.render(e(MyButton),domContainer);