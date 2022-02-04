import {useHistory} from "react-router-dom";

export default () => {

    const history = useHistory();

    const navigate = (route) => {
        window.location.replace(route)
    }

    return <>
        <header>
            <nav>
                <div className="nav-ul">
                    <div className="ul-1">
                        <ul>
                            <li><a className="nav-ul-li-a" onClick={() => navigate('/')}>Home</a></li>
                            <li><a className="nav-ul-li-a" href="">About us</a></li>
                            <li><a className="nav-ul-li-a" href="">Roadmap</a></li>
                            <li><a className="nav-ul-li-a" href="">Team</a></li>
                            <li><a className="nav-ul-li-a" href="">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="ul-2">
                        <ul>
                            <li><a className="nav-ul-li-a" onClick={() => navigate('/minting')}>Mint</a></li>
                            <li><a className="nav-ul-li-a" onClick={() => navigate('/liana')}>$Liana</a></li>
                            <li><a className="nav-ul-li-a" href="">Game</a></li>
                            <li><a className="nav-ul-li-a" href="">Breed</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="hamburger-icon">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </header>

        <div className="green-line"></div>
        <div className="green-line-2"></div>
    </>
}