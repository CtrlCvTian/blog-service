'use strict';
// 前台的路由配置文件
module.exports = app => {
  const { router, controller } = app;
  router.get('/front/index', controller.front.home.index);
  router.get('/front/getActicleList', controller.front.home.getActicleList);
  router.get('/front/getActicleDetail/:id', controller.front.home.getActicleDetail);
  router.get('/front/getTypeInfo', controller.front.home.getTypeInfo);
};
