'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async index () {
    const result = await this.app.mysql.get('blog_content', {});
    return result;
  }

  async getActicleData () {
    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.add_time as addTime,' +
      'article.view_count as viewCount ,' +
      'blog_type.typeName as typeName ' +
      'FROM article LEFT JOIN blog_type ON article.type_id = blog_type.Id';
    const result = await this.app.mysql.query(sql);

    return result;
  }
}

module.exports = HomeService;
