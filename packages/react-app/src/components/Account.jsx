import React from "react";
import { Button } from "antd";
import Address from "./Address";
import Balance from "./Balance";
import Wallet from "./Wallet";
import { useThemeSwitcher } from "react-css-theme-switcher";



export default function Account({
  address,
  userProvider,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
}) {
  const modalButtons = [];
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        <Button
          key="logoutbutton"
          style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4 }}
          shape="round"
          size="large"
          onClick={logoutOfWeb3Modal}
        >
          logout
        </Button>,
      );
    } else {
      modalButtons.push(
        <Button
          key="loginbutton"
          style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4 }}
          shape="round"
          size="large"
          /*type={minimized ? "default" : "primary"}     */
          onClick={loadWeb3Modal}
        >
          connect
        </Button>,
      );
    }
  }

  const { currentTheme } = useThemeSwitcher();

  const display = minimized ? (
    ""
  ) : (
    <span>
      {address ? <Address address={address} ensProvider={mainnetProvider} blockExplorer={blockExplorer} /> : "Connecting..."}
      <Balance address={address} provider={localProvider} price={price} />
      <Wallet address={address} provider={userProvider} ensProvider={mainnetProvider} price={price} color={currentTheme == "light" ? "#1890ff" : "#2caad9"} />
    </span>
  );

  return (
    <div>
      {display}
      {modalButtons}
    </div>
  );
}
