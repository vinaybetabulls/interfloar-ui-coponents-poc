import React from "react";
import { Styles } from "./Header.styles";
type Props = {
  megaNav: {
    menuItems: [
      {
        link: {
          label: string;
          url?: string;
          noFollow?: boolean;
          newWindow?: boolean;
          highlight?: boolean;
        };
        linkGroups: [
          {
            titleLink: {
              label: string;
              url?: string;
              noFollow?: boolean;
              newWindow?: boolean;
              highlight?: boolean;
            };
            links: {
              label: string;
              url?: string;
              noFollow?: boolean;
              newWindow?: boolean;
              highlight?: boolean;
            };
          }
        ];
      }
    ];
  };
};
function HeaderComponent({megaNav}: any) {
  const { menuItems } = megaNav;
  const styles = Styles();
  return (
    <div>
      <header>
        <div className={styles.toolbar}>
          <h1>
            <img src="http://www.ifloraimg.co.uk/kernel/imageload?table=content_images;key1=fd_img_2396018_1;t=20170531031446;v=20171130094586;" />
          </h1>
          <nav>
            <ul>
              {menuItems &&
                menuItems.map((menu: any, index: number) => {
                  return (
                    <li key={index}>
                      <a href="">{menu.link.label}</a>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default HeaderComponent;
