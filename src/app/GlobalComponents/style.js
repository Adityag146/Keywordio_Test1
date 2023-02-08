import styled from "styled-components";

export const DashboardWrapper = styled.div`
  && {
    padding: 20px 20px;
    margin-top: 100px;
    border-radius: 10px;
  }
`;

export const SubmitPopupWrapper = styled.div`
  .popup_content {
    width: 350px;
    height: 150px;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
  }
  svg {
    color: #0096ff;
    font-size: 35px;
  }
`;

export const HeaderWrapper = styled.div`
  .header-Web {
    justify-content: space-between;
    background: #fff !important;
    box-shadow: 0px -2px 8px #797979 !important;
    color: #000;
  }
  .MuiPaper-root-MuiAppBar-root {
    box-shadow: none !important;
  }
`;
