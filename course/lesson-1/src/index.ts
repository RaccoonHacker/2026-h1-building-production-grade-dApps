import { ethers } from "ethers";

async function main() {
    // faucet https://faucet.polkadot.io/ Paseo AssetHub
    const URL = "https://testnet-passet-hub-eth-rpc.polkadot.io";
    const provider = new ethers.JsonRpcProvider(URL);
    const address = "0xC3E24Ce27d19DD21EB69d299e69B52A4be7B0A62"; // put your address here
    const balance = await provider.getBalance(address);
    console.log(`Balance of ${address}: ${ethers.formatEther(balance)} ETH`);
}

main();
