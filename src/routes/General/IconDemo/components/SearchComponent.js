import React, { Component } from 'react'
import { Input } from 'antd';

class SearchComponent extends Component {
    // onKeyUp(e) {
    //     const icons = this.props.icons;
    //     console.log(icons);
    //     const value = e.target.value;
    //     const arr = [];
    //     if (e.which === 13) {
    //         icons.map((item, index) => {
    //             arr.push(item.list.filter((ftem, fndex) => {
    //                 return ftem.toLowerCase().indexOf(value)!=-1;
    //             }))
    //         })
    //     } else {
    //         arr.push(icons);
    //     }
    //     this.setState({
    //         icons:arr
    //     },()=>{
    //         console.log(this.state.icons);
    //         this.props.childs(this.state.icons);
    //     })
       
        
    // }
    handleChange(e){
        e.preventDefault();
        console.log(e.target.inputText)
        let inputText=this.refs.inputText.value;
        
        this.props.onSearch(inputText);
    }
    render() {

        return (
            <div style={{ marginLeft: '100px', flex: ' 1 1 0%' }}>
                <input placeholder="input with clear icon" ref='inputText' onChange={this.handleChange.bind(this)}  style={{ height: '40px' }} value={this.props.filterText} />
            </div>
        )
    }
}
export default SearchComponent;