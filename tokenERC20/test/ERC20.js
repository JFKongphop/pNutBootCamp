// const { expect, assert } = require("chai");
// const { utils } = ethers;
// describe('ERC20Token', async () => {
//     let owner, invt1, invt2, erc20Token;
    
//     beforeEach(async () => {
//         [owner, invt1, invt2] = await ethers.getSigners();
//         const ERC20Token = await ethers.getContractFactory('Token');
//         erc20Token = await ERC20Token.deploy('JFKToken', 'JFK', 1_000_000);
//         await erc20Token.deployed();
//         // const data = await erc20Token
//         // console.log(erc20Token);
//         // for (const [key, value] of Object.entries(data)) {
//         //     console.log(`${key}`);
//         // }
//     });

//     describe('Check the initial value of contract', async () => {
//         it('Should return name', async () => {
//             expect(await erc20Token.name()).to.equal('JFKToken');
//         });

//         it('Should return symbol', async () => {
//             expect(await erc20Token.symbol()).to.equal('JFK');
//         });

//         it('Should return decimals', async () => {
//             expect(await erc20Token.decimals()).to.equal(18);
//         });
        
//         it('Should return totalSupply', async () => {
//             expect(
//                 await erc20Token.totalSupply())
//                 .to.equal(utils.parseEther('1000000')
//             );
//         });

//         it('Should return balaceOf owner address', async () => {
//             expect(
//                 await erc20Token.balanceOf(owner.address))
//                 .to.equal(utils.parseEther('1000000')
//             );
//         });
//     });

//     describe('Mint to address who want this token by swap by eth', async () => {
//         it('Should return true of _transfer function', async () => {
//             await erc20Token.connect(owner).transfer();
//         })
//     })
// })