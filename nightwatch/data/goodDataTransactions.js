//see templates at the bottom of the page for save and cancel tests

module.exports = {
    saveTests: [
        //Case 1
        {
            startEmployee: {
                id: '8',
                name: 'Lou White',
                phone: '8727813498',
                title: 'Full-Stack Developer'
            },
            changes: [
                { fieldName: 'Name', value: 'Louis Whitmore' }
            ],
            otherEmployee: '6',
            endEmployee: {
                id: '8',
                name: 'Louis Whitmore',
                phone: '8727813498',
                title: 'Full-Stack Developer'
            }
        },
        //Case 2
        {
            startEmployee: {
                id: '8',
                name: 'Louis Whitmore',
                phone: '8727813498',
                title: 'Full-Stack Developer'
            },
            changes: [
                { fieldName: 'Phone Number', value: '1234567890' }
            ],
            otherEmployee: '1',
            endEmployee: {
                id: '8',
                name: 'Louis Whitmore',
                phone: '1234567890',
                title: 'Full-Stack Developer'
            }
        },
        //Case 3
        {
            startEmployee: {
                id: '1',
                name: 'Bernice Ortiz',
                phone: '4824931093',
                title: 'CEO'
            },
            changes: [
                { fieldName: 'Title', value: 'Belinda' }
            ],
            otherEmployee: '3',
            endEmployee: {
                id: '1',
                name: 'Bernice Ortiz',
                phone: '4824931093',
                title: 'Belinda'
            }
        },
        //Case 4
        {
            startEmployee: {
                id: '5',
                name: 'Dollie Berry',
                phone: '4873459812',
                title: 'Front-End Developer'
            },
            changes: [
                { fieldName: 'Name', value: 'Person of Interest' },
                { fieldName: 'Phone Number', value: '9876543210' }
            ],
            otherEmployee: '1',
            endEmployee: {
                id: '5',
                name: 'Person of Interest',
                phone: '9876543210',
                title: 'Front-End Developer'
            }
        },
        //Case 5
        {
            startEmployee: {
                id: '5',
                name: 'Person of Interest',
                phone: '9876543210',
                title: 'Front-End Developer'
            },
            changes: [
                { fieldName: 'Phone Number', value: '2345678901' },
                { fieldName: 'Title', value: 'ABCD' }
            ],
            otherEmployee: '2',
            endEmployee: {
                id: '5',
                name: 'Person of Interest',
                phone: '2345678901',
                title: 'ABCD'
            }
        },
        //Case 6
        {
            startEmployee: {
                id: '1',
                name: 'Bernice Ortiz',
                phone: '4824931093',
                title: 'Belinda'
            },
            changes: [
                { fieldName: 'Name', value: 'Belinda' },
                { fieldName: 'Title', value: 'Master at Arms'}
            ],
            otherEmployee: '9',
            endEmployee: {
                id: '1',
                name: 'Belinda',
                phone: '4824931093',
                title: 'Master at Arms'
            }
        },
        //Case 7
        {
            startEmployee: {
                id: '10',
                name: 'Lois Brewer',
                phone: '8749823456',
                title: 'Sales Manager'
            },
            changes: [
                { fieldName: 'Name', value: 'Lois Lane' },
                { fieldName: 'Phone Number', value: '3456789012' },
                { fieldName: 'Title', value: 'Love Interest' }
            ],
            otherEmployee: '1',
            endEmployee: {
                id: '10',
                name: 'Lois Lane',
                phone: '3456789012',
                title: 'Love Interest'
            }
        }
    ],
    cancelTests: [
        //Case 8
        {
            employee: {
                id: '10',
                name: 'Lois Lane',
                phone: '3456789012',
                title: 'Love Interest'
            },
            changes: [
                { fieldName: 'Name', value: 'Lois Brewer' }
            ],
            otherEmployee: '3'
        },
        //Case 9
        {
            employee: {
                id: '5',
                name: 'Person of Interest',
                phone: '2345678901',
                title: 'ABCD'
            },
            changes: [
                { fieldName: 'Phone Number', value: '8529637410' }
            ],
            otherEmployee: '9'
        },
        //Case 10
        {
            employee: {
                id: '8',
                name: 'Louis Whitmore',
                phone: '1234567890',
                title: 'Full-Stack Developer'
            },
            changes: [
                { fieldName: 'Title', value: 'Billy Bob' }
            ],
            otherEmployee: '4'
        }
    ]
}


/* Save Test Template:
    {
        startEmployee: {
            id: '',
            name: '',
            phone: '',
            title: ''
        },
        changes: [
            {fieldName: '', value: ''}
        ],
        otherEmployee: '',
        endEmployee: {
            id: '',
            name: '',
            phone: '',
            title: ''
        }
    }
*/

/* Cancel Test Template:
    {
        employee: {
            id: '',
            name: '',
            phone: '',
            title: ''
        },
        changes: [
            {fieldName: '', value: ''}
        ],
        otherEmployee: ''
    }
*/