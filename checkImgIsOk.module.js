/**
 * memo的应用场景：
 * 1.实现异步功能
 * 2.需要一些时间的操作，都可以用到记忆的技巧，加快进程
 * 
 * 给对象添加属性方法原则：
 * 先添加方法，再添加属性
 * 原因：对象在拿到src属性是就会触发异步任务，防止，后续添加的方法无法正常触发
 */
const memo = {};

/**
 *
 * @param {*} imgSrc====>图片的url
 * @param {*} param1====>是否开启记忆功能
 * @returns 
 */
function checkImgIsOk(imgSrc, { useMemo = true } = {}) {
  return new Promise((resolve, reject) => {
    if (useMemo) {
      if (typeof memo[imgSrc] === Boolean) {
        // do .....   
        return;
      }
    }
    let img = new Image();
    img.onload = () => {
      resolve(true);
      if (useMemo) {
        memo[imgSrc] = true;
      }
    };

    img.onerror = () => {
      resolve(false);
      if (useMemo) {
        memo[imgSrc] = false;
      }
    };

    img.src = imgSrc;
    // 给对象添加属性
    // run..
  });
}



export default checkImgIsOk;
