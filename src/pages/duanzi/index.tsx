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
    componentDidMount() {
        let {store} :any = this.props;
        let duanziStore = store.duanziStore;
        duanziStore.getDzList()
    }
  render () {
    let {store} :any = this.props;
    let duanziStore = store.duanziStore
    console.log(duanziStore)
    return(
      <View className='index'>
        {
          duanziStore.dzList.map((item,i)=>{
              return (<view>{item.text}</view>)
        })
      }
      </View>
    )
  }
}

export default Index
