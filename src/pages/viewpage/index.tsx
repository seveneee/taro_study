import { Component} from 'react'
//导入taro组件库
import { View, Text, Navigator} from '@tarojs/components'
//状态管理
import { observer, inject } from 'mobx-react'

//导入taro
import taro from '@tarojs/taro'
import './index.less'
import'./index.less'



@inject('store')
@observer
class Index extends Component {

  render () {

    return(
      <View className='index'>
        <view className='square'></view>

      </View>
    )
  }
}

export default Index
