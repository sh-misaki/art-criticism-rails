import React, { FunctionComponent } from 'react'
import classNames from "classnames";

import styles from "./styles.css";

interface IOwnProps {
  className?: string;
}

type IProps = IOwnProps;

const SidePane: FunctionComponent<IProps> = ({
  className,
}) => {
  const linkItems = [{
    href: "/works",
    text: "Works",
  }, {
    href: "/artists",
    text: "Artists",
  }, {
    href: "/information",
    text: "News",
  }]

  return (
    <div className={classNames(styles.Header, className)}>
      <div>
        Logo
      </div>
      <div>
        {
          linkItems.map(linkItem => (
            <a
              href={linkItem.href}
              className={styles.HeaderLinkItem}
            >
              { linkItem.text }
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default SidePane;
