import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 764px;
  height: 240px;
  background: linear-gradient(
    95.18deg,
    #6400ff 0.47%,
    #e3d1ff 102.52%,
    #d0b1ff 102.52%
  );
  border: 4px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

export const Slider1 = styled(Slider)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 764px;
  height: 240px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
`;

export const BannerImg = styled.img`
  width: 700px;
  height: 200px;
`;
