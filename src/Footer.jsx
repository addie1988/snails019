import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineDribbble } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="telephone">
            <div className="telephone_content">
                <span>Let&apos;s talk with us</span>
                <p>1-800-222-000</p>
            </div>
        </div>
        <div className="community">
            <div className="community_content">
                <ul>
                    <li><TiSocialFacebook /></li>
                    <li><AiOutlineDribbble /></li>
                    <li><FaXTwitter /></li>
                    <li><AiOutlineInstagram /></li>
                    <li><TiSocialLinkedin /></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="footer_area">
        <div className="footer_area_content">
            <p>Copyright ©2012~2022 Snails . All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer