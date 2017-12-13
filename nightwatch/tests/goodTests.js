const functions = require('../data/functions')
const globals = require('../data/globalData')
const goodData = require('../data/goodDataTransactions')

module.exports = {
    before: (browser) => {
        browser
            .url(globals.url)
        functions.uiCheck(browser)
    },
    after: (browser) => {
        browser.end()
    },
    'Check edit and save functionality': (browser) => {
        goodData.saveTests.forEach((test, i) => {
            //run steps from QEM-12: https://dmutah.atlassian.net/browse/QEM-12
            functions.selectEmployee(test.startEmployee, browser)
            functions.editEmployee(test.changes, browser)
            functions.save(browser)

            //check post-conditions from the same
            functions.selectOtherEmployee(test.otherEmployee, browser)
            functions.selectEmployee(test.endEmployee, browser)
        })
    },
    'Check edit and cancel functionality': (browser) => {
        goodData.cancelTests.forEach((test, i) => {
            //run steps from QEM-13: https://dmutah.atlassian.net/browse/QEM-13
            functions.selectEmployee(test.employee, browser)
            functions.editEmployee(test.changes, browser)
            functions.cancel(browser)
            //check post-conditions from the same
            functions.checkEmployee(test.employee, browser)
            //run with navigate away
            functions.editEmployee(test.changes, browser)
            functions.selectOtherEmployee(test.otherEmployee, browser)           
            //check post-conditions from the same
            functions.selectEmployee(test.employee, browser)
        })
    }
}