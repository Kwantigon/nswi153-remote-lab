import { Button } from '@mui/material';

export function Decrease({counter, setCounter}) {
	function buttonClick() {
		console.log("Decreasing the counter.");
		setCounter(counter - 1);
		console.log("counter = " + counter);
	}

	return (
		<div>
			<Button onClick={buttonClick}
					variant="outlined"
					color="success"
					disableElevation>
				Let's head down!
			</Button>
			<label>{counter}</label>
		</div>
	);
}