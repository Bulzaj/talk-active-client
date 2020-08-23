import React from "react";

import styles from './Layout.module.css'
import Navbar from "../../components/navbar/Navbar";
import NavItem from "../../components/navbar/nav-item/NavItem";
import NavLink from "../../components/navbar/nav-link/NavLink";

import {faCoffee} from "@fortawesome/free-solid-svg-icons";

const Layout = props => {
  return (
    <div className={styles.Layout}>
      <nav>
        <Navbar>
          <NavItem>
            <NavLink
              icon={faCoffee}
              linkText='Login'
            />
          </NavItem>
          <NavItem>
            <NavLink
              icon={faCoffee}
              linkText='coffee'
            />
          </NavItem>
          <NavItem>
            <NavLink
              icon={faCoffee}
              linkText='coffee'
            />
          </NavItem>
        </Navbar>

      </nav>
      <main>
        <h1>Test text</h1>
        <p>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas arcu neque, fringilla vel nulla vitae, iaculis suscipit nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales vulputate nisi, id accumsan eros consectetur in. Sed at augue in nulla accumsan luctus. Donec condimentum euismod arcu, sit amet tristique velit mollis vitae. Etiam suscipit nisi ac nulla suscipit, id varius enim finibus. Vestibulum nec varius eros. Fusce tristique, lacus sit amet congue vestibulum, est purus pellentesque enim, ut egestas dolor nisi condimentum diam. Suspendisse consectetur, ante egestas vulputate tincidunt, metus tortor ultricies tellus, ac faucibus lorem nisl vel ante. Curabitur aliquet sit amet sapien quis faucibus. Aliquam sollicitudin tincidunt est, a aliquam nunc vestibulum sit amet. Cras cursus lorem nec dui suscipit, id sollicitudin lorem dictum. Aenean scelerisque semper ex, vitae varius dui eleifend quis. Praesent lorem erat, ultricies a iaculis vitae, facilisis nec diam. Aenean vitae eros et tortor ornare pulvinar.

          Vestibulum fermentum ultrices massa, in semper magna luctus quis. Suspendisse porta arcu turpis, ac porttitor velit consequat id. Nulla eget lectus eget odio interdum finibus. Curabitur vestibulum consequat consequat. Maecenas eu leo pharetra, mollis leo in, placerat nibh. Quisque viverra nisi nibh, sed posuere leo convallis at. Aliquam ut massa nisi.

          Sed consectetur lacus nec magna tincidunt pulvinar. Donec lacinia dolor ut sagittis rhoncus. Nam eleifend aliquet leo vel rhoncus. Donec pulvinar hendrerit est, in sollicitudin eros molestie in. Nulla porta, sapien quis sagittis auctor, mi felis luctus turpis, vitae vulputate libero ipsum vitae lacus. Pellentesque in posuere est. Vivamus imperdiet a metus id volutpat. Aenean consequat ex tempor, convallis felis eu, tincidunt velit.

          Aliquam nec sem gravida, condimentum tortor sed, semper metus. Nam quis quam at sem maximus sodales. Cras dictum semper ante sed tincidunt. Phasellus a convallis augue. Vestibulum egestas sed justo eu sodales. Pellentesque dignissim elit sit amet neque dignissim, congue elementum massa tempor. Sed auctor libero non nulla feugiat, posuere rutrum mi finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras pellentesque ipsum eros, id venenatis dui sagittis in. Etiam placerat orci in porta luctus. Sed eu fermentum felis.
        </p>
      </main>
    </div>
  )
}

export default Layout;