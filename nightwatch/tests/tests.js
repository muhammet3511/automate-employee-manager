const functions = require('../test_data/functions')
const selectors = require('../test_data/selectors')
const data = require('../test_data/test_data')

module.exports = {
    beforeEach: browser => {
        browser
            .url('http://localhost:3000')
        browser.expect.element(selectors.homeScreen.employeeDetails.titleTex).text.to.equal(data.goodData.employeeDetails.mainTitle),
            browser.expect.element(selectors.homeScreen.employeeDetails.noEmployeeTitle).text.to.equal(data.goodData.employeeDetails.noEmployeeTitle)

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
            .pause(1000)
            .waitForElementVisible(selectors.homeScreen.employeeDetails.namefield, 3000)// waiting untill it sees namefield.
            .click(selectors.homeScreen.employeeDetails.namefield)
            .pause(1000)
            .clearValue(selectors.homeScreen.employeeDetails.namefield)
            .setValue(selectors.homeScreen.employeeDetails.namefield, data.goodData.employeeDetails.employeeName)// looking for namefield and inputing employee name in the field.
            .click(selectors.homeScreen.employeeDetails.phonefield)
            .clearValue(selectors.homeScreen.employeeDetails.phonefield)
            .setValue(selectors.homeScreen.employeeDetails.phonefield, data.goodData.employeeDetails.searchPhone)
            .click(selectors.homeScreen.employeeDetails.titlefield)
            .clearValue(selectors.homeScreen.employeeDetails.titlefield)
            .pause(1000)
            .setValue(selectors.homeScreen.employeeDetails.titlefield, data.goodData.employeeDetails.searchTitle)//looking for employee titlefield,and searching by title

            .click(selectors.homeScreen.employeeDetails.saveButton)//after selecting or editing employee name it will click save button.
            .pause(1000)// it will pause for 2 second
        browser.expect.element(selectors.homeScreen.employeeDetails.employeeTitle).text.to.equal(data.goodData.employeeDetails.employeeName) // employee title should equal to employee name.        //
        browser.pause(500)
        browser.expect.element(selectors.homeScreen.employeeDetails.phonefield).to.have.value.that.equals(data.goodData.employeeDetails.searchPhone)
        browser.expect.element(selectors.homeScreen.employeeDetails.titlefield).to.have.value.that.equal(data.goodData.employeeDetails.searchTitle)
    },

    'testing cancel button reverts all changes': browser => {
        browser
            .waitForElementVisible(selectors.homeScreen.employeeNames.employeename5, 3000) // waiting untill it sees first employee in the list before moving on to the next step.
        browser.expect.element(selectors.homeScreen.employeeNames.employeename5).text.to.equal(data.goodData.employeeDetails.employeeName5)// first expecting name in the list of employee should equal to Bernice Ortice.
        browser
            .click(selectors.homeScreen.employeeNames.employeename5)// should click first of employee name in the list.
            .pause(1000)
            .waitForElementVisible(selectors.homeScreen.employeeDetails.namefield, 3000)// waiting untill it sees namefield.
            .click(selectors.homeScreen.employeeDetails.namefield)
            .pause(1000)
            .clearValue(selectors.homeScreen.employeeDetails.namefield)


            // looking for namefield and inputing employee name in the field.
            .click(selectors.homeScreen.employeeDetails.phonefield)

            .clearValue(selectors.homeScreen.employeeDetails.phonefield)
            .click(selectors.homeScreen.employeeDetails.titlefield)
            .setValue(selectors.homeScreen.employeeDetails.namefield, 'asdfg')
            .clearValue(selectors.homeScreen.employeeDetails.titlefield)
            .pause(1000)
            .click(selectors.homeScreen.employeeDetails.cancelButton)
            .pause(1000)
        browser.expect.element(selectors.homeScreen.employeeDetails.namefield).to.have.value.that.equals(data.goodData.employeeDetails.employeeName5)
        browser.expect.element(selectors.homeScreen.employeeDetails.phonefield).to.have.value.that.equals(data.goodData.employeeDetails.employeephone5)
        browser.expect.element(selectors.homeScreen.employeeDetails.titlefield).to.have.value.that.equals(data.goodData.employeeDetails.employeetitle5)
    },
    'testing if employee name matches with id number': browser => {
        browser
            .waitForElementVisible(selectors.homeScreen.employeeNames.employeename7, 2000)
        browser.expect.element(selectors.homeScreen.employeeNames.employeename7).text.to.equal(data.goodData.employeeDetails.employeeName7)
        browser.click(selectors.homeScreen.employeeNames.employeename7)
        browser.waitForElementVisible(selectors.homeScreen.employeeDetails.employeeID, 4000)
        browser.expect.element(selectors.homeScreen.employeeDetails.employeeID).text.to.equal(data.goodData.employeeDetails.cardId7)



    }




}







