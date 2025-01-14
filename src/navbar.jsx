import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function NavigationBar() {
    return (
        <>
            <nav>
                <h1 id="name">
                    "Your Name!"
                </h1>
                <div>
                    <ul id="navbar">
                        <li><a href="#/Home">Home</a> </li>
                        <li><a href="#/Works">Works</a></li>
                        <li><a href="#/Fun">Fun</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;
