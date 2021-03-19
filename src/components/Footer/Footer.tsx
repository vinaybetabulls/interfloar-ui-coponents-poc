import React from "react";
import { Styles } from "./Footer.styles";

type Props = {
  title: string;
  body: string;
  legal: string;
};
function Footer({footer}: any) {
  const styles = Styles();

  return (
    <div>
      <footer className={styles.footer}>
        <div dangerouslySetInnerHTML={{ __html: footer.legal }}></div>
      </footer>
    </div>
  );
}

export default Footer;
