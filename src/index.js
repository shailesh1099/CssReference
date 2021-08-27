import ReactDOM from 'react-dom';
import './Main.css';


const App = () => {
    return (
        <div className="main_div">
            <ul>
                <li>one</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
                <li>Six</li>
                <li>Seven</li>
                <li>Eight</li>
                <li>Nine</li>
                <li>Ten</li>
            </ul>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
