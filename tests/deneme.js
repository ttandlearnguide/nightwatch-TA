module.exports = {
    tests: client => {
        client
        //First step
            .url('https://testautomationu.applitools.com/') //visit to site.
        //Second step
            .pause(1 * 3000) // 3 second wait.
        //Third step
            .waitForElementVisible('#app > div.theme-container.no-sidebar > header > a > img') // element waiting until avaible.
        //Fourth step
            .click('#app > div.theme-container.no-sidebar > header > div.links > nav > div:nth-child(1) > a') // click 'About Ranks' button.

            .pause(1 * 3000) // 3 second delay.

            .click('#app > div.theme-container.no-sidebar > header > div.links > nav > div:nth-child(2) > a') //click 'TAU 100' button.

            .pause(1 * 3000) // 3 second delay.

            .click('#app > div.theme-container.no-sidebar > header > div.links > nav > div:nth-child(3) > a') // click 'Learning Paths' button.

            .pause(1 * 3000) // 3 second delay.

            .click('#app > div.theme-container.no-sidebar > header > div.links > nav > div:nth-child(4) > a') // click 'Certifices' button.

            .pause(1 * 3000) // 3 second delay.

            .click('#app > div.theme-container.no-sidebar > header > div.links > div > div:nth-child(1) > div > a:nth-child(1)') // click 'Sign In' button.

    }
}