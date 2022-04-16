import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 764px;
  height: 446px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 30px;
  margin-bottom: 16px;
  width: 100%;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

export const ListTitle = styled.div`
  width: 40px;
  height: 20px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ListDate = styled.div`
  width: 110px;
  height: 20px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #999999;
`;
