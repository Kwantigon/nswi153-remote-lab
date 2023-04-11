import { Button } from '@mui/material';

export function Increase({counter, setCounter}) {
	function buttonClick() {
		console.log("Increasing the counter.");
		setCounter(counter + 1);
		console.log("counter = " + counter);
	}

	return (
		<div>
			<Button onClick={buttonClick}
					variant="contained"
					color="error">
				Let's go up!
			</Button>
			<label>{counter}</label>
		</div>
	);
}