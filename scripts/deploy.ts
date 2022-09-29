const hre = require("hardhat");

async function main() {
    const KSAToken = await hre.ethers.getContractFactory("KSAToken");
    console.log('Deploying KSAToken...');
    const token = await KSAToken.deploy('KSAToken', 'KSA');

    await token.deployed();
    console.log("KSAToken deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });