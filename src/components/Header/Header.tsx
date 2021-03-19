import React from 'react';
import { Styles } from './Header.styles';
import { MenuItems } from '../common/Header.menuItems';

function HeaderComponent() {
    const styles = Styles();
    return (
        <div>
            <header>
                <div className={styles.toolbar}>
                    <h1><img src="http://www.ifloraimg.co.uk/kernel/imageload?table=content_images;key1=fd_img_2396018_1;t=20170531031446;v=20171130094586;" /></h1>
                    <nav>
                        <ul>
                            {
                                MenuItems.map((menu, index) => {
                                    return <li key={index}>
                                                <a href="">{menu.name}</a>
                                            </li>
                                })
                            }

                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default HeaderComponent
