import ReactDOM from 'react-dom';
import './Main.css';


const App = () => {
    return (
        <div className="parent_div">
            <div className="child_div">

            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
