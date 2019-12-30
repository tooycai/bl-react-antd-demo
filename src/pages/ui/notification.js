import React from 'react';
import {Card,Button,notification} from 'antd';
import './ui.less';
export default class Notice extends React.Component{

    onpenNotification = (type,direction)=>{
        if(direction){
            notification.config({
                placement: direction
            })
        }
        
        notification[type]({
            message:'发工资了',
            description:"上个月考勤22，迟到20，实发220，请笑纳"
        })
    }

    render(){
        return (
            <div>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={()=>this.onpenNotification('success','topleft')}>success</Button>
                    <Button type="primary" onClick={()=>this.onpenNotification('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.onpenNotification('warning')}>warning</Button>
                    <Button type="primary" onClick={()=>this.onpenNotification('error')}>error</Button>
                </Card>
            </div>
        );
    }
}