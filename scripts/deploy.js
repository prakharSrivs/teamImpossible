// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const [owner,customer1,customer2] = await hre.ethers.getSigners();
    const FlipCoin = await hre.ethers.getContractFactory('FlipCoin');
    const flipCoin = await FlipCoin.deploy(100, 1000);
  
    await flipCoin.deployed();
    const ownersBalance=await flipCoin._getBalance(owner.address);
    const customersBalance=await flipCoin._getBalance(customer1.address);

    console.log(ownersBalance," ",customersBalance);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
