export default  [
    {
        path: '/posts',
        name: 'Post',
        component: () => import('../../views/posts/Post'),
    },
    {
        path: '/posts/add',
        name: 'AddPost',
        component: () => import('../../views/posts/AddPost'),
    },
    {
        path: '/posts/edit/:id',
        name: 'EditPost',
        component: () => import('../../views/posts/EditPost'),
    },
]