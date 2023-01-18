import React from "react";
import stylesFooter from "./Footer.module.css";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { Box, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box className={stylesFooter.container}>
        <Box className={stylesFooter.f_icon}>
          <a href="https://twitter.com/makemytrip/" target="blank">
            {" "}
            <FaTwitter className={stylesFooter.twitter} />
          </a>

          <a href="https://www.facebook.com/makemytrip/" target="blank">
            {" "}
            <FaFacebookF className={stylesFooter.facebook} />{" "}
          </a>
        </Box>

        <Box className={stylesFooter.f_cright}>
          <span className={stylesFooter.copyright}>
            {" "}
            © 2023 SubhaYatra PVT. LTD.
          </span>
          <span className={stylesFooter.counteryName}>
            {" "}
            Country
            <Link to="/" className={stylesFooter.country}>
              India
            </Link>
            <Link to="/" className={stylesFooter.country}>
              USA
            </Link>
            <Link to="/" className={stylesFooter.country}>
              UAE
            </Link>
          </span>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
