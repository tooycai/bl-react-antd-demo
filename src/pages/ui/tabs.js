import React from 'react';
import {Card,Button,Tabs,message,Icon} from 'antd';
import './ui.less';
const TabPane = Tabs.TabPane;
export default class MyTabs extends React.Component{
    state=[]
    newTabIndex=1000;

    handleCallback = (key)=>{
        message.info("Hi,你选择了页签："+key);
        this.setState({
            activeKey: key
        })
    }

    handleEdit =(targetKey,action)=>{
        this[action](targetKey);
    }


    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = (targetKey) => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };





    componentWillMount(){
        const panes = [
            {
                title:'Tab 7',
                content:'Tab 7',
                key: '7'
            },
            {
                title:'Tab 8',
                content:'Tab 8',
                key: '8'
            },
            {
                title:'Tab 9',
                content:'Tab 9',
                key: '9'
            },
            {
                title:'Tab 10',
                content:'Tab 10',
                key: '10'
            },
        ]

        this.setState({
            activeKey:panes[0].key,
            panes
        })
    }

    render(){
        return (
            <div>
                <Card title="Tab页签">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>

                <Card title="Tab带图页签">
                    <Tabs defaultActiveKey="4" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus"/>Tab 4</span>} key="4" >Content of Tab Pane 4</TabPane>
                        <TabPane tab={<span><Icon type="edit"/>Tab 5</span>} key="5" disabled>Content of Tab Pane 5</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>Tab 6</span>} key="6" >Content of Tab Pane 6</TabPane>
                    </Tabs>
                </Card>

                <Card title="Tab动态页签">
                    <Tabs
                          onChange={this.handleCallback}
                          activeKey={this.state.activeKey}
                          type="editable-card"
                          onEdit={this.handleEdit}
                    >
                        {
                            this.state.panes.map((pane)=>{
                                return <TabPane
                                    tab={pane.title}
                                    key={pane.key}
                                />
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}