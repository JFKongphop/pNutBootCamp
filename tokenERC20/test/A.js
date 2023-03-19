const { expect, assert } = require("chai");
const { utils } = ethers;
describe('ERC20Token', async () => {
    let owner, invt1, invt2, erc20Token;
    
    beforeEach(async () => {
        [owner, invt1, invt2] = await ethers.getSigners();
        const ERC20Token = await ethers.getContractFactory('DustBoyNFT');
        erc20Token = await ERC20Token.deploy();
        await erc20Token.deployed();
        console.log(erc20Token);
    });
    it('aaa', async () => {
        expect(await erc20Token.name()).to.equal('eeeee')
    })

})