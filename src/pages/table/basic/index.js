import React from 'react';
import './index.less';
import {Card ,Table ,Input, Button,Modal,message,Form,Select,Radio} from 'antd';

const FormItem = Form.Item;
// const Option = Select.Option;
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
    {
        id:'3',
        name:'awsl',
        nickname:'aw',
        age:'10',
        gender:'1',
        email:'awsl@mail.com',
        address:'sz'
    },
    {
        id:'4',
        name:'awsl',
        nickname:'aw',
        age:'10',
        gender:'1',
        email:'awsl@mail.com',
        address:'sz'
    },
    {
        id:'5',
        name:'awsl',
        nickname:'aw',
        age:'10',
        gender:'1',
        email:'awsl@mail.com',
        address:'sz'
    },
];
const RadioGroup = Radio.Group;

export default class BasicTable extends React.Component {
    state = {
        dataSource2:[],
        showAddModal:false,
    }

    params = {
        id:6
    }

    componentDidMount(){
        data.map((item,index)=>{
            item.key = index;
        })

        this.requestList(data);
    }


    onRowClick = (record,index)=>{
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem:record
        })

    }

    //新增用户
    handleAdd = ()=>{
        this.setState({
            showAddModal:true,
            modalTitle:"新增"
        })
    }

    //编辑用户
    handleEdit = ()=>{
        let row = this.state.selectedRows;

        if(row == null || row.length == 0) {
            message.warning(
                "请选择要编辑的记录"
            )
            return ;
        };
        if(row.length > 1){
            message.warning(
                "不能同时更改多条记录"
            )
            return ;
        };


        this.setState({
            showAddModal:true,
            modalTitle:"编辑",
            info: row[0]
        })

    }


    //保存
    handleSub=()=>{
        let user = this.tableForm.props.form.getFieldsValue();

        this.tableForm.props.form.validateFields((err,valuse)=>{
            if(!err){
                // message.success(`${user.username} 恭喜，验证通过。密码为${user.password}`)
                let td = this.state.dataSource;


                if(this.state.modalTitle=="编辑"){
                    if(user){
                        user.id = this.state.info.id;
                        user.key = user.id;
                    }

                    let pd = td.map((item)=>{
                        return item.id==user.id?user:item;
                    });

                    this.setState({
                        dataSource: pd,
                        showAddModal: false,
                        selectedRowKeys: [],
                        selectedRows: null,
                        info: null
                    })

                    message.success("编辑成功！");
                }else{
                    if(user){
                        user.id = this.params.id++;
                        user.key = user.id;
                    }
                    td.push(user);

                    this.setState({
                        dataSource: td,
                        showAddModal: false,
                        selectedRowKeys: [],
                        selectedRows: null,
                        info: null
                    })

                    message.success("保存成功！");
                }
            }
        });
    }




    handleDelete = ()=>{
        let rows = this.state.selectedRows;

        if(rows == null) {
            message.warning(
                "请选择要删除的记录"
            )
            return ;
        };

        let ids = [];
        rows.map((item)=>{
            ids.push(item.id);
        });
        let idstr = ids.join(',');

        Modal.confirm({
            title:'删除提示',
            content:`确定删除吗？ ${idstr}`,
            onOk:()=>{



                let dt = this.state.dataSource;
                let mp=[];
                dt.map((m)=>{
                    if(idstr.indexOf(m.id)==-1){
                        mp.push(m);
                    }
                });

                message.success("删除成功！");
                this.requestList(mp);
            }
        })
    }

    requestList =(data)=>{
        this.setState({
            dataSource:data,
            selectedRowKeys:[],
            selectedRows:null
        });
    }


    render(){
        const columns = [
            // {
            //     title: 'id',
            //     dataIndex: 'id',
            //     // render: text => <a>{text}</a>,
            // },
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
        const {Search} = Input;

        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }

        const rowCheckSelection = {
            type:'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys,selectedRows)=>{
                // let ids=[];
                // selectedRows.map((item)=>{
                //     ids.push(item.id)
                // })
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }

        return(
            <div>
                <Card>
                    <FilterForm wrappedComponentRef={(inst)=>{this.filterForm = inst;}}/>
                </Card>

                <Card>
                    <div className="crud">
                        <Button icon="plus"  type="primary"
                                onClick={()=>this.handleAdd()}>新增</Button>
                        <Button icon="edit"  type="dashed"
                                onClick={()=>this.handleEdit()}>编辑</Button>
                        <Button icon="delete"  type="danger"
                                onClick={this.handleDelete}>删除</Button>
                        {/*<Search*/}
                            {/*placeholder="input search text"*/}
                            {/*onSearch={value => console.log(value)}*/}
                            {/*style={{ width: 200 }}*/}
                        {/*/>*/}
                    </div>

                    <Table
                        bordered
                        columns= {columns}
                        dataSource = {this.state.dataSource}
                        pagination= {false}
                        rowSelection= {rowCheckSelection}
                        mountNode
                        // onRow = {(record,index)=>{
                        //     return {
                        //         onClick:()=>{
                        //             this.onRowClick(record,index)
                        //         }
                        //         // onMouseEnter:()=>{},
                        //     }
                        // }}
                    />
                </Card>


                <Modal
                    title={this.state.modalTitle}
                    visible={this.state.showAddModal}
                    onCancel={()=>{
                        this.setState({
                            showAddModal:false,
                            selectedRowKeys:[],
                            selectedRows:null,
                            info: null
                        })
                    }}
                    onOk={()=>{this.handleSub()}}
                >
                    <TableFilterForm  wrappedComponentRef={(inst)=>{this.tableForm = inst;}}  userInfo={this.state.info}/>
                </Modal>

            </div>
        );
    }
}

class FilterForm extends React.Component{
    render(){
        const {getFieldDecorator} =this.props.form;
        const {Search} = Input;
        return (
            <Form layout="inline" style={{"text-align":'left'}}>
                <FormItem label="姓名">
                    {getFieldDecorator('name')(
                       <Input  placeholder="name"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{"text-align":'left','margin-left':'0px'}}>查询</Button>
                </FormItem>
            </Form>
        );
    }
}
FilterForm = Form.create({})(FilterForm)



class TableFilterForm extends React.Component{
    render(){

        let userInfo = this.props.userInfo||{};
        const {getFieldDecorator} =this.props.form;
        const formItemLayout = {
            labelCol:{
                span:7
            },
            wrapperCol:{
                span: 12
            }
        }
        return (
            <Form layout="horizontal">
                <FormItem label="姓名" {...formItemLayout}>
                    {
                        getFieldDecorator('name',{
                            initialValue: userInfo.name,
                            rules:[
                                {
                                    required:true,
                                    message:"用户名不能为空"
                                },
                                {
                                    min:4,max:20,
                                    message:'长度不在范围内(4~20)'
                                }
                            ]
                        })(
                            <Input />
                        )
                    }

                </FormItem>
                <FormItem label="昵称" {...formItemLayout}>
                    {
                        getFieldDecorator('nickname',{
                            initialValue:userInfo['nickname'],
                            rules:[
                                {
                                    required:true,
                                    message:"昵称不能为空"
                                },
                            ]
                        })(
                            <Input />
                        )
                    }


                </FormItem>
                <FormItem label="年龄" {...formItemLayout}>
                    {
                        getFieldDecorator('age',{
                            initialValue:userInfo.age,
                            rules:[
                                {
                                    required:true,
                                    message:"年龄不能为空"
                                },
                                {
                                    pattern: new RegExp(/^[1-9]\d*$/, "g"),
                                    message: '请输入数字'
                                }
                            ]
                        })(
                            <Input />
                        )
                    }

                </FormItem>
                <FormItem label="性别" {...formItemLayout}>
                    {getFieldDecorator('gender',{
                        initialValue:userInfo.gender
                    })(
                        <RadioGroup>
                            <Radio value="1">男</Radio>
                            <Radio value="2">女</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem label="邮箱" {...formItemLayout}>
                    {
                        getFieldDecorator('email',{
                            initialValue:userInfo.email,
                            rules:[
                                {
                                    required:true,
                                    message:"邮箱不能为空"
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
                                    message: '邮箱格式不正确',
                                },
                                {
                                    max: 50,
                                    message: '邮箱不得超过50字符',
                                }
                            ]
                        })(
                            <Input />
                        )
                    }


                </FormItem>
                <FormItem label="地址" {...formItemLayout}>
                    {
                        getFieldDecorator('address',{
                            initialValue:userInfo.address,
                            rules:[
                            ]
                        })(
                            <Input />
                        )
                    }
                </FormItem>
            </Form>
        );
    }
}
TableFilterForm = Form.create({})(TableFilterForm)