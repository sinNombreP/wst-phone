import ajax from './fetch';
import md5 from 'js-md5';
import {imgUpload} from "@/utils/common"

//登录
export const login = (phone, passWord) => ajax( process.env.VUE_APP_PROXY_API +'/forlogin/login', {
                phone: phone,
                passWord: md5(passWord)
});
//注册
export const register = (type,mobile,email,smsCode,passWord,area,) => ajax( process.env.VUE_APP_PROXY_API +'/forlogin/register', {
    createType:type,//
    phone:mobile,//手机号码
    email:email,//邮箱号码
    area:area,//区域
    smsCode:smsCode,//验证码
    version:1,//写死1普通用户2旅游社
    passWord: md5(passWord),
    category: 1,
    source:3,
});
//邮箱和短信
export const sendSms = (mobile,email,type,area)=> ajax( process.env.VUE_APP_PROXY_API +'/forlogin/sendSms',{
    mobile:mobile,
    email:email,
    category:type,
    sendType:type,
    category:type,
    area:89,
    type:1,
    source:1,
    area:area,
});
//找回密码
export const fordet = (type,moib,smsCo,passWord)=> ajax('api/forlogin/updatePassword',{
    findType:type,//判断1是手机2是邮箱
    mobile:moib,//账号
    smsCode:smsCo,//验证码
    category:3,
    source:1,
    newPassword: md5(passWord),
});
//首页

//绑定手机或邮箱
export const bind = (type,mobile,email,smsCode,passWord,area,) => ajax( process.env.VUE_APP_PROXY_API +'/forlogin/bindNew', {
    createType:type,//
    phone:mobile,//手机号码
    email:email,//邮箱号码
    area:area,//区域
    smsCode:smsCode,//验证码
    version:1,//写死1普通用户2旅游社
    passWord: md5(passWord),
    category: 1,
    source:3,
});
//获取自定标签
export const zhiding =(routeType) => ajax( process.env.VUE_APP_PROXY_API +'/common/getLabel',{
    routeType:routeType,
})
//常规路线搜索接口
export const seledin = (date,tagContent,daysty,srtype,minPrice,maxPrice,scenicSpotid, pageNo) => ajax( process.env.VUE_APP_PROXY_API +'/route/selectRoute', {
    date:date,//日期
    day:daysty,//天数
    minPrice:minPrice,//最小价格
    maxPrice:maxPrice,//最大价格
    orderByType:srtype,//1.销量2.价格降序3.价格升序4好评
    scenic:scenicSpotid,//景点Id
    labelAttrid:tagContent,//属性
    pageNo: pageNo,
},'post');
//当地参团搜索接口
export const selectttpy = (date,tagContent,daysty,srtype,minPrice,maxPrice,scenicSpotid, pageNo) => ajax( process.env.VUE_APP_PROXY_API +'/route/selectCityRoute', {
    date:date,//日期
    day:daysty,//天数
    minPrice:minPrice,//最小价格
    maxPrice:maxPrice,//最大价格
    orderByType:srtype,//1.销量2.价格降序3.价格升序4好评
    scenic:scenicSpotid,//景点Id
    labelAttrid:tagContent,//属性
    pageNo: pageNo,
},'post');
//当地玩家
export const wanjia = (guideAge,guideSex,shuxin,minPrice,maxPrice,pageNo) => ajax( process.env.VUE_APP_PROXY_API +'/guide/guideScreen',{
    guideAge:guideAge,//年龄
    guideSex:guideSex,//性别
    minPrice:minPrice,//低价
    maxPrice:maxPrice,//高价
    tagId:shuxin,//制订标签属性
    pageNo: pageNo,
});
//油轮接口
export const youlun = (date,tagContent,daysty,srtype,minPrice,maxPrice,scenicSpotid,startCity,hangxianty,pageNo) => ajax( process.env.VUE_APP_PROXY_API +'/cruise/cruiseScreen', {
    date:date,//日期
    day:daysty,//天数
    minPrice:minPrice,//最小价格
    maxPrice:maxPrice,//最大价格
    orderByType:srtype,//1.销量2.价格降序3.价格升序4好评
    scenic:scenicSpotid,//景点Id
    labelAttrid:tagContent,//属性
    startCity:startCity,//出发城市ID
    route:hangxianty,//航线ID
    pageNo: pageNo,
},'post');
//景点接口
export const jingdian = (cityid,tagContent,srtype,pageNo) => ajax( process.env.VUE_APP_PROXY_API +'/scenic/selectScenicList',{
    cityid:cityid,//城市ID
    orderByType:srtype,//1.销量2.价格降序3.价格升序4好评
    labelAttrid:tagContent,//属性ID
    pageNo: pageNo,
});
//景点选择城市接口/根据语言获取城市和城市景点数量接口
export const jdchengshi = () => ajax( process.env.VUE_APP_PROXY_API +'/scenic/getCityScenicNum',{

});
//获取邮轮航线接口
export const gankou = () => ajax( process.env.VUE_APP_PROXY_API +'/cruise/getCourse',{
  
});
//根据语言获取出发城市接口
export const chengshi = () => ajax( process.env.VUE_APP_PROXY_API +'/common/getCityList',{

});
//获取途径 景点
export const  getScenicByCity = () => ajax( process.env.VUE_APP_PROXY_API +'/common/getScenicByCity',{
    cityid:1,//城市ID
});
//获取首页导航栏
export const getComNavigation = () =>ajax( process.env.VUE_APP_PROXY_API +'/common/getComNavigation',{
})
//获取热门城市
export const HotCityList = () =>ajax( process.env.VUE_APP_PROXY_API +'/common/getHotCity',{
})
//获取语言
export const getLanguage = () =>ajax( process.env.VUE_APP_PROXY_API +'/common/getLanguage',{
})
//获取货币
export const getCurrency = () =>ajax( process.env.VUE_APP_PROXY_API +'/common/getCurrency',{
})
//获取基本参数
export const getProtocol = () =>ajax( process.env.VUE_APP_PROXY_API +'/common/getProtocol',{
})
//获取个人（旅行社）信息/个人质料
export const Material = () =>ajax( process.env.VUE_APP_PROXY_API +'/member/myInfor',{
})
//获得个人消息
export const xiaoxi = (pageNo) =>ajax( process.env.VUE_APP_PROXY_API +'/member/getCompush',{
    pageNo:pageNo
})
//获得个人评论消息
export const pinglun = (pageNo) =>ajax( process.env.VUE_APP_PROXY_API +'/member/getComment',{
    pageNo:pageNo
})
//图片上传
export const imgUp = () => imgUpload( process.env.VUE_APP_PROXY_API +'/common/imgUpload',{

})
//修改个人（旅行社）信息
export const xuigai = (memberType,photo,nickName,phone,countryid,cityid,address,birthday,sex) =>ajax( process.env.VUE_APP_PROXY_API +'/member/updateMy',{
    memberType:memberType,
    photo:photo,//头像
    nickName:nickName,//昵称
    phone:phone,//手机号
    countryid:countryid,//国家ID
    cityid:cityid,//城市ID
    address:address,//详细地址
    birthday:birthday,//生日
    sex:sex,//性别
})
//我的收藏——常规路线
export const changui = (collectionType,pageNo) =>ajax( process.env.VUE_APP_PROXY_API +'/member/myCollection',{
    collectionType:collectionType,
    pageNo:pageNo
})
//取消收藏接口
export const quxiao = (collectionids) =>ajax( process.env.VUE_APP_PROXY_API +'/member/deleteCollection',{
    collectionids:collectionids
})
//我的草稿
export const caogao = (pageNo) =>ajax( process.env.VUE_APP_PROXY_API +'/member/myDraft',{
    pageNo:pageNo
})
//我的草稿
export const shancaogao = (collectionids) =>ajax( process.env.VUE_APP_PROXY_API +'/member/deleteDraft',{
    ids:collectionids,
})
//获取常用联系人接口
export const lianxir = () =>ajax( process.env.VUE_APP_PROXY_API +'/common/getMemberContacts',{
})
//删除联系人接口
export const shangchulianx = (contactid) =>ajax( process.env.VUE_APP_PROXY_API +'/member/deleteMemberContact',{
    contactid:contactid,
})
//添加/修改常用联系人接口
export const tianjialianx = (chineseName,englishName,certType,certNo,certValidDate,birthday,area,mobile,contactid) =>ajax( process.env.VUE_APP_PROXY_API +'/member/addMemberContact',{
    chineseName:chineseName,//中名字
    englishName:englishName,//英名字
    certType:certType,//证件类型
    certNo:certNo,//证件号
    certValidDate:certValidDate,//证件有效期
    birthday:birthday,//出生日期
    area:area,//手机区域
    mobile:mobile,//手机号码
    contactid:contactid,
})
//关于我们接口
export const guanyusty = () =>ajax( process.env.VUE_APP_PROXY_API +'/member/getArticle',{
})
//根据语言获取国家城市接口
export const Country = () =>ajax( process.env.VUE_APP_PROXY_API +'/member/getCountryCity',{
    
})
//常规路线详情接口
export const getRouteDetailstyp = (routeid) =>ajax( process.env.VUE_APP_PROXY_API +'/route/getRouteDetails',{
    routeid:routeid,
    
})
//常规路线/参团行程内容接口
export const getRouteContpy = (routeid) =>ajax( process.env.VUE_APP_PROXY_API +'/route/getRouteContent',{  
    routeid:routeid,
})
//评价
export const selectCommentUrl = (pageNo,routeid,proType) =>ajax(process.env.VUE_APP_PROXY_API +'/common/selectComment',{  
    pageNo:pageNo,
    typeid:routeid,
    proType:proType,
})
//用户资讯
export const getConsultUrl = (pageNo,routeid,proType) =>ajax( process.env.VUE_APP_PROXY_API +'/common/getConsult',{  
    pageNo:pageNo,
    typeid:routeid,
    proType:proType,
})
//收藏接口
export const saveCollectionUrl =(routeid,collectionType) =>ajax( process.env.VUE_APP_PROXY_API +'/common/saveCollection',{
    typeid:routeid,
    collectionType:collectionType,
})
//取消收藏
export const deleteCollectionUrl =(routeid) =>ajax( process.env.VUE_APP_PROXY_API +'/member/deleteCollection',{
    collectionids:routeid,
})
//添加用户咨询接口
export const saveConsultUrl = (routeid,proType,content,name,mobile) =>ajax (process.env.VUE_APP_PROXY_API + '/common/saveConsult',{
    typeid:routeid,
    proType:proType,
    content:content,
    name:name,
    mobile:mobile
})