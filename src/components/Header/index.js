import React from 'react';
import {Row,Col} from 'antd';
import Util from '../../utils/util';
import axios from '../../axios';
import './index.less';

export default class Header extends React.Component {
    state = {}
    componentWillMount() {
        this.setState({userName: 'a!ong'});

        setInterval(()=>{
            let sysTime = Util.formatDate(new Date().getTime());
            this.setState({
                sysTime
            });
        },1000);

        this.getWeatherAPIData()
    }

    // 获取天气
    getWeatherAPIData(){
        let city = '';
        axios.jsonp({
           url:'',
        }).then((res)=>{
            let data = res.results[0].weather_data[0];
            this.setState({
                dayPictureUrl: data.dayPictureUrl,
                weather: data.weather
            })
        });
    }


    render(){
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎,{ this.state.userName }</span>
                        <a href="">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{ this.state.sysTime }</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                        <span className="weather-detail">
                            晴天
                            {/*{this.state.weather}*/}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}