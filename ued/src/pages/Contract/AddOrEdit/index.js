/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Input, Row, Col, Button, DatePicker, Select } from 'antd';
// eslint-disable-next-line no-unused-vars
import router from 'umi/router';
import styles from './index.less';

const { Option } = Select;
@connect(() => {
  return {};
})
@Form.create()
// eslint-disable-next-line react/prefer-stateless-function
class Contract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }

  componentDidMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      this.setState({
        isEdit: true,
      });
    }
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignmen
    const { getFieldDecorator } = this.props.form;
    const ColLayout = {
      lg: 8,
      md: 12,
      sm: 24,
    };
    return (
      <div className={styles.ContentStyle}>
        <Row gutter={50}>
          <Col {...ColLayout}>
            <Form.Item label="客户名称">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: '请输入客户名称' }],
              })(<Input disabled={this.state.isEdit} />)}
            </Form.Item>
          </Col>
          <Col {...ColLayout}>
            <Form.Item label="合同编号">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入合同编号' }],
              })(<Input disabled={this.state.isEdit} />)}
            </Form.Item>
          </Col>
          <Col {...ColLayout}>
            <Form.Item label="合同名称">
              {getFieldDecorator('kehu', {
                rules: [{ required: true, message: '请输入合同名称' }],
              })(<Input disabled={this.state.isEdit} />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={50}>
          <Col {...ColLayout}>
            <Form.Item label="合同开始时间">
              {getFieldDecorator('startTime', {
                rules: [{ required: true, message: '请选择合同开始时间' }],
              })(<DatePicker disabled={this.state.isEdit} style={{ width: '100%' }} />)}
            </Form.Item>
          </Col>
          <Col {...ColLayout}>
            <Form.Item label="合同结束时间">
              {getFieldDecorator('endTime', {
                rules: [{ required: true, message: '请选择合同结束时间' }],
              })(<DatePicker disabled={this.state.isEdit} style={{ width: '100%' }} />)}
            </Form.Item>
          </Col>
          <Col {...ColLayout}>
            <Form.Item label="供应商接口人">
              {getFieldDecorator('code', {
                rules: [{ required: true, message: '请选择供应商接口人' }],
                initialValue: [1, 2],
              })(
                <Select mode="multiple" style={{ width: '100%' }} placeholder="Please select">
                  <Option key={1} value={1}>
                    1
                  </Option>
                  <Option key={2} value={2}>
                    2
                  </Option>
                  <Option key={3} value={3}>
                    3
                  </Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col style={{ width: 232, margin: '0 auto' }}>
            <Button>返回</Button>
            <Button type="primary" style={{ marginLeft: 20 }}>
              保存
            </Button>
            <Button type="primary" style={{ marginLeft: 20 }}>
              {this.state.isEdit ? '修改' : '新建'}
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contract;
