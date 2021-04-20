import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
    ]
    const ourAddress = [
        {name: "Dhaka, bangladesh" , link: "/#"},
        {name: "Mirpur" , link: "/#"},
       
    ]
    const oralHealth = [
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"}
    ]
    const services = [
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"},
        {name: "item" , link: "/#"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href=""><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href=""><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href=""><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5 text-secondary">
                            <h6>Call now</h6>
                            <button className="btn btn-primary text-secondary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-secondary">
                    <p>Copyright {(new Date()).getFullYear()} Power by Omar Faruq</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;