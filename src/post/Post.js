import React from 'react';
import {Form, DatePicker, Input, Button, message, Rate} from 'antd';
import moment from 'moment';
import {UploadOutlined} from '@ant-design/icons'

var imgUrlBase64 = [];
const desc = ['terrible', 'bad', 'normal', 'good', 'terrific'];

const layout = {
    labelCol: { span: 5},
    wrapperCol: { span: 100 },
    labelAlign: "center"
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
        this.state = {
            value : 0
        }
    }

    disabledDate(current){
        return current > moment().endOf('day');
    }

    post(){
        console.log(this.props);
        message.success("You have successfully posted!");
        var attraction_name = this.props.match.params[0];
        console.log(JSON.stringify(imgUrlBase64));
        localStorage.setItem(attraction_name,JSON.stringify(imgUrlBase64));
    }

    handleRateChange = value => {
        this.setState({ value });
      };

    render(){
        return(
            <Form {...layout} onFinish = {()=>this.post()}>
                <h1>Post your memory here!</h1>
                <Form.Item label = "When did you find it?" rules={[{ required: true, message: 'Please select a date!' }]} >
                    <DatePicker 
                        id = "date"
                        showTime
                        disabledDate = {this.disabledDate}
                        style = {{width:300}}
                    />
                </Form.Item>
                <Form.Item hidden = {true}>
                    <Input type = "file" id = "myimg" multiple = 'multiple' onChange = {imgChange} style = {{visibility:'hidden'}}></Input>
                </Form.Item>
                <Form.Item>
                    <Button icon = {<UploadOutlined/>} id = "test" onClick = {upload}>Upload some pictures about it!</Button>
                </Form.Item>
                <Form.Item>
                    <span>
                        <Rate tooltips={desc} onChange={this.handleChange} value={this.state.value} defaultValue = {5} allowHalf/>
                        {this.state.value ? <span className="ant-rate-text">{desc[Math.ceil(this.state.value) - 1]}</span> : ''}
                    </span>
                </Form.Item>
                <Form.Item>
                    <Button type = "primary" htmlType = 'submit' >Post</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Post