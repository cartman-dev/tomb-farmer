async function main() {
  const vaultAddress = '0xB41bb697893fdF54cef37Dfc451e6f5faD021E77';
  const strategyAddress = '0x6D825613dDf4bCaBacD91cCD3c3f77FB959ef183';

  const Vault = await ethers.getContractFactory('ReaperVaultv1_4');
  const vault = Vault.attach(vaultAddress);

  await vault.initialize(strategyAddress);
  console.log('Vault initialized');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
