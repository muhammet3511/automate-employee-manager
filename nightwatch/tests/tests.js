const functions = require('../test_data/functions')
const selectors = require('../test_data/selectors')
const data = require('../test_data/test_data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },

    'Editing an existing employee name will be saved in all areas': browser => {
        browser
            .waitForElementVisible(selectors.homeScreen.employeeNames.employeename1, 3000) // waiting untill it sees first employee in the list before moving on to the next step.
        browser.expect.element(selectors.homeScreen.employeeNames.employeename1).text.to.equal('Bernice Ortiz')// first expecting name in the list of employee should equal to Bernice Ortice.
        browser 
            .click(selectors.homeScreen.employeeNames.employeename1)// should click first of employee name in the list.
            .waitForElementVisible(selectors.homeScreen.employeeDetails.namefield, 3000)// waiting untill it sees namefield.
            // .clearValue(selectors.homeScreen.employeeDetails.namefield)
            // .clearValue(selectors.homeScreen.employeeDetails.phonefield)
            // .clearValue(selectors.homeScreen.employeeDetails.titlefield)
            .setValue(selectors.homeScreen.employeeDetails.namefield, data.goodData.employeeDetails.employeeName)// looking for namefield and inputing employee name in the field.
            .setValue(selectors.homeScreen.employeeDetails.phonefield, data.goodData.employeeDetails.searchPhone)//looking for phonefield and searching by phonenumber.
            .setValue(selectors.homeScreen.employeeDetails.titlefield, data.goodData.employeeDetails.searchTitle)//looking for employee titlefield,and searching by title
            
            .click(selectors.homeScreen.employeeDetails.saveButton)//after selecting or editing employee name it will click save button.
            .pause(2000)// it will pause for 2 second
        browser.expect.element(selectors.homeScreen.employeeDetails.employeeTitle).text.to.equal(data.goodData.employeeDetails.employeeName)// employee title should equal to employee name.
        browser.expect.element(selectors.homeScreen.employeeDetails.phonefield).text.to.equal('12345')//employee phone number should equal to 12345
        browser.expect.element(selectors.homeScreen.employeeDetails.titlefield).text.to.equal('Mo')// employee name should  equal to Mo
        
        
        browser.expect.element(selectors.homeScreen.employeeNames.employeename1).text.to.equal('Bernice Ortis')
       // first employee name should equal to Bernice Ortis.


    }
}



