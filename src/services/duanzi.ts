import Taro from "@tarojs/taro";


export function getDzList(){
    let httpUrl = 'https://api.apiopen.top/getJoke?page=1&count=10&type=text';
    return Taro.request({url:httpUrl})
}