const main = async () => {
  /** fund contract with .1 eth */
  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();
  console.log('WavePortal address: ', waveContract.address);

  // const [deployer] = await hre.ethers.getSigners();
  // const accountBalance = await deployer.getBalance();
  // console.log('Deploying contracts with account: ', deployer.address);
  // console.log('Account balance: ', accountBalance.toString());
  // const Token = await hre.ethers.getContractFactory('WavePortal');
  // const portal = await Token.deploy();
  // await portal.deployed();
  // console.log('WavePortal address: ', portal.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
