const {By} = require('selenium-webdriver')


const addMovie = async (driver) => {
    
    await driver.findElement(By.xpath('//input')).sendKeys('The Arrival')

    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(500)

    const movie = await driver.findElement(By.xpath('//li'))
    const displayed = movie.isDisplayed()
    expect(displayed).toBeTruthy()

}

const crossMovie = async (driver) => {

    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(500)

    const cross = await driver.findElement(By.xpath('//span[contains(@class, "checked")]'))
    const isCrossed = cross.isDisplayed()
    expect(isCrossed).toBeTruthy()
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('(//button)[2]')).click()
    await driver.sleep(500)

    const ul = await driver.findElements(By.xpath('//ul/li'))
    const present = ul.length > 0
    expect(present).toBeFalsy()
}

const checkMessage = async (driver) => {
    
    const message = await driver.findElement(By.id("message"))

    await driver.sleep(500)

    const displayedMessage = message.isDisplayed()

    expect(displayedMessage).toBeTruthy()
}
    
module.exports = {
    addMovie,
    crossMovie,
    deleteMovie,
    checkMessage
}