import styled from "styled-components";
export const AddChartWrapper = styled.div`
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
    position: absolute;
    right: 14px;
    bottom: 13px;
    background: #eeeeee;
    border-radius: 30px;
  }
  .switch-btn button {
    background: transparent;
    border: none;
  }
  .switch-btn svg {
    color: rgba(0, 0, 0, 0.87);
    font-size: 20px;
  }
  .switch-btn .MuiButtonBase-root {
    padding: 3px;
  }
  .switch-btn .MuiButtonBase-root.active {
    background: #0699ff;
    padding: 3px;
  }
  .switch-btn .MuiButtonBase-root.active svg {
    color: #fff;
  }
`;
export const DashboardWrapper = styled.div`
  && {
    padding: 20px 20px;
    margin: 100px 20px 30px 20px;
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
  .Table-dashboard .MuiPaper-root,
  .dashTableDetail .MuiPaper-root {
    height: 385px;
    overflow: auto;
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
