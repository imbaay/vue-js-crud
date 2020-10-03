export default  [
    {
        path: '/users',
        name: 'User',
        component: () => import('../../views/users/User'),
    },
    {
        path: '/users/add',
        name: 'AddUser',
        component: () => import('../../views/users/AddUser'),
    },
    {
        path: '/users/edit/:id',
        name: 'EditUser',
        component: () => import('../../views/users/EditUser'),
    },
]