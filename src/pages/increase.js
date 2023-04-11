export function Increase({counter, setCounter}) {
	function buttonClick() {
		console.log("Increasing the counter.");
		setCounter(counter + 1);
		console.log("counter = " + counter);
	}

	return (
		<div>
			<button onClick={buttonClick}>Let's go up!</button>
			<label>{counter}</label>
		</div>
	);
}