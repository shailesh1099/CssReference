import ReactDOM from 'react-dom';
import './Main.css';


const App = () => {
    return (
        <div className="main_div">
            <h1>ReactJs Awesome!!</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
