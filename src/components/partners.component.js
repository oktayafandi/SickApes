import partnerLogo from '../assets/images/logo-partner.svg';

export default () => {

    return <>
        <section className="partners">
            <div className="container">
                <div className="row">
                    <h1 className="our-partners">OUR PARTNERS</h1>
                    <div className="col-lg-4 col-md-4">
                        <img className="partner-logo" src={partnerLogo} alt=""/>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <img className="partner-logo" src={partnerLogo} alt=""/>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <img className="partner-logo" src={partnerLogo} alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <div className="green-bold-line"></div>
    </>
}