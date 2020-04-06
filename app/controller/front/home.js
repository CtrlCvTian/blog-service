'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index () {
    const { ctx } = this;
    const result = await ctx.service.front.home.index();
    ctx.body = result;
  }

  async getActicleList () {
    const { ctx } = this;
    const result = await ctx.service.front.home.getActicleData();
    ctx.body = result;
  }
  async getActicleDetail () {
    const { ctx } = this;
    const id = this.ctx.params.id;
    const result = await ctx.service.front.home.getActicleDetail(id);
    ctx.body = result;
  }
  async getTypeInfo () {
    const { ctx } = this;
    const result = await ctx.service.front.home.getTypeInfo();
    ctx.body = result;
  }
}

module.exports = HomeController;
