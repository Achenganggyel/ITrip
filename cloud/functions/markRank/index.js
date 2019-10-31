const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();
const markCollection = db.collection('mark');



exports.main = async (event) => {
  const { OPENID } = cloud.getWXContext();
  const {sceneId} = event;
  try {
    const count = (await markCollection.where({
      sceneId: sceneId
    }).count());

    return count;
   
  }catch (e) {
    console.log(e);
    return {
      code: 500,
      message: "服务器错误",
    }
  }
}
