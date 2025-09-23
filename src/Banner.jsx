import bannerImg from './images/banner.webp';


export default function Banner() {
  return (
    <div className='banner'>
        <div className='banner_content'>
            <div className="banner_img">
                <div className="banner_img_content">
                    <img src={bannerImg} alt="banner" />
                    <h1>listening</h1>
                </div>
            </div>
            <div className="banner_text"></div>
            <div className="banner_button"></div>
        </div>
    </div>
  )
}