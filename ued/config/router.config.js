export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { path: '/', redirect: '/contract/list', authority: ['admin', 'user'] },
      {
        path: '/contract/list',
        name: 'contract',
        icon: 'dashboard',
        component: './Contract',
      },
      {
        path: '/contract/add',
        icon: 'dashboard',
        component: './Contract/AddOrEdit',
      },
      {
        path: '/contract/edit/:id',
        icon: 'dashboard',
        component: './Contract/AddOrEdit',
      },
      {
        component: '404',
      },
    ],
  },
];
