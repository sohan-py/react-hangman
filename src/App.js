import Mistakes from './components/Mistakes';
import Hangman from './components/Hangman';
import Guess from './components/Guess';
import './App.css';

function App() {
	return (
		<div className="container">
			<h1 className="text-center mt-4">React Hangman</h1>
			<div className="row mt-4">
				<Hangman />
				<Mistakes />
			</div>
			<div className="text-center">
				<Guess />
				{'abcdefghijklmnopqrstuvwxyz'.split('').map((letter, i) =>
					<button key={i} className="btn btn-brown btn-lg mt-4 mr-4">{letter}</button>
				)}
				<br />
				<button className="btn btn-success btn-lg mt-4">Restart</button>
			</div>
		</div>
	);
}

export default App;
