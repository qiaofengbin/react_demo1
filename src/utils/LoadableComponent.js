import React from 'react'
import Loadable from 'react-loadable' // 实现组件分割  是一款可以轻松分割组件级 bundle 的高阶组件
import NProgress from 'nprogress' // 页面加载进度条
import 'nprogress/nprogress.css'  //这个样式必须引入

class LoadingPage extends React.Component {
    //类似github页面加载的那个加载条
    componentWillMount(){
      NProgress.start()
    }
    componentWillUnmount(){
      NProgress.done()
    }
    render () {
      return (
        <div/>
      )
    }
  }
  
  const LoadableComponent = (component) => {
    return Loadable({
      loader: component,
      loading: ()=><LoadingPage/>
    })
  }
  
  export default LoadableComponent