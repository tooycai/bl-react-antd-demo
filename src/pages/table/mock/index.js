import React from 'react';
import {Card,Table} from 'antd';

export default class MockTable extends React.Component{
    state = {
        dataSource2:[]
    }

    componentDidMount(){
        const data = [
            {
                id:'1',
                name:'awsl',
                nickname:'aw',
                age:'10',
                gender:'1',
                email:'awsl@mail.com',
                address:'sz'
            },
            {
                id:'2',
                name:'gkda',
                nickname:'g',
                age:'11',
                gender:'2',
                email:'gkd@mail.com',
                address:'sz'
            },
        ];

        this.setState({
            dataSource:data,
        });
    }

    render(){
        const columns =[
            {
                // 必填 唯一 5-20位
                title: '名字',
                dataIndex: 'name'
            },
            {
                // 必填
                title: '昵称',
                dataIndex: 'nickname'
            },
            {
                // 数字
                title: '年龄',
                dataIndex: 'age'
            },
            {
                // 必填 [男/女]
                title: '性别',
                dataIndex: 'gender',
                render(mode){
                    return mode=='1'?"男":"女";
                }
            },
            {
                // 邮箱校验
                title: '邮箱',
                dataIndex: 'email'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
        ];
        return (
          <div>
              <Card title="基础表格">
                  <Table
                      bordered
                      columns= {columns}
                      dataSource = {this.state.dataSource}
                      pagination= {false}
                  >
                  </Table>
              </Card>


              <Card title="动态数据渲染表格">
                  <Table
                      columns={columns}
                      dataSource = {this.state.dataSource2}
                      pagination= {false}
                  >
                  </Table>
              </Card>
          </div>
        );
    }
}