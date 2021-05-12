import React from 'react';
import {Form, DatePicker, Input, Button, message, Rate} from 'antd';
import moment from 'moment';
import {UploadOutlined} from '@ant-design/icons'
import './Post.css'
import { Redirect } from 'react-router';

var imgUrlBase64 = [];
const desc = ['terrible', 'bad', 'normal', 'good', 'terrific'];

const layout = {
    labelCol: { span: 0},
    wrapperCol: { span: 100 },
    labelAlign: "right"
};

const imgChange = e => {
    var fileList = e.target.files;
    var file_num = fileList.length;
    var AllowImgFileSize = 2100000;
    for(let i = 0; i < fileList.length;i++){
        let reader = new FileReader();
        reader.readAsDataURL(fileList[i]);
        reader.onload = function(e){
            if (AllowImgFileSize != 0 && AllowImgFileSize < reader.result.length) {
                message.error("file size exceeds 2MB!");
                return;
            }else{
                var date = document.getElementById("date").value;
                imgUrlBase64.push( {base64:reader.result, date:date} );
            }
            return;
        }
    }
    message.success(`${file_num} image${file_num > 1 ? "s" : ""} ha${file_num > 1 ? "ve" : "s"} been successfully uploaded`);
    
}

const upload = ()=>{
    document.getElementById("myimg").click();
}

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:5,
            goToGallery: false
        }
    }

    disabledDate(current){
        return current > moment().endOf('day');
    }

    post(){
        console.log(this.props);
        message.success("You have successfully posted!");
        var attraction_name = this.props.match.params[0];
        // var current_photos = JSON.parse(localStorage.getItem(attraction_name));
        // imgUrlBase64.forEach((img,index)=>{
        //     current_photos.push(img);
        // })
        // console.log(current_photos);
        localStorage.clear();
        localStorage.setItem(attraction_name,JSON.stringify(imgUrlBase64));
        this.setState({
            goToGallery: true
        })
    }

    handleRateChange = v => {
        this.setState({ value: v });
    };

    render(){
        const {value} = this.state.value;
        return(
            <Form {...layout} onFinish = {()=>this.post()}>
                {this.state.goToGallery ? <Redirect to={"/gallery/"+this.props.match.params[0]}/>: ""}
                <div id = "post">
                <h1 id = "id">Post your memory here!</h1>
                <Form.Item>
                    <Input id = "myname" placeholder = "Your name"/>
                </Form.Item>
                <Form.Item rules={[{ required: true, message: 'Please select a date!' }]} >
                    <DatePicker 
                        id = "date"
                        showTime
                        disabledDate = {this.disabledDate}
                        placeholder = "Select the date of your visit"
                        style = {{width:300}}
                    />
                </Form.Item>
                <Form.Item hidden = {true}>
                    <Input type = "file" id = "myimg" multiple = 'multiple' onChange = {imgChange} style = {{visibility:'hidden'}}></Input>
                </Form.Item>
                <Form.Item>
                    <Button icon = {<UploadOutlined/>} id = "test" onClick = {upload}>Share your memory!</Button>
                </Form.Item>
                <Form.Item>
                    <span>
                        <Rate tooltips={desc} onChange={this.handleRateChange} defaultValue = {5} allowHalf/>
                        {value ? <span className="ant-rate-text">{desc[Math.ceil(value) - 1]}</span> : ''}
                    </span>
                </Form.Item>
                <Form.Item>
                    <Button type = "primary" htmlType = 'submit' >SHARE</Button>
                </Form.Item>
                </div>
            </Form>
        )
    }
}

export default Post