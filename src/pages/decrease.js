export function Decrease({counter, setCounter}) {
	function buttonClick() {
		console.log("Decreasing the counter.");
		setCounter(counter - 1);
		console.log("counter = " + counter);
	}

	return (
		<div>
			<button onClick={buttonClick}>Let's head down!</button>
			<label>{counter}</label>
		</div>
	);
}