/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-02 15:37:49
 * @LastEditTime: 2022-04-02 16:04:17
 * @LastEditors: zaq
 * @Reference: 
 */
module.exports = {
  // 排行榜榜单
  async ['/']({req, res, request}) {
    const result = await request.send('https://m.music.migu.cn/migumusic/h5/billboard/tree');
    res.send({
      result: 200,
      data: result
    })
  },
  // 排行榜数据
  async ['/billboard']({req, res, request}) {
    const {pathName, pageNum, pageSize} = req.query;
    const result = await request.send(`https://m.music.migu.cn/migumusic/h5/billboard/home?pathName=${pathName}&pageNum=${pageNum}&pageSize=${pageSize}`);
    res.send({
      result: 200,
      data: result
    })
  }
}