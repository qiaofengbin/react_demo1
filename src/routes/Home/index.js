import React, { Component } from 'react'
import { Carousel } from 'antd';
import './style.css'
class Home extends Component {
    state = {
        Pic: ['http://pic1.win4000.com/pic/f/2a/d43d1b99a6.jpg','http://pic1.win4000.com/pic/6/62/a542231ac0.jpg', 'http://pic1.win4000.com/pic/1/45/8bdc144694.jpg', 'http://pic1.win4000.com/pic/1/ac/8eae2c1f28.jpg', 'http://pic1.win4000.com/pic/f/a8/7834a0c3db.jpg']
    }
    render() {
        return (
            <div className="home_page">
                <Carousel effect="fade" autoplay>
                    {
                        this.state.Pic && this.state.Pic.map((item, index) => {
                            return (
                                <img src={item} alt="" key={index} />
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
}
export default Home;