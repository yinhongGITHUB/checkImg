import checkImgIsOk from './checkImgIsOk.module.js';


// ==================================== 你同事

// 第一个场景：他要检测500个图片
// let url = "http://moderation.oss-cn-shanghai.aliyuncs.com/img/view/id/1663484331?x-oss-process=image/resize,m_fixed,h_196,w_196"
// for(let i=0;i<500;i++){
//     if(i===50) url = "http://tbfile.ixiaochuan.cn/img/view/id/1642589288"
//     checkImgIsOk(url).then(value => {
//         console.log(value);
//     });
// }

// checkImgIsOk("http://tbfile.ixiaochuan.cn/img/view/id/1642589288").catch(error =>{
//     console.log(error);
// })

// 第个场景，他希望写成同步写法

async function check(src){
    // do...
    let ret1 = await checkImgIsOk(src);

    if (ret1) {
        // d...
    } else{
        // ....
    }
    let ret2 = await checkImgIsOk("http://tbfile.ixiaochuan.cn/img/view/id/1642589288");
    
    console.log("外面引入库1",ret1);
    console.log("外面引入库2",ret2);
    // doo.
}
check("http://moderation.oss-cn-shanghai.aliyuncs.com/img/view/id/1663484331?x-oss-process=image/resize,m_fixed,h_196,w_196")

