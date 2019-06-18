import React, { Component } from 'react'
import { Card, Icon } from 'antd'
import SearchComponent from './SearchComponent'
import TowToneList from './TowToneList'

class TowToneComponent extends Component{
    state={
        icons :[
            {
                title:'方向性图标',
                theme:'twoTone',
                list:['up-circle','down-circle','left-circle','right-circle','play-circle','up-square','down-square','left-square','right-square']
            },
            {
                title:'提示建议性图标',
                theme:'twoTone',
                list:['question-circle','plus-circle','pause-circle','minus-circle','plus-square','minus-square','info-circle','exclamation-circle','close-square','check-circle','check-square','clock-circle','warning','stop']
            },
            {
                title:'编辑类图标',
                theme:'twoTone',
                list:['edit','copy','delete','snippets','diff','highlight']
            },
            {
                title:'数据类图表',
                theme:'twoTone',
                list:['pie-chart','box-plot','fund','sliders']
            },
            {
                title:'品牌和标识',
                theme:'twoTone',
                list:['html5']
            },
            {
                title:'网站通用图标',
                theme:'twoTone',
                list:['alert','account-book','api','appstore','audio','bank','bell','book','build','bulb','calculator','calendar','camera','car','carry-out','cloud','code','compass','contacts','container','control','credit-card','crown','dashboard','database','environment','experiment','eye','file-add','file-excel','file-ppt','file-text','file-pdf','file-image','file-unknown','file-word','file-zip','file','filter','fire','flag','folder','frown','gift','hdd','heart','home','hourglass','layout','like','lock','meh','usb','tool','skin','tag','tags']
            }
        ],
        filterText: ''
    }
  
    // childs=(txt)=>{
    //    this.setState({
    //        itemArr:txt
    //    })
    // }
    handleSearch(keywods){
        console.log(keywods);
        this.setState({
            filterText:keywods
        });
    }
    render(){
        const {icons,filterText} = this.state
        return(
            <div>
                <SearchComponent list={icons} filterText={filterText}  onSearch={this.handleSearch.bind(this)}/>
                <TowToneList filterText={filterText}  list={icons}/>
                
            </div>
          
        )
    }
}
export default TowToneComponent;