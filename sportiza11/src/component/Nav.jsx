import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Logo from '../assets/logowhite.png'
import Image1 from '../assets/Head_player.png';
import Ileague from '../assets/League.png';
import IPL from '../assets/IPL.png';
import ISL from '../assets/ISL.png';

import Philipps from '../assets/philips.png';
import Chola from '../assets/Chola.png';
import Coke from '../assets/Coke.png';
import Honda from '../assets/Honda.png';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "About Us",
    },{
      text: "How To Play",
    },{
      text: "FAQ's",
    },{
      text: "Blog",
    },{
      text: "Download Sportiza 11",
    },
  ];
  return (
    <div className="head-container">
      <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">About Us</a>
        <a href="">How To Play</a>
        <a href="">FAQ's</a>
        <a href="">Blog</a>
        <a href="your_download_url_here" className="primary-button">Download Sportiza 11</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>

    {/* Crickter Images */}
    <div className="head-cricketer-container">
    <img src={Image1} alt="" />
    </div>
    <div className="head-text-container">
    <h3>BEST FANTASY CRICKET APP</h3>
    <h1>IS NOW AVALIABLE</h1>
    <h4>Ab Hoga Asli Khel</h4>
    </div>

    <div className="official-partner-container">
      <h4>Official Partner</h4>
      <div class="partner-images">
        <img src={Ileague} alt="Partner 1" />
        <img src={IPL} alt="Partner 2" />
        <img src={ISL} alt="Partner 3" />
    </div>
    </div>

        {/* Sponsers Section */}

        <div class="official-sponsor-container">
    <h4>Official Sponsors</h4>
    <div class="sponsor-images">
        <div class="sponsor">
            <img src={Philipps} alt="Partner 1" />
            <p>Philipps</p>
        </div>
        <div class="sponsor">
            <img src={Chola} alt="Partner 2" />
            <p>Cholamandalam Finance</p>
        </div>
        <div class="sponsor">
            <img src={Coke} alt="Partner 3" />
            <p>Coca Cola</p>
        </div>
        <div class="sponsor">
            <img src={Honda} alt="Partner 4" />
            <p>Honda</p>
        </div>
    </div>
</div>

    </div>
  );
};

export default Navbar;