import '../styles/style.scss';
import welcomeIcon1 from '../assets/images/welcome-icon-1.svg'
import welcomeIcon2 from '../assets/images/welcome-icon-2.svg'
import welcomeIcon3 from '../assets/images/welcome-icon-3.svg'
import welcomeIcon4 from '../assets/images/welcome-icon-4.svg'
import footerLogo from '../assets/images/Logo-Footer.svg'

export default () => {

    return <>
        <div class="green-bold-line"></div>

        <footer class="footer">
            <div class="container ft-cont">
                <div class="footer-logo-div">
                    <img class="logo-footer" src={footerLogo} alt="" />
                </div>

                <div class="footer-menu">
                    <ul class="footer-menu-ul">
                        <li class="footer-menu-ul-li"><a class="footer-menu-ul-li-a" href="">About us</a></li>
                        <li class="footer-menu-ul-li"><a class="footer-menu-ul-li-a" href="">Terms</a></li>
                        <li class="footer-menu-ul-li"><a class="footer-menu-ul-li-a" href="">Banana</a></li>
                        <li class="footer-menu-ul-li"><a class="footer-menu-ul-li-a" href="">FAQ</a></li>
                        <li class="footer-menu-ul-li"><a class="footer-menu-ul-li-a" href="">Vote</a></li>
                    </ul>
                </div>

                <div class="footer-social-icons">
                    <a href="#"><img class="footer-social-icons-img" src={welcomeIcon1} alt="" /></a>
                    <a href="#"><img class="footer-social-icons-img" src={welcomeIcon2} alt="" /></a>
                    <a href="#"><img class="footer-social-icons-img" src={welcomeIcon3} alt="" /></a>
                    <a href="#"><img class="footer-social-icons-img" src={welcomeIcon4} alt="" /></a>
                </div>
            </div>
        </footer>
        <div class="green-line-footer"></div>
        <div class="green-line-footer-2"></div>
        <div class="space"></div>
    </>
}