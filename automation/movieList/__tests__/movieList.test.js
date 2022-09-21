const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const{addMovie, crossMovie, checkMessage} = require('../functions/test-functions.js')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
    await driver.sleep(500)
})

afterAll(async () => {
    await driver.quit()
})

test('addMovie', async () => {
    await addMovie(driver)
    await driver.sleep(1000)
})

test('cross off', async () => {
    await crossMovie(driver)
})

test('display message', async () => {
    await checkMessage(driver)
})