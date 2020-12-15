module.exports = {
    links: { create: `/admin/users/create`, read: `/admin/users` },
    userTypes: [
        { label: `All Type`, value: `*` },
        { label: `Admin`, value: 9 },
        { label: `Manager`, value: 8 },
        { label: `Author`, value: 7 },
        { label: `Editor`, value: 6 },
        { label: `User`, value: 1 }
    ],
    perPageItems: [{
            label: 'Default',
            value: '*'
        },
        {
            label: 5,
            value: 5
        },
        {
            label: 10,
            value: 10
        },
        {
            label: 25,
            value: 25
        },
        {
            label: 50,
            value: 50
        },
        {
            label: 100,
            value: 100
        },
        {
            label: 250,
            value: 250
        },
        {
            label: 500,
            value: 500
        }
    ]
}
