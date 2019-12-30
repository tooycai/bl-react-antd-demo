import React from 'react';
import {Card,Button,Icon,Radio} from 'antd';
import './ui.less';
export default class Buttons extends React.Component{
    state = {
        loading: true,
        size: 'default'
    }

    handleCloseLoading = ()=>{
        this.setState({
            loading: this.state.loading?false:true
        })
    }

    handleChangeRadio = (e)=>{
        this.setState({
            size: e.target.value
        })
    }


    render(){
        return (
           <div>
                <Card title="基础按钮">
                    <Button type="primary">webridge</Button>
                    <Button >webridge</Button>
                    <Button type="dashed">webridge</Button>
                    <Button type="danger">webridge</Button>
                    <Button disabled>webridge</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon="plus" type="primary">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete"  type="danger">删除</Button>
                    <Button icon="search" shape="circle"></Button>
                    <Button icon="search" >搜索</Button>
                    <Button icon="download" type="dashed">下载</Button>
                </Card>
                <Card title="Loading按钮">
                    <Button icon="plus" type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button type="dashed" loading={this.state.loading}>点击加载</Button>
                    <Button icon="download" type="danger"
                            onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
               <Card title="按钮组">
                   <Button.Group>
                       <Button type="primary" style={{ 'margin-right': 0}}>
                           <Icon type="left" />
                           返回
                       </Button>
                       <Button type="primary" style={{ 'margin-right': 0}}>
                           前进
                           <Icon type="right" />
                       </Button>
                   </Button.Group>
               </Card>
               <Card title="按钮尺寸">
                    <Radio.Group value={this.state.size} onChange={this.handleChangeRadio}>
                        <Radio value="small" size="small">小</Radio>
                        <Radio value="default" size="default">中</Radio>
                        <Radio value="large" size="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>webridge</Button>
                    <Button type="primary" size={this.state.size}>webridge</Button>
                    <Button type="primary" size={this.state.size}>webridge</Button>
               </Card>

           </div>
        );
    }
}