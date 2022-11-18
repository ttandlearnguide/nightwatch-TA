module.exports = {
    tests: client => {
        client
        //First step
            .url('https://www.cimri.com/') //visit to site.ssx
        //Second step
            .pause(1 * 3000) // 3 second wait.
        //Third step
            .waitForElementVisible('#__next > div > div.s1sb4ezy-0.bkCOiv > div > div > div.s1a29zcm-7.bhoLze > div > a') // element waiting until avaible.
        //Fourth step
            .click('#__next > div > div.s1sb4ezy-0.bkCOiv > div > div > div.s1a29zcm-7.esgifc > div > span > div.nu3ou5-14.efRizE > img') // click 'About Ranks' button.

            .click('#__next > div > div.s1sb4ezy-0.bkCOiv > div > div > div.s1a29zcm-7.esgifc > div > div > div > div > div.nu3ou5-1.eMnihp > div > button')

            .pause(1 * 4000)

            .setValue('#email', 'azuretestismail@gmail.com')

            .setValue('#password', 'Avea12345')

            .click('#root > div.App > div.sc-hBezlf.kVhPZf > div > div > div > div > div > div.sc-crzoAE.DykGo > div:nth-child(1) > div > form > div:nth-child(4) > button')

            .pause(1 * 5000)

            .click('#__next > div > div.s1a29zcm-8.fliiip > span')

            
            .click('#__next > div > nav > div > ol > li:nth-child(1) > a')

            .pause(1 * 6000)

            .click('div.bnaxiu:nth-child(1) > article:nth-child(1) > a:nth-child(1)')
            
            //.click('#cimri-overlay-close') //geçici element

            .click('#main_container > div > div.s98wa6g-0.feTYBN > div:nth-child(2) > div.s1a29zcm-7.fLXXmM > div:nth-child(2) > div > div.entnmt-0.llLLCS > button:nth-child(1) > span')

            .click('#main_container > div > div.s98wa6g-0.feTYBN > div:nth-child(2) > div.s1a29zcm-7.fLXXmM > div:nth-child(2) > div > div.s4fyo02-0.dbGoHI > div > div > div.entnmt-12.hDcwGw > label > div > div')

            .click('#main_container > div > div.s98wa6g-0.feTYBN > div:nth-child(2) > div.s1a29zcm-7.fLXXmM > div:nth-child(2) > div > div.s4fyo02-0.dbGoHI > div > div > button')

            .pause(1 * 3500)





        

    }
}
