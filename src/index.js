// IMports ReactDOM - see "package.json"
import ReactDOM from 'react-dom';

// Get "index.css" and "App.js" into this file! =D ommit ".js"
import './index.css';
import App from './App';

// We  render the imported "App" component, and put it in the 'root' element!
// This is similar to when we put "document.getElementById('root').innerHTML" in javascript!
ReactDOM.render(<App/>, document.getElementById('root'));
