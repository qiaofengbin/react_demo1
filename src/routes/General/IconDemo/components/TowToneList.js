import React, { Component } from 'react'
import {Card,Icon} from 'antd'
const gridStyle = {
    width: '20%',
    textAlign: 'center',
};
const card_item = {
    marginTop:'20px'
}


class TowToneList extends Component{
    render(){
        let filterText=this.props.filterText;
        return(
            <div>
                 {
                    this.props.list && this.props.list.map((item, index) => {
                        return (
                            <Card title={item.title} key={index} bordered={false} style={card_item} >
                                {
                                   item.list.map((icon, index) => {
                                        if(icon.toLowerCase().indexOf(filterText)!=-1){
                                            return (
                                                <Card.Grid style={gridStyle} key={index}>
                                                    <Icon type={icon} style={{fontSize:'22px'}} theme={item.theme}/>
                                                    <span style={{display:'block'}}>{icon}</span>
                                                </Card.Grid>
                                            )
                                        }
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
export default TowToneList;