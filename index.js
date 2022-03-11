const { expect } = require("chai");
const { opts } = require('./config');
const wdio = require("webdriverio");
const { describe } = require("mocha");
const { selectors } = require('./selectors')



var client;
before(async()=>{
    client = await wdio.remote(opts);

})

describe("Calculator App Testing", async () => {
    it("Do sum", async () => {
        let btn8 = await client.$(selectors.btn8)
        await btn8.click();
        let btnPlus = await client.$(selectors.btnPlus)
        await btnPlus.click();
        let btn7 = await client.$(selectors.btn7)
        await btn7.click();
        let resultPreview = await client.$(selectors.resultPreview)
        let res = await resultPreview.getText();
        console.log(res);
        expect(res).to.equal('15');

    })
    it("Do subtraction", async () => {
        let btn8 = await client.$(selectors.btn8)
        await btn8.click();
        let btnMinus = await client.$(selectors.btnMinus)
        await btnMinus.click();
        let btn7 = await client.$(selectors.btn7)
        await btn7.click();
        let resultPreview = await client.$(selectors.resultPreview)
        let res = await resultPreview.getText();
        console.log(res);
        expect(res).to.equal('1');


    })
    it("Do multiplication", async () => {
        let btn8 = await client.$(selectors.btn8)
        await btn8.click();
        let btnMultiply = await client.$(selectors.btnMultiply)
        await btnMultiply.click();
        let btn7 = await client.$(selectors.btn7)
        await btn7.click();
        let resultPreview = await client.$(selectors.resultPreview)
        let res = await resultPreview.getText();
        console.log(res);
        expect(res).to.equal('56');


    })
    it("Do division", async () => {
        let btn8 = await client.$(selectors.btn8)
        await btn8.click();
        let btnDivision = await client.$(selectors.btnDivision)
        await btnDivision.click();
        let btn7 = await client.$(selectors.btn7)
        await btn7.click();
        let resultPreview = await client.$(selectors.resultPreview)
        let res = await resultPreview.getText();
        console.log(res);
        expect(res).contains('1.142');

    })
    afterEach(async () => {
        let btnClear = await client.$(selectors.btnClear);
        await btnClear.click();

    })

})
after(async () => {
    await client.deleteSession();
})