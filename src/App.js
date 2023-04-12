import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Hello } from "./pages/hello.js";
import { LabelTextButton } from "./pages/label.js";
import { Decrease } from "./pages/decrease.js";
import { Increase } from "./pages/increase.js";
import { Grid } from "@mui/material";

function App() {
	const [counter, setCounter] = useState(0);
	return (
		<Grid container spacing={2}>
			<BrowserRouter>
				<Grid item xs={12} md={6}>
					<ul>
						<li>
							<Link to="/">Greeting</Link>
						</li>
						<li>
							<Link to="/label">The label</Link>
						</li><li>
							<Link to="/decrease">Decrease the counter</Link>
						</li><li>
							<Link to="/increase">Increase the counter</Link>
						</li>
					</ul>
				</Grid>
				<Grid item xs={12} md={6}>
					<Routes>
						<Route path="/" element={<Hello/>}></Route>
						<Route path="/label" element={<LabelTextButton/>}></Route>
						<Route path="/decrease" element={<Decrease counter={counter} setCounter={setCounter}/>}></Route>
						<Route path="/increase" element={<Increase counter={counter} setCounter={setCounter}/>}></Route>
					</Routes>
				</Grid>
			</BrowserRouter>
		</Grid>
	);
}

export default App;

// The default create-react-app function.
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/