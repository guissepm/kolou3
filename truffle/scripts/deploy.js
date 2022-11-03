const main = async () => {
    const Certification = await hre.ethers.getContractFactory("Certification");
    const certifications = await Certification.deploy();
  
    await certifications.deployed();
  
    console.log("Crtification  deployed to:", certifications.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
  