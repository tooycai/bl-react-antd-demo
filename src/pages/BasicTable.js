import React from 'react';
import {Card,Table} from 'antd';

export default class BasicTable extends React.Component {
    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '姓名',
                dataIndex: 'name'
            },
            {
                title: '昵称',
                dataIndex: 'nickname'
            },
            {
                title: '年龄',
                dataIndex: 'age'
            },
            {
                title: '性别',
                dataIndex: 'gender'
            },
            {
                title: '邮箱',
                dataIndex: 'mail'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
        ]

        return (
            <div>
                <Card title="基础表格">
                    <Table columns={columns}>
                        
                    </Table>
                </Card>
            </div>
        )
    }
}