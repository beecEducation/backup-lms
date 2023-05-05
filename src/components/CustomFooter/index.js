import { Container } from "react-bootstrap";
import { Images } from "../index";
import "./style.sass";
import { Text, View } from "@aws-amplify/ui-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const CustomFooter = () => {
  return (
    <Container className="footer-container" style={{ padding: 0 }} fluid>
      <div className={"footer-div text-center mt-4"}>
        <img
          style={{ marginTop: "120px", height: "35px", width: "120px" }}
          src={Images.logo}
        />
        <div className={"footer-social"}>
          <a target="_blank" href="https://www.facebook.com/beecinc/">
            <FaFacebookF className={"social-icon"} />
          </a>
          {/* <a target="_blank" href="https://facebook.com">
            <FaTwitter className={"social-icon"} />
          </a>
          <a target="_blank" href="https://facebook.com">
            <FaInstagram className={"social-icon"} />
          </a> */}
          <a target="_blank" href="https://www.linkedin.com/company/beec-inc">
            <FaLinkedinIn className={"social-icon"} />
          </a>
          <a target="_blank" href="https://www.youtube.com/@beecbeyondeducationconsult6877">
            <FaYoutube className={"social-icon"} />
          </a>
        </div>
      </div>
      <div className={"footer-div2"}>
        <div>
          <View className={"footer-address"}>
            <Text style={{ fontSize: "15px" }}>Visit Us</Text>
            <Text>
              4125 Blackhawk Plaza Circle Suite 166 <br />
              Danville, CA 94506{" "}
            </Text>
          </View>
        </div>
        <div>
          <View className={"footer-contact"}>
            <Text style={{ fontSize: "15px" }}>Contact Us</Text>
            <Text>
              mail@beecadvantage.com
              <br />
              (925) 557-1335
            </Text>
          </View>
        </div>
      </div>
      <div className={"footer-div3 text-center"}>
        <p>© 2022 BEEC Inc All Rights Reserved</p>
      </div>
    </Container>
  );
};

export default CustomFooter;
