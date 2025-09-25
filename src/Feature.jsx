import { CiMicrophoneOn } from "react-icons/ci";
import { IoWaterOutline } from "react-icons/io5";
import { GiAerialSignal } from "react-icons/gi";
import { IoVolumeHighOutline } from "react-icons/io5";
import { GiLovers } from "react-icons/gi";
import { SlEarphones } from "react-icons/sl";

function Feature() {
  return (
    <div className="feature">
      <div className="feature_content">
        <div className="feature_title">
          <div className="feature_title_content">
            <h1>13</h1>
            <p>Exclusive features.</p>
          </div>
        </div>
        <div className="feature_ul">
            <div className="feature_ul_content">
                <ul>
                    <li>
                        <div className="feature_ul_icon">
                            <div className="feature_ul_icon_content">
                                <CiMicrophoneOn />
                            </div>
                        </div>
                        <div className="feature_ul_title">
                            <div className="feature_ul_title_content">
                                <h3>Microphone built-in</h3>
                            </div>
                        </div>
                        <div className="feature_ul_text">
                            <div className="feature_ul_text_content">
                                <p>Lorem ipsum consectetur elit eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="feature_ul_icon">
                            <div className="feature_ul_icon_content">
                                <IoWaterOutline />
                            </div>
                        </div>
                        <div className="feature_ul_title">
                            <div className="feature_ul_title_content">
                                <h3>Water resistant</h3>
                            </div>
                        </div>
                        <div className="feature_ul_text">
                            <div className="feature_ul_text_content">
                                <p>Lorem ipsum consectetur elit eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="feature_ul_icon">
                            <div className="feature_ul_icon_content">
                                <GiAerialSignal />
                            </div>
                        </div>
                        <div className="feature_ul_title">
                            <div className="feature_ul_title_content">
                                <h3>Powerful signal</h3>
                            </div>
                        </div>
                        <div className="feature_ul_text">
                            <div className="feature_ul_text_content">
                                <p>Lorem ipsum consectetur elit eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="feature_ul_icon">
                            <div className="feature_ul_icon_content">
                                <IoVolumeHighOutline />
                            </div>
                        </div>
                        <div className="feature_ul_title">
                            <div className="feature_ul_title_content">
                                <h3>Noise cancellation</h3>
                            </div>
                        </div>
                        <div className="feature_ul_text">
                            <div className="feature_ul_text_content">
                                <p>Lorem ipsum consectetur elit eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="feature_ul_icon">
                            <div className="feature_ul_icon_content">
                                <GiLovers />
                            </div>
                        </div>
                        <div className="feature_ul_title">
                            <div className="feature_ul_title_content">
                                <h3>Environment friendly</h3>
                            </div>
                        </div>
                        <div className="feature_ul_text">
                            <div className="feature_ul_text_content">
                                <p>Lorem ipsum consectetur elit eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="feature_ul_icon">
                            <div className="feature_ul_icon_content">
                                <SlEarphones />
                            </div>
                        </div>
                        <div className="feature_ul_title">
                            <div className="feature_ul_title_content">
                                <h3>Sleek design</h3>
                            </div>
                        </div>
                        <div className="feature_ul_text">
                            <div className="feature_ul_text_content">
                                <p>Lorem ipsum consectetur elit eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </li>
                </ul>    
            </div>
        </div>
        <div className="feature_p">
          <div className="feature_p_content">
            <span>impressive</span>
            <p>High quality bass and sound with much more awesome features.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
