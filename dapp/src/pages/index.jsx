import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import CustomButton from "../components/CustomButton";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
export default function HomePage() {
  return (
    <>
        <ResponsiveAppBar></ResponsiveAppBar>

        {/* Predefined button  */}
        <Web3Button icon="show" label="Connect Wallet" balance="show" />
        <br />

        {/* Network Switcher Button */}
        <Web3NetworkSwitch />
        <br />

        {/* Custom button */}
        <CustomButton />

    </>
  );
}
