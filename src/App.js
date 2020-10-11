import React from 'react';
import 'App.css';
import Dashboard from 'Components/Dashboard';
import Axios from 'axios';

Axios.defaults.baseURL =
	process.env.BACKENDURL ||
	'http://my-json-server.typicode.com/shripad-agashe/fake-api';

function App() {
	return <Dashboard />;
}

export default App;
