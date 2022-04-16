import styled from "@emotion/styled";

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 73px;
  margin-bottom: 30px;
  width: 764px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

export const MainTitle = styled.div`
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #6400ff;
`;

export const TitleName = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 30px;
  width: 100%;
  height: 100%;
`;

export const BodyInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
`;

export const BodyInnerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  width: 60px;
  height: 40px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

export const BodyInnerInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export const BodyInnerText = styled.textarea`
  width: 100%;
  height: 240px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export const Writer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  width: 60px;
  height: 40px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  margin-right: 10px;
  width: 80px;
  height: 30px;
  background: #999999;
  border-radius: 30px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  &:hover {
    background: #6400ff;
  }
`;

export const CancelBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  width: 80px;
  height: 30px;
  background: #999999;
  border-radius: 30px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  &:hover {
    background: #6400ff;
  }
`;
