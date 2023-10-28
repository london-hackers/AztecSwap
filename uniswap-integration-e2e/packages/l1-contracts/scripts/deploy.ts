import { ethers } from "hardhat";

async function main() {

  let name = "PortalERC20";
  const portal = await ethers.deployContract(name);
  await portal.waitForDeployment();
  console.log(
    `Deployed ${name} to ${portal.target}`
  );

  name = "TokenPortal";
  const token = await ethers.deployContract(name);
  await token.waitForDeployment();
  console.log(
    `Deployed ${name} to ${token.target}`
  );

  name = "UniswapPortal";
  const uniswap = await ethers.deployContract(name);
  await uniswap.waitForDeployment();
  console.log(
    `Deployed ${name} to ${uniswap.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
