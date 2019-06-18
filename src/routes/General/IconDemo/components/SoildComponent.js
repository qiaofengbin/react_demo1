import React, { Component } from 'react'
import { Card, Icon } from 'antd'

const icons = [
    {
        title:'方向性图标',
        theme:'filled',
        list:['step-backward','step-forward','fast-backward','fast-forward','caret-up','caret-down','caret-left','caret-right','up-circle','down-circle','left-circle','right-circle','forward','backward','play-circle','up-square','down-square','left-square','right-square']
    },
    {
        title:'提示建议性图标',
        theme:'filled',
        list:['question-circle','plus-circle','pause-circle','minus-circle','plus-square','minus-square','info-circle','exclamation-circle','close-circle','close-square','check-circle','check-square','stop','warning']
    },
    {
        title:'编辑类图标',
        theme:'filled',
        list:['edit','copy','delete','snippets','diff','highlight']
    },
    {
        title:'数据类图标',
        theme:'filled',
        list:['pie-chart','box-plot','fund','sliders']
    },
    {
        title:'品牌和标识',
        theme:'filled',
        list:['android','apple','windows','chrome','github','aliwangwang','weibo-square','weibo-circle','taobao-circle','html5','wechat','youtube','alipay-circle','skype','gitlab','linkedin','facebook','codepen-cirecle','slack-square','behance-square','yuque','yahoo']
    },
    {
        title:'网站通用图标',
        theme:'filled',
        list:['alert','account-book','alipay-square','amazon-circle','api','appstore','audio','bank','behance-circle','bell','book','build','bulb','calculator','calendar','camera','car','carry-out','ci-circle','cloud','code-sandbox-square','code','compass','contacts','container','control','credit-card','crown','dashboard','database','dingtalk-circle','dingtalk-square','environment','experiment','eye','file-add','file-excel','file-ppt','file-text','file-pdf','file-image','file-unknown','file-word','file-zip','file','filter','fire','flag','folder','frown','gift','golden','hdd','heart','home','hourglass','layout','like','lock','meh','usb','tool','skin','tag','tags']
    }
]
const gridStyle = {
    width: '20%',
    textAlign: 'center',
};
const card_item = {
    marginTop:'20px'
}


class SoildComponent extends Component{
    render(){
        return(
            <div>
                {
                    icons && icons.map((item, index) => {
                        return (
                            <Card title={item.title} key={index} bordered={false} style={card_item} >
                                {
                                    item.list.map((icon, index) => {
                                        return (
                                            <Card.Grid style={gridStyle} key={index}>
                                                <Icon type={icon} style={{fontSize:'22px'}} theme={item.theme}/>
                                                <span style={{display:'block'}}>{icon}</span>
                                            </Card.Grid>
                                        )
                                    })
                                }
                            </Card>
                        )
                    })
                }
            </div>
          
        )
    }
}
export default SoildComponent;