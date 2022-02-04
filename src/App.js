import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from './Components/RowPost/RowPost';
import {action, originals, comedy, horror, romance, documentary} from './urls'
function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<RowPost url={originals} title='Netflix Originals'/>
			<RowPost url={action} title='Action Movies' isSmall />
			<RowPost url={comedy} title='Comedy Movies' isSmall />
			<RowPost url={horror} title='Horror Movies' isSmall />
			<RowPost url={romance} title='Romance Movies' isSmall />
			<RowPost url={documentary} title='Documentary Movies' isSmall />
		</div>
	);
}

export default App;
