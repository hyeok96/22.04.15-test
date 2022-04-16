import * as s from "./layout.header.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutHeaderPresenterPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <s.Wrapper>
      <s.Slider1 {...settings}>
        <s.Div>
          <s.BannerImg src="/board/img.png" />
        </s.Div>
        <s.Div>
          <s.BannerImg src="/board/test.png" />
        </s.Div>
      </s.Slider1>
    </s.Wrapper>
  );
}
