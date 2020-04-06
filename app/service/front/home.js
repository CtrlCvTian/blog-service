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

  async getActicleDetail (id) {
    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      'article.add_time as addTime,' +
      'article.view_count as view_count ,' +
      'blog_type.typeName as typeName ,' +
      'blog_type.id as typeId ' +
      'FROM article LEFT JOIN blog_type ON article.type_id = blog_type.Id ' +
      'WHERE article.id=' + id;
    const result = await this.app.mysql.query(sql);
    return result;
  }

  // 得到类别名称和编号
  async getTypeInfo () {
    const result = await this.app.mysql.select('blog_type');
    return result;
  }
}

module.exports = HomeService;
