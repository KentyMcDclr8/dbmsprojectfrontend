
import { Row, Col, Modal, Button, Select, Form, message, Popconfirm, Tooltip, Skeleton, Space, Table, Input, Radio } from 'antd'
import { FilterOutlined, PlusOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useMemo, useCallback, useState } from 'react'
import { getSearchProps } from '../../SearchHelper'
import { getAllCourier } from '../../../ApiHelper/backend_helper'

const { Option } = Select

const CourierAccountsDashboard = (employee) => {
  const [form] = Form.useForm()
  const [formUpdate] = Form.useForm()

  // Table column filter
  const [filteredColumns, setFilteredColumns] = useState()
  const [filteringValue, setFilteringValue] = useState([]) // Array of selected column keys
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)

  const [addModal, setAddModal] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)
  const [activeRecord, setActiveRecord] = useState(null)

  // Pagination useStates
  const defaultPageSize = 10
  const [totalCount, setTotalCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageSize, setCurrentPageSize] = useState(defaultPageSize)

  // Table
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState()

  useEffect(() => {
    reset()
  }, [employee])

  const actionColumn = {

    title: 'Action',
    dataIndex: '_action',
    fixed: 'right',
    width: 100,
    render: (_, record) => (
      <Space size='middle'>

        <Tooltip
          title='Edit Courier'
        >
          <EditOutlined style={{ color: '#2196fc' }} onClick={() => onEditRowHandler(record)} />
        </Tooltip>

        <Popconfirm
          title='Are you sure you want to delete this Courier'
          onConfirm={() => onRemoveRecordHandler(record.id)}
        >
          <DeleteOutlined style={{ color: '#ce1a2a' }} />
        </Popconfirm>

      </Space>
    )
  }

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
      title: 'Name',
      id: 'name',
      dataIndex: 'name',
      key: 'name',
      name: 'name',
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

  const reset = () => {
    getAllCourier()
      .then((data) => {
        setData(data.filter(courier => courier.approved === true))
      })
      .catch(e => {
        message.error(e.message)
        console.log(e)
      })
      .finally(() => {
        form.resetFields()
      })

    let cols = []
    cols = columns?.map((column) => {
      return {
        ...column,
        ...getSearchProps(column.name, column.type, searchHandler)
      }
    })
    setFilteredColumns([...cols, actionColumn])

    // setFilteredColumns(columns)
  }

  useEffect(() => {
    reset()
  }, [])

  const onEditRowHandler = (record) => {
    // TODO
    setActiveRecord(record)
    setUpdateModal(true)
  }

  const handleSorting = () => {
    // TODO

  }

  const searchHandler = () => {
    // TODO

  }

  const getCouriers = () => {
    // TODO
    return 353
  }

  const onAddToTable = () => {
    // TODO
    setAddModal(true)
    form.resetFields()
  }

  const addApiCall = () => {
    // TODO
    setAddModal(false)
    form.resetFields()
    message.success('Courier Added Successfully')
  }

  const updateApiCall = () => {
    // TODO
    setUpdateModal(false)
    form.resetFields()
    message.success('Courier Information Updated Successfully')
  }

  // column filter/visibility functioanlity
  const showFilter = () => {
    setIsFilterModalVisible(true)
  }
  const handleFilterOk = () => {
    setIsFilterModalVisible(false)
    onFilterColumnsOKHandler()
  }
  const handleFilterCancel = () => {
    setIsFilterModalVisible(false)
  }
  const onFilterColumnsHandler = filteredColumns => {
    setFilteringValue(filteredColumns)
  }
  const onFilterColumnsOKHandler = () => {
    const cols =
        filteringValue.length === 0
          ? columns
          : [
              ...columns.filter(col => filteringValue.includes(`${col.key}`))
              // actionColumn
            ]
    setFilteredColumns([...cols, actionColumn])
    getCouriers()
  }

  const handleCancelAdd = () => {
    setAddModal(false)
  }

  const handleCancelUpdate = () => {
    setUpdateModal(false)
  }
  const onRemoveRecordHandler = (id) => {
    console.log(`Record with id:${id} is deleted`)
    message.success(`Courier with ID:${id} is deleted`)
    // setIsLoading(true)
    // deleteCourier( id)
    //   .then(_ => {
    //     message.success(`Record with id:${id} is deleted`)
    //   })
    //   .catch(e => message.error(e.message))
    //   .finally(() => {
    //     setIsLoading(false)
    //     getCouriers()
    // })
  }

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Courier Accounts</h1>
      </Row>
      <Row>
        <Col offset={20} span={5}>
          <Button onClick={() => showFilter()} type='primary' icon={<FilterOutlined />} style={{ alignContent: 'right', marginRight: 30 }}>
            Filter
          </Button>
        </Col>

        <Row>
          <Col>
            {!data
              ? (
                <Skeleton style={{ width: '1000px' }} />
                )
              : (
                <Row style={{ padding: '40px' }}>
                  <Table
                // onChange={handleChange}
                    loading={isLoading}
                // pagination={{
                //   // showSizeChanger: true,
                //   // pageSizeOptions: [10, 20, 50, 100],
                //   // pageSize: currentPageSize,
                //   // total: totalCount,
                //   // current: currentPage,
                //   showTotal: (total) => (
                //     <span style={{ color: 'GrayText' }}>(Total {total} items)</span>
                //   ),
                //   onChange: (pageIndex, pageSize) => {
                //     setCurrentPage(pageIndex)
                //     setCurrentPageSize(pageSize)
                //     changePageHandler(pageIndex, pageSize)
                //   }
                // }}
                    rowKey={(record) => record.id} // the ID of the corresponding record is assigned as the ID
                    columns={filteredColumns}
                    dataSource={data}
                    size='small'
                    style={{ width: '100%' }}
                    scroll={{ x: 1550 }}
                  />
                </Row>)}
          </Col>
        </Row>
        <Modal
          title='Filter'
          visible={isFilterModalVisible}
          onOk={handleFilterOk}
          onCancel={handleFilterCancel}
        >
          <Select
            mode='multiple'
            allowClear
            style={{ width: '100%' }}
            placeholder='Please select'
            onChange={onFilterColumnsHandler}
            value={filteringValue}
          >
            {columns
              ?.filter(c => c.dataIndex !== '_action')
              .map(col => {
                return <Option key={col.key}>{col.dataIndex}</Option>
              })}
          </Select>
        </Modal>
        <Modal
          title='Update Courier Information'
          visible={updateModal}
          onCancel={handleCancelUpdate}
          footer={null}
          width={800}
        >
          <Form
            style={{ marginTop: '45px' }}
            name='User Info'
            form={formUpdate}
            layout='horizontal'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 17 }}
            onFinish={updateApiCall}
            autoComplete='off'
            colon
          >
            <Form.Item
              label='Name'
              key='name'
              name='name'
              initialValue={activeRecord === null ? null : activeRecord.name}
              rules={[{ required: true, message: 'Missing Name' }]}
            >
              <Input maxLength={255} />
            </Form.Item>
            <Form.Item
              label='Email'
              key='email'
              name='email'
              initialValue={activeRecord === null ? null : activeRecord.email}
              rules={[{ required: true, message: 'Missing Email' }]}
            >
              <Input maxLength={255} />
            </Form.Item>
            <Form.Item
              label='Phone'
              key='phone'
              name='phone'
              initialValue={activeRecord === null ? null : activeRecord.phone}
              rules={[{ required: true, message: 'Missing Phone' }]}
            >
              <Input type='phone' maxLength={255} />
            </Form.Item>
            <Form.Item
              label='Building No'
              key='buildingNo'
              name='buildingNo'
              initialValue={activeRecord === null ? null : activeRecord.buildingNo}
              rules={[{ required: true, message: 'Missing Building No' }]}
            >
              <Input maxLength={255} />
            </Form.Item>
            <Form.Item
              label='Street No'
              key='streetNo'
              name='streetNo'
              initialValue={activeRecord === null ? null : activeRecord.streetNo}
              rules={[{ required: true, message: 'Missing Street No' }]}
            >
              <Input maxLength={255} />
            </Form.Item>
            <Form.Item
              label='City'
              key='city'
              name='city'
              initialValue={activeRecord === null ? null : activeRecord.city}
              rules={[{ required: true, message: 'Missing City' }]}
            >
              <Input maxLength={255} />
            </Form.Item>
            <Form.Item
              label='Province'
              key='province'
              name='province'
              initialValue={activeRecord === null ? null : activeRecord.province}
              rules={[{ required: true, message: 'Missing Province' }]}
            >
              <Input maxLength={255} />
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
      </Row>
    </>

  )
}

export default CourierAccountsDashboard
