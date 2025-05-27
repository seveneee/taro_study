import { Component} from 'react'
//导入taro组件库
import { View, Text, Navigator} from '@tarojs/components'
//状态管理
import { observer, inject } from 'mobx-react'

//导入taro
import taro from '@tarojs/taro'


@inject('store')
@observer
class Index extends Component {

  render () {
    console.log(this.props)
  let {store:{hahaStore}} = this.props
    let unsername = this.props.store.hahaStore.username

    const  msg = 'helle world haha!'

    const goIndex = () => {
      taro.navigateTo({
        //navigateTo 实现页面跳转
            url: '/pages/index/index'    
        })
    }
    return(
      <View className='index'>
        <Text>unsername:{unsername}</Text>
        <Text>{msg}</Text>
        <button onClick={()=>{hahaStore.changeName('curie')}}>点击修改名字</button>

        <button onClick={goIndex}>点击跳转至首页</button>
        <Navigator url="/pages/index/index">点击跳转至首页2</Navigator>

      </View>
    )
  }
}

export default Index
