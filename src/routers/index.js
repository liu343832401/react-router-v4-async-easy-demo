/**
 * @description: route config
 *
 * @author: nick
 *
 * @create: 2018-12-30 15:31
 **/
export default [
  /**首页**/
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "view/home/home" */ '../views/home/Home'),
    routes: [
      {
        path: '/home/index',
        exact: true, //叶子节点需设置此参数 全路径匹配
        component: () => import(/* webpackChunkName: "view/home/child/index" */ '../views/home/child/Index')
      },
      {
        path: '/home/s1',
        exact: true,
        component: () => import(/* webpackChunkName: "view/home/child/s1" */ '../views/home/child/Stage1')
      },
      {
        path: '/home/s2',
        exact: true,
        component: () => import(/* webpackChunkName: "view/home/child/s2" */ '../views/home/child/Stage2')
      },
      {
        path: '/home/s3',
        exact: true,
        component: () => import(/* webpackChunkName: "view/home/child/s3" */ '../views/home/child/Stage3')
      }
    ]
  }
]