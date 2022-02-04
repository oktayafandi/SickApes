import Team1 from '../assets/images/team-1.svg'
import Team2 from '../assets/images/team-2.svg'
import Team3 from '../assets/images/team-3.svg'
import Team4 from '../assets/images/team-4.svg'

export default () => {

    return <>

        <section className="team">
            <div className="container">
                <div className="row">
                    <h1 className="ourteam">OUR TEAM</h1>
                    <p className="team-p">
                        Our mad CyberKongz scientists always strive for utility:
                    </p>

                    <div className="col-lg-6 col-md-6 col-xl-3">
                        <div className="card-team card-top">
                            <img className="img-team" src={Team1} alt=""/>
                            <h3 className="team-name">Eli.</h3>
                            <p className="team-card-p">
                                He's responsible for <br/>
                                tokenomics and organisation <br/>
                                of Sick Ape Society project. <br/>
                                If you have any questions <br/>
                                about our plans, vision or <br/>
                                project you can reach him!
                            </p>
                            <a className="team-twit" href="#">twitter.com/EliGoat_Eth</a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-xl-3">
                        <div className="card-team card-bottom">
                            <img className="img-team" src={Team2} alt=""/>
                            <h3 className="team-name">EternalSS.</h3>
                            <p className="team-card-p">
                                Web3 and Game development <br/>
                                are his strengths. <br/>
                                He's a crypto anarchyst and <br/>
                                pixel art hunter.
                            </p>
                            <a className="team-twit" href="#">twitter.com/Eternalss_Eth</a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-xl-3">
                        <div className="card-team card-top">
                            <img className="img-team" src={Team3} alt=""/>
                            <h3 className="team-name">SpreadLuv.</h3>
                            <p className="team-card-p">
                                He knows how to build up a <br/>
                                strong community without <br/>
                                paying millions for useless <br/> and annoying promotion. <br/> In love with DAO.
                                He'll work <br/> on our web3 social network.
                            </p>
                            <a className="team-twit" href="#">twitter.com/Spreadluv_Eth</a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-xl-3">
                        <div className="card-team card-bottom">
                            <img className="img-team" src={Team4} alt=""/>
                            <h3 className="team-name">Team Assistant</h3>
                            <p className="team-card-p">
                                He's always here and helps <br/> doing different things. <br/> Working
                                24/7 <br/> Sometimes we think
                                that <br/> he's a robot.
                            </p>
                            <a className="team-twit" href="#"> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="green-bold-line"></div>
    </>
}