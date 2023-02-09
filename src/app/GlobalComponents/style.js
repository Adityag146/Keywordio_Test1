import styled from "styled-components";

export const DashboardWrapper = styled.div`
  && {
    padding: 20px 20px;
    margin-top: 100px;
    border-radius: 10px;
  }
  .switch-content {
    background: #fff;
    border-radius: 3px;
    position: relative;
  }
  .MuiSwitch-root {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .switch-btn {
    display: table;
    background: #eeeeee;
    border-radius: 30px;
  }
  .switch-btn button {
    background: transparent;
    border: none;
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
export const ChartWrapper = styled.div`
  canvas {
    height: 300px !important;
    padding: 10px 0px 10px 10px;
    display: flex;
    width: 300px !important;
  }
  && {
    background: #fff;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    border-radius: 3px;
    padding-bottom: 15px;
  }
  .chart-parent p {
    padding: 12px 16px;
    font-weight: bold;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
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
