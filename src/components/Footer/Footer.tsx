import React from 'react';
import {Styles} from './Footer.styles';
import {footerData} from '../common/Footer.common';

function Footer() {
    const styles = Styles();
    
    return (
        <div>
            <footer className={styles.footer}>
                <div dangerouslySetInnerHTML={{ __html: footerData[0].data.legal }}></div>
            </footer>
        </div>
    )
}

 
export default Footer;