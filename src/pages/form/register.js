import React from 'react';
import moment from 'moment';
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,Icon,message,InputNumber} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option=Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends React.Component{
    state={}

    handleSubmit=()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo));

    }

    getBase64=(img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }


    preUpload= (file)=>{
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    handleLoadChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    userImg: imageUrl,
                    loading: false,
                }),
            );
        }
    };


    render(){
        const {getFieldDecorator}= this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:7
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }


        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:7
                }
            }
        }

        return (
            <div>
                <Card title="注册表单">
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>
                            {getFieldDecorator('name',{
                                // initialValue:'用户名',
                                rules:[
                                    {
                                        required: true
                                    },
                                ]
                            })(
                                <Input value="name" />
                            )}
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {getFieldDecorator('pwd',{
                                // initialValue:'密码',
                                rules:[
                                    {
                                        required: true
                                    },
                                ]
                            })(
                                <Input value="pwd" type="password"/>
                            )}
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {getFieldDecorator('gender',{
                                initialValue:'1',
                                rules:[
                                    {
                                        required: true
                                    },
                                ]
                            })(
                                <RadioGroup>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>
                                </RadioGroup>
                            )}
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {getFieldDecorator('age',{
                                initialValue:'18',
                                rules:[
                                    {
                                        required: true
                                    },
                                ]
                            })(
                                <InputNumber/>
                            )}
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {getFieldDecorator('status',{
                                initialValue:'2',
                            })(
                               <Select>
                                   <Option value="1">咸鱼</Option>
                                   <Option value="2">高富帅</Option>
                                   <Option value="3">FE</Option>
                               </Select>
                            )}
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {getFieldDecorator('fav',{
                                initialValue:['2','5'],
                            })(
                                <Select mode="multiple">
                                    <Option value="1">跑步</Option>
                                    <Option value="2">追剧</Option>
                                    <Option value="3">游泳</Option>
                                    <Option value="4">打游戏</Option>
                                    <Option value="5">麦霸</Option>
                                    <Option value="6">刷题库</Option>
                                    <Option value="7">逛吃</Option>
                                    <Option value="8">处cp</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {getFieldDecorator('married',{
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Switch />
                            )}
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {getFieldDecorator('birthday',{
                                initialValue: moment('2019-12-23'),
                            })(
                                //需要安装moment插件，初始化的值必须是moment对象
                                <DatePicker
                                    showTime={true}
                                    // showToday={}
                                    format='YYYY-MM-DD HH:mm:ss'
                                />
                            )}
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {getFieldDecorator('address',{
                                initialValue: 'losanji',
                            })(
                                <TextArea
                                    autoSize={{
                                        minRows:4,
                                        maxRows:6
                                    }}
                                />
                            )}
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {getFieldDecorator('time',{
                            })(
                                <TimePicker/>
                            )}
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {getFieldDecorator('userImg',{
                            })(
                                <Upload
                                    listType="picture-card"
                                    showUploadList={false}
                                    action="//jsonplaceholder.typicode.com/posts"
                                    beforeUpload={this.preUpload}
                                    onChange={this.handleLoadChange}
                                >
                                    {this.state.userImg? <img src={this.state.userImg} alt=""/>:<Icon type="plus"></Icon>}
                                </Upload>
                            )}
                        </FormItem>

                        <FormItem  {...offsetLayout}>
                            {getFieldDecorator('deal',{
                                valuePropName: 'checked',
                                initialValue: 'true'
                            })(
                                <Checkbox >我已阅读过该 <a href="#">协议</a></Checkbox>
                            )}
                        </FormItem>

                        <FormItem  {...offsetLayout}>
                           <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(FormRegister);