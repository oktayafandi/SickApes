import welcomeLogo from '../assets/images/Logo-Welcome.svg'
import team2 from '../assets/images/team-2.svg'
import iconNext from '../assets/images/mint-next.svg'
import iconPrev from '../assets/images/mint-prev.svg'

export default () => {

    return <>
        <section className="mint-slider">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img className="mint-logo" src={welcomeLogo} alt=""/>
                    </div>

                    <div className="col-lg-12">
                        <img className="img-team" src={team2} alt=""/>
                    </div>

                    <div className="col-lg-12 prev-next">
                        <a className="prev-next-a"><img className="prev-next-btn" src={iconPrev} alt=""/></a>
                        <p className="mint-p">1 LazyBone / 0.06eth + gas</p>
                        <a className="prev-next-a"><img className="prev-next-btn" src={iconNext} alt=""/></a>
                    </div>

                    <div className="col-lg-12">
                        <a href="#">
                            <button className="mint-now">MINT NOW</button>
                        </a>
                        <a className="mint-now-p-a">
                            <p className="mint-now-p">VIEW ON OPENSEA</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
}