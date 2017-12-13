module.exports = {
    titleBar: `span[class='titleText']`,
    employeeCard: `div[class='infoCard']`,
    noEmployeeMessage: `p[id='noEmployee']`,
    employeeList: `ul[class='listContainer']`,
    /**
     * employeeLink is a function that takes an employee ID, and returns the anticipated selector
     * 
     * @param {string} id id is the numeric ID number of an employee
     * @returns {string} returns the selector for that employee's link
     */
    employeeLink: id => `li[name='employee${id}']`,
    cardTitle: `p[name='employeeName']`,
    idNumber: `span[name='employeeID']`,
    saveButton: `button[name='save']`,
    cancelButton: `button[name='cancel']`,
    nameLabel: `span[name='nameLabel']`,
    nameField: `input[name='nameEntry']`,
    phoneLabel: `span[name='phoneLabel']`,
    phoneField: `input[name='phoneEntry']`,
    titleLabel: `span[name='titleLabel']`,
    titleField: `input[name='titleEntry']`
}