import React from 'react';
import Greeter from './components/Greeter';
import './css/App.css';

export default function App()
{

    const [username, setUsername] = React.useState('');
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() =>
    {
        setTimeout(() =>
        {
            setLoaded(true);
        }, 3000);
    }, [loaded]);

    if (!loaded)
    {
        return (
            <div className="center">
                <h2>Webside loading...</h2>
                <button onClick={() => { setLoaded(true) }}>Finish loading</button>
            </div>
        );
    }

    return (
        <div className="center">
            <div className="card">
                <h1 className="title">Hello! I am an h1</h1>
                < Greeter name="Naharie" phrase="Hi" />
                < Greeter name="WingSpan" phrase="Good morning" />
                < Greeter name="RoseWyrm" phrase="Well met" />
                <br/>
                <br/>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <p>You are logged in as: {username}</p>
            </div>
        </div>
    );
};