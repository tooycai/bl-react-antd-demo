import React from 'react';
import {Card,Button,Spin,Icon,Alert} from 'antd';
import './ui.less';
export default class Loadings extends React.Component{
    render(){
        const icon = <Icon type="loading" style={{'fontSize':'24'}} />
        return (
            <div>
                <Card title="Spin用法">
                    <Spin size="small"/>
                    <Spin size="default"/>
                    <Spin size="large"/>

                    <br/>

                    <Spin indicator={icon} size="large" />

                </Card>
                <Card title="内容遮罩">
                    <Alert
                        message="Alert"
                        description="info"
                        type='info'
                    />

                    <Spin tip="加载中">
                        <Alert
                            message="Alert"
                            description="warning"
                            type='warning'
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}