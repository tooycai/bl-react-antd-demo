import React from 'react';
import {Card,Form,Input,Button,message,Icon,Checkbox} from 'antd';
const FormItem = Form.Item;

class FormLogin extends React.Component{

    handleSubmit = ()=>{
        //获取里面所有的值
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,valuse)=>{
            if(!err){
                message.success(`${userInfo.username} 恭喜，验证通过。密码为${userInfo.password}`)
            }
        });
        console.log(userInfo);
    }

    render(){
        const {getFieldDecorator}= this.props.form;
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input
                                placeholder="username"
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                placeholder="password"
                            />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>


                <Card title="登录水平表单">
                    <Form
                        // layout="horizontal"  默认
                        style={{'width':300}}
                    >
                        <FormItem>
                            {
                                getFieldDecorator('username',{
                                    initialValue:'Java',
                                    rules:[
                                        {
                                            required:true,
                                            message:"用户名不能为空"
                                        },
                                        {
                                            pattern: new RegExp(/^[1-9]\d*$/, "g"),
                                            message: '请输入正确的数字ID'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password',{
                                    initialValue:'123',
                                    rules:[
                                        {
                                            required:true,
                                            message:'密码不能为空'
                                        },
                                        {
                                            min:5,max:8,
                                            message:'长度不在范围内'
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="lock"/>}
                                        type="password"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('age',{
                                    initialValue:'12',
                                    rules:[
                                        {
                                            required:true,
                                            message:'年龄不能为空'
                                        },
                                    ]
                                })(
                                    <Input />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('email',{
                                    initialValue:'123@mail.com',
                                    rules:[
                                        {
                                            required:true,
                                            message:'年龄不能为空'
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
                        <FormItem>
                            {
                                getFieldDecorator('remember',{
                                    valuePropName:'checked',
                                    initialValue:'true',
                                    rules:[
                                        {
                                            required:true,
                                            message:'年龄不能为空'
                                        },

                                    ]
                                })(
                                    //Checkbox 初始化值不太一样.必须 valuePropName:'checked'
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(FormLogin);