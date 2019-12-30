import React from 'react';
import {Card,Button,message} from 'antd';
import './ui.less';
export default class Messages extends React.Component{

    showMsg = (type)=>{
        message[type](
            type
        )
    }

    render(){
        return (
            <div>
                <Card title="全局提示">
                    <Button type="primary" onClick={()=>this.showMsg('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.showMsg('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.showMsg('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.showMsg('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.showMsg('loading')}>Loading</Button>
                </Card>
            </div>
        );
    }
}