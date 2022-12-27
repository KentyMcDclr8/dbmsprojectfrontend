
import { Row, Col, Modal, Button, Card, Form, message, Select, Tooltip, Skeleton, Space, Table, Input, Radio } from 'antd'

import { IdcardOutlined, DeleteOutlined, ExpandOutlined, ReloadOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useCallback, useState } from 'react'
import ReportModal from '../Modals/ReportModal'
import { getAllReports, getReportById } from '../../../ApiHelper/backend_helper'

const { TextArea } = Input

const ReportsDashboard = () => {
  const [addModal, setAddModal] = useState(false)
  const [form] = Form.useForm()
  const [cardData, setCardData] = useState([])

  const [cardData2, setCardData2] = useState([])

  useEffect(() => {
    getAllReports()
      .then((data) => {
      // console.log("ALL REPORTS", data)
        const tempdata = data
        tempdata.forEach(element => {
          getReportById(element.id)
            .then((data) => {
              const tempp = {
                columns: data.columns,
                data: data.data,
                id: element.id
              }
              element.columns = data.columns
              element.data = data.data

              setCardData2([...cardData2, tempp])
            })
            .catch(e => {
              message.error(e.message)
              console.log(e)
            })
            .finally(() => {
              setCardData(tempdata)
            })
        })
        // console.log("Data final", tempdata)
      })
      .catch(e => {
        message.error(e.message)
        console.log(e)
      })
      .finally(() => {
        form.resetFields()
      })
  }, [])

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
  // const reportPull = useCallback((card) => {

  //   getReportById(card.id)
  //     .then((data) => {

  //       let col = data.columns
  //       let dat = data.data

  //       return (
  //         <>

  //           <ReportModal columns={col} data={dat} />
  //         </>
  //       )

  //   })
  //   .catch(e => {
  //     message.error(e.message)
  //     console.log(e)
  //   })
  //   .finally(() => {
  //     form.resetFields()
  //   })

  // }, [cardData])

  const getReport = (card) => {
    const data = viewReportButton(card)
  }

  const viewReportButton = (card) => {
    // TODO

    // console.log("card data", card)
    const columns = null
    const dataT = null

    // getReportById(card.id)
    // .then((data) => {

    //   columns = data.columns
    //   dataT  = data.data

    //   })
    //   .catch(e => {
    //     message.error(e.message)
    //     console.log(e)
    //   })
    //   .finally(() => {
    //     form.resetFields()
    // })

    // console.log("cardData", cardData)

    const temp = cardData.find(o => o.id === card.id)
    // console.log("temp", temp)
    console.log('columns', temp.columns)
    console.log('data', temp.data)

    console.log("Object.hasOwn(object1, 'columns')", Object.hasOwn(temp, 'columns'))

    // console.log("data", temp.columns.end_date)

    const databackup = [
      { name: 'ather', id: 1, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
      { name: 'ather', id: 12, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
      { name: 'ather', id: 13, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
      { name: 'ather', id: 142, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
      { name: 'ather', id: 124, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
      { name: 'ather', id: 112, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
      { name: 'ather', id: 1111, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
      { name: 'ather', id: 1231, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' }
    ]

    const columnsBackup = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        id: 'id',
        name: 'id',
        type: 'number'
      },
      {
        title: 'Name',
        id: 'name',
        dataIndex: 'name',
        key: 'name',
        name: 'name',
        type: 'varchar'
      },
      {
        title: 'Address',
        id: 'address',
        dataIndex: 'address',
        key: 'address',
        name: 'address',
        type: 'varchar'
      },
      {
        title: 'Phone',
        id: 'phone',
        dataIndex: 'phone',
        key: 'phone',
        name: 'phone',
        type: 'number'
      },
      {
        title: 'Email',
        id: 'email',
        dataIndex: 'email',
        key: 'email',
        name: 'email',
        type: 'varchar'
      }
    ]
    return (
      <ReportModal columns={columnsBackup} data={temp.data} />

    )
  }
  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Reports</h1>

      </Row>

      <Row>
        {cardData.map(card => (
          <Col>
            <Card
              title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>{card.reportName}</h2>}
              extra={<>

                {viewReportButton(card)}

                {/* {viewReportButton(
        getReportById(card.id)
        .then((data) => {

          return data

          })
          .catch(e => {
            message.error(e.message)
            console.log(e)
          })
          .finally(() => {
            form.resetFields()
          })
    )} */}
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
              <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>{card.description}</h2>
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
