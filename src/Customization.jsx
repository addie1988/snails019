import customization_img_1 from "./images/customization_img_1.png";
import customization_img_2 from "./images/customization_img_2.png";
import customization_img_3 from "./images/customization_img_3.webp";
import customization_img_4 from "./images/customization_img_4.webp";
import customization_img_1_1 from "./images/customization_img_1_1.webp";
import customization_img_2_1 from "./images/customization_img_2_1.webp";
import customization_img_3_1 from "./images/customization_img_3_1.webp";
import customization_img_4_1 from "./images/customization_img_4_1.webp";

function Customization() {
  return (
    <div className="customization">
      <div className="customization_content">
        <div className="customization_title">
          <div className="customization_title_content">
            <h1>Choose the perfect product for you</h1>
          </div>
        </div>
        <div className="customization_img">
          <div className="customization_img_content">
            <ul>
              <li>
                <div className="customization_img_max">
                  <div className="customization_img_max_content">
                    <img src={customization_img_1} alt="customization_img_1" />
                  </div>
                </div>
                <div className="customization_img_min">
                  <div className="customization_img_min_content">
                    <img src={customization_img_1_1} alt="customization_img_1_1" />
                  </div>
                </div>
                <div className="customization_img_text">
                  <div className="customization_img_text_content">
                    <p>Silver</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="customization_img_max">
                  <div className="customization_img_max_content">
                    <img src={customization_img_2} alt="customization_img_2" />
                  </div>
                </div>
                <div className="customization_img_min">
                  <div className="customization_img_min_content">
                    <img src={customization_img_2_1} alt="customization_img_2_1" />
                  </div>
                </div>
                <div className="customization_img_text">
                  <div className="customization_img_text_content">
                    <p>Grey</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="customization_img_max">
                  <div className="customization_img_max_content">
                    <img src={customization_img_3} alt="customization_img_3" />
                  </div>
                </div>
                <div className="customization_img_min">
                  <div className="customization_img_min_content">
                    <img src={customization_img_3_1} alt="customization_img_3_1" />
                  </div>
                </div>
                <div className="customization_img_text">
                  <div className="customization_img_text_content">
                    <p>Pink</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="customization_img_max">
                  <div className="customization_img_max_content">
                    <img src={customization_img_4} alt="customization_img_4" />
                  </div>
                </div>
                <div className="customization_img_min">
                  <div className="customization_img_min_content">
                    <img src={customization_img_4_1} alt="customization_img_4_1" />
                  </div>
                </div>
                <div className="customization_img_text">
                  <div className="customization_img_text_content">
                    <p>Blue</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="customization_button">
          <div className="customization_button_content">
            <a href="#"><p>Just $999</p></a>
            <a href="#"><p>Purchase now</p></a>
          </div>
        </div>
        <div className="customization_img_p">
          <div className="customization_img_p_content">
            <p>Secure • Free • Contactless delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customization;
