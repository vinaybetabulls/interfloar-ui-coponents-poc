import React from "react";
import { Styles } from "./Header.styles";

export type LinkProps = {
  label: string;
  url?: string | null;
  icon?: string | null;
  highlight?: boolean | null;
  className?: string;
  noFollow?: boolean | null;
  newWindow?: boolean | null;
  onClick?: () => void;
  // Added to support links that appear as buttons
  button?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  thin?: boolean;
};

export type LinkGroup = {
  titleLink: LinkProps;
  links: LinkProps[];
};

export type LinkItem = {
  link: LinkProps;
  linkGroups: LinkGroup[];
};

export type MenuItems = LinkItem[];
type Props = {
  megaNav: {
    menuItems: MenuItems;
  };
};
function HeaderComponent({ megaNav }: Props) {
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
                menuItems.map((menu: LinkItem, index: number) => {
                  return (
                    <li key={index}>
                      <a href={menu.link.url ? menu.link.url : "#"}>
                        {menu.link.label}
                        {menu.linkGroups.map(
                          (subChild: LinkGroup, subIndex) => {
                            return (
                              <ul className={styles.subChild}>
                                {subChild.links.map(
                                  (child: LinkProps, childIndex: number) => {
                                    return (
                                      <li>
                                        <a href={child.url ? child.url : '#'}>{child.label}</a>
                                      </li>
                                    )
                                  }
                                )}
                              </ul>
                            )
                          }
                        )}
                      </a>
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
