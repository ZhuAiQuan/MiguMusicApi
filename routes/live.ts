/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-02 16:08:00
 * @LastEditTime: 2022-04-02 16:10:49
 * @LastEditors: zaq
 * @Reference: 
 */
module.exports = {
  async ['/banner']({res, request}) {
    const result = await request.send('https://m.music.migu.cn/migumusic/h5/mv/banner');
    res.send({
      result: 200,
      data: result
    })
  },
  async ['/recomment']({res, request}) {
    const result = await request.send('https://m.music.migu.cn/migumusic/h5/mv/recomment');
    res.send({
      result: 200,
      data: result
    })
  }
}