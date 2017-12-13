const selectors = require('./selectors')
const globalData = require('./globalData')

module.exports = {
    /**
     * editEmployee will set the values of an employee with the given information
     * 
     * changes = [
     *  {fieldName: '', value: ''},
     *  {fieldName: '', value: ''}
     * ]
     * 
     * @param {array} changes changes is an array containing objects with fieldName and value properties (fieldName must be "Name", "Phone Number", or "Title")
     * @param {object} browser browser is the Nightwatch/Selenium browser object
     */
    editEmployee: (changes, browser) => {
        changes.forEach(change => {

            //grab the correct selector for the named field
            let selector = ''
            switch (change.fieldName) {
                case 'Name':
                    selector = selectors.nameField
                    break;
                case 'Phone Number':
                    selector = selectors.phoneField
                    break;
                case 'Title':
                    selector = selectors.titleField
                    break;
                default:
                    break;
            }
            browser
                .clearValue(selector)
                .setValue(selector, change.value)
                .verify.value(selector, change.value)
        })
    },
    /**
     * save clicks the save button
     * 
     * @param {object} browser browser is the Nightwatch/Selenium browser object
     */
    save: (browser) => {
        browser.click(selectors.saveButton)
    },
    /**
     * cancel clicks the cancel button
     * 
     * @param {object} browser browser is the Nightwatch/Selenium browser object
     */
    cancel: (browser) => {
        browser.click(selectors.cancelButton)
    },
    /**
     * selectEmployee clicks an employee link and verifies the data received
     * 
     * employee : {
     *  id: '',
     *  name: '',
     *  phone: '',
     *  title: ''
     * }
     * 
     * @param {object} employee employee is an object with id, name, phone and title properties
     * @param {object} browser browser is the Nightwatch/Selenium browser object
     */
    selectEmployee: (employee, browser) => {
        //select the employee
        browser
            .getText(selectors.employeeLink(employee.id), results => {
                browser.assert.equal(results.value, employee.name)
            })
            .click(selectors.employeeLink(employee.id))

        //make sure the right info loaded AND labels/buttons are present
        browser.expect.element(selectors.cardTitle).text.to.equal(employee.name).before(1000)
        browser
            .verify.containsText(selectors.idNumber, employee.id)
            .verify.visible(selectors.saveButton)
            .verify.containsText(selectors.saveButton, globalData.saveButton)
            .verify.visible(selectors.cancelButton)
            .verify.containsText(selectors.cancelButton, globalData.cancelButton)
            .verify.containsText(selectors.nameLabel, globalData.nameLabel)
            .verify.value(selectors.nameField, employee.name)
            .verify.containsText(selectors.phoneLabel, globalData.phoneLabel)
            .verify.value(selectors.phoneField, employee.phone)
            .verify.containsText(selectors.titleLabel, globalData.titleLabel)
            .verify.value(selectors.titleField, employee.title)
        browser.expect.element(selectors.saveButton).to.have.attribute('disabled')
        browser.expect.element(selectors.cancelButton).to.have.attribute('disabled')
    },
    /**
     * checkEmployee verifies that the current screen reflects the entered employee
     * 
     * employee : {
     *  id: '',
     *  name: '',
     *  phone: '',
     *  title: ''
     * }
     * 
     * @param {object} employee employee is an object with id, name, phone and title properties
     * @param {object} browser browser is the Nightwatch/Selenium browser object
     */
    checkEmployee: (employee, browser) => {
        //check all the employee data on the screen
        browser
            .getText(selectors.employeeLink(employee.id), results => {
                browser.assert.equal(results.value, employee.name)
            })
            .verify.containsText(selectors.idNumber, employee.id)
            .verify.value(selectors.nameField, employee.name)
            .verify.value(selectors.phoneField, employee.phone)
            .verify.value(selectors.titleField, employee.title)
    },
    /**
     * selectOtherEmployee navigates to the given employee
     * 
     * @param {string} employeeNumber is the ID of an employee
     * @param {object} browser browser is the Nightwatch/Selenium browser object
     */
    selectOtherEmployee: (employeeNumber, browser) => {
        browser.click(selectors.employeeLink(employeeNumber))
    },
    /**
     * uiCheck will make sure elements are present and correct before employees are selected
     * it will use the global data file and selectors to do so
     * 
     * @param {object} browser browser is the Nightwatch/Selenium browser object 
     */
    uiCheck: (browser) => {
        browser.expect.element(selectors.titleBar).to.be.visible
        browser.expect.element(selectors.titleBar).text.to.equal(globalData.titleBar)
        browser.expect.element(selectors.employeeCard).to.be.visible
        browser.expect.element(selectors.noEmployeeMessage).to.be.visible
        browser.expect.element(selectors.noEmployeeMessage).text.to.equal(globalData.noEmployeeMessage)
    }
}