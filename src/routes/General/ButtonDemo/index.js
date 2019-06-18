import React, { Component } from 'react'
import { Row, Col, Button, Card, Radio, Icon, Menu, Dropdown, } from 'antd';
import BreadCrumb from '../../../components/Breadcrumb'
import TypingCard from '../../../components/TypingCard'
import './style.css'

class ButtonDemo extends Component {
      state = {
            size: 'default',
            loading: false,
            iconLoading: false,
      };
      handleSizeChange = e => {
            this.setState({ size: e.target.value });
      };
      enterLoading = () => {
            this.setState({ loading: true });
      };

      enterIconLoading = () => {
            this.setState({ iconLoading: true });
      };
      handleMenuClick = (e) => {
            console.log('click', e);
      }
      render() {
            const cardContent = `最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。`
            const size = this.state.size;
            const menu = (
                  <Menu onClick={this.handleMenuClick}>
                        <Menu.Item key="1">1st item</Menu.Item>
                        <Menu.Item key="2">2nd item</Menu.Item>
                        <Menu.Item key="3">3rd item</Menu.Item>
                  </Menu>
            );

            return (
                  <div className="button_page">
                        <BreadCrumb arr={['基本', '按钮']} />
                        <TypingCard source={cardContent} />
                        <div style={{ marginTop: '20px' }}>
                              <Row type="flex" justify="space-between">
                                    <Col span={9}>
                                          <Card bordered={false} >
                                                <p>
                                                      <Button type="primary">Primary</Button>&nbsp;&nbsp;
                                    <Button>Default</Button>&nbsp;&nbsp;
                                    <Button type="dashed">Dashed</Button>&nbsp;&nbsp;
                                    <Button type="danger">Danger</Button>&nbsp;&nbsp;
                                </p>
                                          </Card>
                                          <Card bordered={false} style={{ borderTop: '10px solid #f0f2f5' }}>
                                                <div>
                                                      <Radio.Group value={size} onChange={this.handleSizeChange}>
                                                            <Radio.Button value="large">Large</Radio.Button>
                                                            <Radio.Button value="default">Default</Radio.Button>
                                                            <Radio.Button value="small">Small</Radio.Button>
                                                      </Radio.Group>
                                                      <br />
                                                      <br />
                                                      <Button type="primary" size={size}>Primary</Button>&nbsp;&nbsp;
                                                      <Button size={size}>Normal</Button>&nbsp;&nbsp;
                                                      <Button type="dashed" size={size}>Dashed</Button>&nbsp;&nbsp;
                                                      <Button type="danger" size={size}>danger</Button>
                                                      <br />
                                                      <br />
                                                      <Button type="primary" shape="circle" icon="download" size={size} ></Button>&nbsp;&nbsp;
                                                      <Button type="primary" shape="round" icon="download" size={size}>Download</Button>&nbsp;&nbsp;
                                                      <Button type="primary" icon="download" size={size}>Download</Button>
                                                      <br />
                                                      <br />
                                                      <Button.Group size={size}>
                                                            <Button type="primary">
                                                                  <Icon type="left" />Backward</Button>
                                                            <Button type="primary">
                                                                  Forward<Icon type="right" />
                                                            </Button>
                                                      </Button.Group>
                                                </div>
                                          </Card>
                                    </Col>
                                    <Col span={14}>
                                          <Card bordered={false}>
                                                <div>
                                                      <Button type="primary" loading>
                                                            Loading
                                                       </Button>&nbsp;&nbsp;
                                                      <Button type="primary" size="small" loading>
                                                            Loading
                                                       </Button>&nbsp;&nbsp;
                                                      <br />
                                                      <br />
                                                      <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                                                            Click me!
                                                      </Button>&nbsp;&nbsp;
                                                      <Button
                                                            type="primary"
                                                            icon="poweroff"
                                                            loading={this.state.iconLoading}
                                                            onClick={this.enterIconLoading}
                                                      >Click me!</Button>
                                                      <br />
                                                      <br />
                                                      <Button shape="circle" loading />&nbsp;&nbsp;
                                                      <Button type="primary" shape="circle" loading />
                                                </div>
                                          </Card>
                                          <Card bordered={false} style={{borderTop:'10px solid #f0f2f5'}}>
                                                <div>
                                                      <Button type="primary">primary</Button>
                                                      <Button>secondary</Button>
                                                      <Dropdown overlay={menu}>
                                                            <Button>
                                                                  Actions <Icon type="down" />
                                                            </Button>
                                                      </Dropdown>
                                                </div>
                                          </Card>
                                    </Col>
                              </Row>
                        </div>
                  </div>
            )
      }
}
export default ButtonDemo;




