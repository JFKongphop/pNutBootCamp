const { expect, assert } = require("chai");
const { utils } = ethers;
describe('DustBoyNFT', async () => {
    let owner, invt1, invt2, dustBoyNFT;
    
    beforeEach(async () => {
        [owner, invt1, invt2] = await ethers.getSigners();
        const DustBoyNFT = await ethers.getContractFactory('DustBoyNFT');
        dustBoyNFT = await DustBoyNFT.deploy();
        await dustBoyNFT.deployed();
    });

    describe('Show initial valud of contract' , async () => {
        it('Should return name', async () => {
            expect(await dustBoyNFT.name()).to.equal('DustBoyNFT');
        })

        it('Should return symbol', async () => {
            expect(await dustBoyNFT.symbol()).to.equal('DBNFT');
        })

        it('Should return MAX_SUPPLY', async () => {
            expect(await dustBoyNFT.MAX_SUPPLY()).to.equal('20000');
        })

        it('Should return saleIsActive', async () => {
            expect(await dustBoyNFT.saleIsActive()).to.equal(true);
        })

        it('Should return customBaseURI by changing this variable to public', async () => {
            expect(await dustBoyNFT.customBaseURI()).to.equal('https://dustboy-metadata.laris.workers.dev/');
        })

        it('Should return royaltyInfo', async () => {
            const salePrice = 100;
            const [receiver, royaltyAmount] = await dustBoyNFT.royaltyInfo(1, salePrice);
            expect(receiver).to.equal(dustBoyNFT.address);
            expect(royaltyAmount).to.equal(salePrice / 10);
        })
    })

})