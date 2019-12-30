import React from 'react';
// 首先在同级目录里面找，没有的话去node_modules 模块里面找

import { Row,Col } from 'antd';
// {}的写法，是对象的解构，Row是antd组件里面的一个

import Header from './components/Header';
//为什么不from './components/Header/index',写到文件夹这一层，默认找index.js


import Footer from './components/Footer';

import NavLeft from './components/NavLeft';


import './style/common.less';



//组件
// class Admin 实际为Object{}
//要使用 React 生命周期方法，必须继承 React.Component
export default class Admin extends React.Component {
    render(){
        return (
            //div为根节点，只能有一个root节点
            <div>
                <Row className="container">
                    <Col span='4' className="nav-left">
                        <NavLeft/>
                    </Col>
                    <Col span='20' className="main">
                        <Header/>
                        <Row className="content">
                            {this.props.children}
                            {/*<Home/>*/}
                        </Row>
                        <Footer/>
                    </Col>
                </Row>
            </div>
        );
    }
}
