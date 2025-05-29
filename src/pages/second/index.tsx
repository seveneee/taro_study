// src/pages/home/index.tsx
import { View, Text, Image } from '@tarojs/components'
import './index.less'

const Home = () => {
  return (
    <View className="home-page">
      {/* 左侧导航栏 */}
      <View className="sidebar">
        <View className="logo-section">
          <Text className="logo">AI办公室</Text>
        </View>
        <View className="menu">
          <View className="menu-item active">🏠 首页</View>
          <View className="menu-item">📄 项目档案</View>
          <View className="menu-item">📊 任务管理</View>
          <View className="menu-item">🔍 案例检索</View>
          <View className="menu-item">🤖 AI工具箱</View>
        </View>
        <View className="sidebar-footer">
          <Image src="https://yourcdn.com/robot.png" className="robot-icon" />
        </View>
      </View>

      {/* 主内容区 */}
      <View className="main-content">
        {/* 顶部导航栏 */}
        <View className="navbar">
          <Text className="page-title">首页</Text>
          <View className="search-user">
            <View className="search-box">🔍 请输入搜索内容</View>
            <View className="user-avatar">🙋‍♂️ 管理</View>
          </View>
        </View>

        {/* 标题区 */}
        <Text className="main-heading">标题 标语 标志</Text>

        {/* 卡片区 */}
        <View className="card-row">
          <View className="feature-card blue">
            <Image src="https://yourcdn.com/card1.png" className="card-img" />
            <Text className="card-title">标题名称XXXX</Text>
            <Text className="card-desc">介绍xxxxxxxxxxxx</Text>
          </View>
          <View className="feature-card purple">
            <Image src="https://yourcdn.com/card2.png" className="card-img" />
            <Text className="card-title">标题名称XXXX</Text>
            <Text className="card-desc">介绍xxxxxxxxxxxx</Text>
          </View>
        </View>

        {/* 信息区 */}
        <View className="info-row">
          {[1, 2, 3].map(i => (
            <View className="info-card" key={i}>
              <Text className="info-title">标题</Text>
              <View className="info-line"></View>
              <View className="info-line short"></View>
              <View className="info-line"></View>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

export default Home
