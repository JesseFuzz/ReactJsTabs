import styled from "styled-components";

interface TabOptionsProps {
  isActive: boolean;
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TabOptions = styled.a<TabOptionsProps>`
  font-size: 24px;
  font-weight: 650;
  gap: 10px;
  border-bottom: ${(props) => (props.isActive ? "6px solid #5656AE" : "none")};
  padding-bottom: 4px;
  margin-bottom: 6px;
  color: #fff;
  transition: border-bottom 0.3s ease-in-out;
  cursor: pointer;
  
`;
