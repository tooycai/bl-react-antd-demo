import React from 'react';
import {Card,Row,Col,Modal} from 'antd';
import './ui.less';

const CardMeta = Card.Meta;
//画廊就是宽度固定，每列中的图片高度不定，就会出现画廊的效果
export default class Gallery extends React.Component {
    state={
        showModal: false,
    }

    openGallery =(imgSrc)=>{
        this.setState({
            showModal: true,
            currentImg: '/gallery/'+imgSrc
        })
    }


    render(){
        const imgs = [
            ['1.png','2.png','3.png','4.png','5.jpg'],
            ['6.png','7.png','8.png','9.png','10.png'],
            ['11.png','12.png','13.png','14.png','15.png'],
            ['16.png','17.png','18.png','19.png','20.png'],
            ['21.png','22.png','23.png','24.png','25.png'],
        ];

        const imgList = imgs.map((list) => list.map((item) =>
                <Card
                    cover = {<img src={'/gallery/'+item } alt=""/> }
                    onClick = {()=>this.openGallery(item)}
                >
                    <CardMeta
                        title="React Admin"
                        description = "Are you ok?"
                    />
                </Card>
            )
        );
        return (
            <div className="card-wrap">
                <Row>
                    <Col md={5}>
                        {imgList[0]}
                    </Col>
                    <Col md={5}>
                        {imgList[1]}
                    </Col>
                    <Col md={5}>
                        {imgList[2]}
                    </Col>
                    <Col md={5}>
                        {imgList[3]}
                    </Col>
                    <Col md={4}>
                        {imgList[3]}
                    </Col>
                </Row>
                <Modal
                    title="图片画廊"
                    width={400}
                    height={600}
                    visible={this.state.showModal}
                    onCancel={()=>this.setState({
                        showModal:false
                    })}
                    footer={null}
                >
                    {<img src={this.state.currentImg} alt="" style={{width:'100%' }} onClick={()=>this.setState({showModal:false})}/>}
                </Modal>
            </div>
        )
    }

}