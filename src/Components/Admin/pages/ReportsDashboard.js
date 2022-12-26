
import { Row, Col, Modal, Button, Card, Form, message, Select, Tooltip, Skeleton, Space, Table, Input, Radio } from 'antd'

import { IdcardOutlined, DeleteOutlined, ExpandOutlined, ReloadOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useCallback, useState } from 'react'
import ReportModal from '../Modals/ReportModal'

const { TextArea } = Input

const ReportsDashboard = () => {
  const [addModal, setAddModal] = useState(false)
  const [form] = Form.useForm()

  const addPaymentMethod = () => {
    // TODO
    setAddModal(true)
    form.resetFields()
  }

  const cancelAddPayment = () => {
    // TODO

    setAddModal(false)
    form.resetFields()
  }

  const addPaymentApi = () => {
    // TODO
    setAddModal(false)

    form.resetFields()
    message.success('New Payment Method Added Successfully')
  }

  const getTotalToBeAssigned = () => {
    // TODO
    return 2
  }

  const getTotalOnHold = () => {
    // TODO
    return 1
  }

  const deleteReport = (card) => {
    // TODO
    message.success('Report Deleted Successfully')
  }

  const refreshReport = (card) => {
    // TODO
    message.success('Report refreshed Successfully')
  }
  const reportPull = (card) => {
    // TODO
    // getreport

    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        id: 'id',
        name: 'id',
        type: 'number'
      },
      {
        title: 'District',
        id: 'district',
        dataIndex: 'district',
        key: 'district',
        name: 'district',
        type: 'varchar'
      },
      {
        title: 'Courier Count',
        id: 'courierCount',
        dataIndex: 'courierCount',
        key: 'courierCount',
        name: 'courierCount',
        type: 'number'
      }
    ]

    const data = [
      { district: 'Bilkent', id: 1, courierCount: '5' },
      { district: 'Cankaya', id: 2, courierCount: '3' },
      { district: 'Istanbul', id: 3, courierCount: '2' },
      { district: 'Tunus', id: 4, courierCount: '15' },
      { district: 'Metro', id: 5, courierCount: '5' }
    ]

    return (
      <>

        <ReportModal columns={columns} data={data} />
      </>
    )
  }

  const cardData = [
    { name: 'April Recipient Report', description: 'description', date: '17-10-2022' },
    { name: 'April Employee Report', description: 'description', date: '17-10-2022' },
    { name: 'April Courier Report', description: 'description', date: '17-10-2022' },
    { name: 'March Courier Report', description: 'description', date: '17-10-2022' }
  ]

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Reports</h1>

      </Row>

      <Row>
        {cardData.map(card => (
          <Col>
            <Card
              title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>{card.name}</h2>}
              extra={<>

                {reportPull()}
                <Tooltip
                  title='Refresh Report with current data'
                >
                  <ReloadOutlined style={{ marginLeft: '10px', fontSize: '170%', color: 'blue' }} onClick={() => refreshReport(card)} />
                </Tooltip>
                <Tooltip
                  title='Delete Report'
                >
                  <DeleteOutlined style={{ marginLeft: '10px', fontSize: '170%', color: '#ce1a2a' }} onClick={() => deleteReport(card)} />
                </Tooltip>

              </>}
              style={{
                width: 450,
                fontSize: 50,
                margin: 10
              }}
              size='default'
              bordered
              type='inner'
            >
              <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>{card.bank}</h2>
              <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>{card.accountNumber}</h2>
              <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>Last used on {card.lastUsed}</h2>
            </Card>
          </Col>
        ))}

      </Row>
      <Row>

        <Button onClick={() => addPaymentMethod()} type='primary' icon={<IdcardOutlined />} size='large' style={{ marginLeft: '30%', marginRight: '30%', width: '40%' }}>
          Create New Report
        </Button>
      </Row>
      <Modal
        title='Add New Report'
        visible={addModal}
        onCancel={cancelAddPayment}
        footer={null}
        width={800}
      >
        <Form
          style={{ marginTop: '45px' }}
          name='Add New Payment Method'
          form={form}
          layout='horizontal'
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 17 }}
          onFinish={addPaymentApi}
          autoComplete='off'
          colon
        >
          <Form.Item
            label='Report Name'
            key='name'
            name='name'
            rules={[{ required: true, message: 'Missing Report Name' }]}
          >
            <Input maxLength={255} />
          </Form.Item>
          <Form.Item
            label='Description'
            key='description'
            name='description'
            rules={[{ required: true, message: 'Missing Description' }]}
          >
            <Input maxLength={255} />
          </Form.Item>
          <Form.Item
            label='Type'
            key='type'
            name='type'
            rules={[{ required: true, message: 'Missing Type' }]}
          >
            <Select placeholder='Choose Complaint Type'>
              {[
                'Custom Query',
                'Number of Package Deliveries per city',
                'City with highest package deliveries',
                'Employees with packages managed greater than 20 in last month'
              ].map(type => (
                <Select.Option key={type} value={type}>
                  {type}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label='Custom Query'
            key='customQuery'
            name='customQuery'
          >
            <TextArea row={3} />

          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
            <Button
              style={{
                marginTop: '10px',
                backgroundColor: '#1890ff'
              }}
              block type='primary' htmlType='submit'
            >
              Submit
            </Button>
          </Form.Item>

        </Form>
      </Modal>
    </>

  )
}

export default ReportsDashboard
