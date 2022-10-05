// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
      <a
        href="https://www.youtube.com/"
        className="youtube social"
        style={{ margin: 15, marginLeft: 15, marginRight: 15 }}
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />
      </a>
      <a
        href="https://www.facebook.com/login/"
        className="facebook social"
        style={{ margin: 15, marginLeft: 15, marginRight: 15 }}
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" color="#4968ad" />
      </a>
      <a
        href="https://twitter.com/i/flow/login"
        className="twitter social"
        style={{ margin: 15, marginLeft: 15, marginRight: 15 }}
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" color="#49a1eb" />
      </a>
      <a
        href="https://www.instagram.com/accounts/login/"
        className="instagram social"
        style={{ margin: 15, marginLeft: 15, marginRight: 15 }}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
      </a>
    </div>
  );
}
