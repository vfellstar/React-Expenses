import './Card.css';

// This is just a wrapper to make the code cleaner.
function Card(props) {
	const classes = 'card ' + props.className; 
	return <div className={classes}>{props.children}</div>;
}

export default Card;