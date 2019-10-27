import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Input, Row, Col, Button, Table, DatePicker } from 'antd';
import router from 'umi/router';
const { RangePicker } = DatePicker;
// router.push('/dashboard/anyParams');
import styles from './index.less';

@connect(() => {
  return {};
})
@Form.create()
// eslint-disable-next-line react/prefer-stateless-function
class Contract extends Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const dataSource = [
      {
        key: '1',
        name: '胡斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];

    const columns = [
      {
        title: '客户名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '合同编号',
        dataIndex: 'code',
        key: 'code',
      },
      {
        title: '合同名称',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '合同开始时间',
        dataIndex: 'startTime',
        key: 'startTime',
      },
      {
        title: '合同结束时间',
        dataIndex: 'beginTime',
        key: 'beginTime',
      },
      {
        title: '供应商接口人',
        dataIndex: 'user',
        key: 'user',
      },
      {
        title: '合同状态',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => {
          return (
            <div>
              <a
                onClick={() => {
                  router.push(`/contract/edit/${record.age}`);
                }}
              >
                编辑
              </a>
              <a style={{ marginLeft: 20 }}>删除</a>
            </div>
          );
        },
      },
    ];
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
      // labelAlign:'left'
    };
    const ColLayout = {
      lg: 12,
      md: 12,
      sm: 24,
    };
    return (
      <div className={styles.ContentStyle}>
        <Row gutter={50}>
          <Col {...ColLayout}>
            <Form.Item label="合同编号">{getFieldDecorator('email')(<Input />)}</Form.Item>
          </Col>
          <Col {...ColLayout}>
            <Form.Item label="合同名称">{getFieldDecorator('name')(<Input />)}</Form.Item>
          </Col>
        </Row>
        <Row gutter={50}>
          <Col {...ColLayout}>
            <Form.Item label="客户名称">{getFieldDecorator('kehu')(<Input />)}</Form.Item>
          </Col>
          <Col {...ColLayout}>
            <Form.Item label="选择时期">
              {getFieldDecorator('code')(
                <RangePicker
                  showTime={{ format: 'HH:mm' }}
                  format="YYYY-MM-DD HH:mm"
                  placeholder={['Start Time', 'End Time']}
                  style={{ width: '100%' }}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button
              style={{ float: 'left' }}
              type="primary"
              onClick={() => {
                router.push('/contract/add');
              }}
            >
              新建合同
            </Button>
            <Button style={{ float: 'right' }}>查询</Button>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Table dataSource={dataSource} columns={columns} />
        </Row>
      </div>
    );
  }
}

export default Contract;
