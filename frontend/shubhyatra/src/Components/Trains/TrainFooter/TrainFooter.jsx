import React from "react";
import stylesTrainFooter from "./TrainFooter.module.css";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { Box, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box className={stylesTrainFooter.container}>
        <Box className={stylesTrainFooter.f_icon}>
          <a href="https://twitter.com/makemytrip/" target="blank">
            {" "}
            <FaTwitter className={stylesTrainFooter.twitter} />
          </a>

          <a href="https://www.facebook.com/makemytrip/" target="blank">
            {" "}
            <FaFacebookF className={stylesTrainFooter.facebook} />{" "}
          </a>
        </Box>

        <Box className={stylesTrainFooter.f_cright}>
          <span className={stylesTrainFooter.copyright}>
            {" "}
            © 2023 SubhaYatra PVT. LTD.
          </span>
          <span className={stylesTrainFooter.counteryName}>
            {" "}
            Country
            <Link to="/" className={stylesTrainFooter.country}>
              India
            </Link>
            <Link to="/" className={stylesTrainFooter.country}>
              USA
            </Link>
            <Link to="/" className={stylesTrainFooter.country}>
              UAE
            </Link>
          </span>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
