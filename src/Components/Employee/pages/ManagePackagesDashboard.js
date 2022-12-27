
import { Row, Col, Modal, Button, Select, message, Popconfirm, Tooltip, Skeleton, Space, Table, Tag, Form, Input } from 'antd'
import { SyncOutlined, InboxOutlined, CarOutlined, ExportOutlined, FilterOutlined, EditOutlined, CloseCircleOutlined, ExclamationCircleOutlined, CheckCircleOutlined, SearchOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useMemo, useCallback, useState } from 'react'
import { getSearchProps } from '../../SearchHelper'
import CourierSelectInput from '../Modals/CourierSelectInput'
import { getAllPackages, updatePackage } from '../../../ApiHelper/backend_helper'

const { Option } = Select
const { TextArea } = Input

const ManagePackagesDashboard = ({ employee, addPackage }) => {
  // Table column filter
  const [filteredColumns, setFilteredColumns] = useState()
  const [filteringValue, setFilteringValue] = useState([]) // Array of selected column keys
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)

  const [form] = Form.useForm()
  // Pagination useStates
  const defaultPageSize = 10
  const [totalCount, setTotalCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageSize, setCurrentPageSize] = useState(defaultPageSize)

  // Table
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState()

  const [editModal, setEditModal] = useState(false)
  const [courierModal, setCourierModal] = useState(false)

  const [activePackage, setActivePackage] = useState(null)

  // useEffect(() => {
  //   form.resetFields()
  // }, [onEditHandler])

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
          title='Assign Courier'
        >
          <CarOutlined style={{ color: 'green' }} onClick={() => onAssignCourier(record)} />
        </Tooltip>
        <Tooltip
          title='Update Status'
        >
          <EditOutlined style={{ color: '#2196fc' }} onClick={() => onEditHandler(record)} />
        </Tooltip>

      </Space>
    )
  }

  const tagSelector = (text) => {
    console.log('text', text)
    if (String(text).includes('waiting')) {
      return (
        <Tag icon={<ExportOutlined />} color='green'>
          Awaiting Pick-up
        </Tag>
      )
    } else if (String(text).includes('old')) {
      return (
        <Tag icon={<ExclamationCircleOutlined />} color='yellow'>
          On Hold
        </Tag>
      )
    } else if (String(text).includes('ssigned')) {
      return (
        <Tag icon={<InboxOutlined />} color='volcano'>
          To Be Assigned
        </Tag>
      )
    } else if (String(text).includes('ancelled')) {
      return (
        <Tag icon={<CloseCircleOutlined />} color='red'>
          Cancelled
        </Tag>
      )
    } else if (String(text).includes('Delivered')) {
      return (
        <Tag icon={<CheckCircleOutlined />} color='green'>
          Delivered
        </Tag>
      )
    } else {
      return (
        <Tag icon={<SyncOutlined />} color='blue'>
          On the way
        </Tag>
      )
    }
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
    // {
    //   title: 'Recipient Name',
    //   id: 'name',
    //   dataIndex: 'name',
    //   key: 'name',
    //   name: 'name',
    //   type: 'varchar'
    // },
    {
      title: 'Weight',
      id: 'weight',
      dataIndex: 'weight',
      key: 'weight',
      name: 'weight',
      type: 'varchar'
    },
    {
      title: 'Volume',
      id: 'volume',
      dataIndex: 'volume',
      key: 'volume',
      name: 'volume',
      type: 'varchar'
    },
    {
      title: 'Type',
      id: 'type',
      dataIndex: 'type',
      key: 'type',
      name: 'type',
      type: 'type'
    },
    {
      title: 'Status',
      id: 'deliveryStatus',
      dataIndex: 'deliveryStatus',
      key: 'deliveryStatus',
      name: 'deliveryStatus',
      type: 'deliveryStatus',
      render: (text) => tagSelector(text)
    }
  ]

  const reset = () => {
    getAllPackages()
      .then((data) => {
        setData(data)
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

  const onAssignCourier = (record) => {
    // TODO
    console.log('record')
    setCourierModal(true)
    setActivePackage(record)
    form.resetFields()
  }

  const handleSorting = () => {
    // TODO

  }

  const searchHandler = () => {
    // TODO

  }

  const getRecipients = () => {
    // TODO
    return 353
  }

  const assignCourierCancelled = () => {
    // TODO
    setCourierModal(false)
    form.resetFields()
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
    getRecipients()
  }

  const onEditHandler = (record) => {
    console.log('record', record)
    setActivePackage(record)
    form.resetFields()
    setEditModal(true)
    // setIsLoading(true)
  }

  const editApiCall = (values) => {
    // TODO
    updatePackage(values.packageId, values)
      .then(_ => {
        message.success('Status Updated Successfully')
      })
      .catch(e => message.error(e.message))
      .finally(() => {
        reset()
      })

    setEditModal(false)
    form.resetFields()
  }

  const courierApiCall = (values) => {
    updatePackage(values.packageId, { deliveryStatus: 'Awaiting Pick-up' })
      .then(_ => {
        message.success('Courier Assigned Successfully')
      })
      .catch(e => message.error(e.message))
      .finally(() => {
        reset()
      })
    // TODO
    setCourierModal(false)
    form.resetFields()
  }

  const editCancelled = () => {
    setEditModal(false)
    form.resetFields()
  }

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Manage Packages</h1>
      </Row>
      <Row>
        <Col offset={20} span={4}>
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
          title='Assign Courier'
          visible={courierModal}
          onCancel={assignCourierCancelled}
          footer={null}
          width={800}
        >
          <Form
            style={{ marginTop: '45px' }}
            name='Edit Status'
            form={form}
            layout='horizontal'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 17 }}
            onFinish={courierApiCall}
            autoComplete='off'
            colon
          >
            <Form.Item
              label='Package ID'
              key='packageId'
              name='packageId'

              initialValue={activePackage === null ? null : activePackage.id}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label='Assigned Courier'
              key='courierId'
              name='courierId'
              initialValue={activePackage === null ? null : activePackage.courierId}
              rules={[{ required: true, message: 'Missing Courier ID' }]}
            >
              <CourierSelectInput />
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
        <Modal
          title='Edit Status'
          visible={editModal}
          onCancel={editCancelled}
          footer={null}
          width={800}
        >
          <Form
            style={{ marginTop: '45px' }}
            name='Edit Status'
            form={form}
            layout='horizontal'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 17 }}
            onFinish={editApiCall}
            autoComplete='off'
            colon
          >
            <Form.Item
              label='Package ID'
              key='packageId'
              name='packageId'

              initialValue={activePackage === null ? null : activePackage.id}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label='Status'
              key='deliveryStatus'
              name='deliveryStatus'
              initialValue={activePackage === null ? null : activePackage.deliveryStatus}
              rules={[{ required: true, message: 'Missing Status' }]}
            >
              <Select placeholder='Choose Package Status'>
                {[
                  'To be assigned',
                  'Awaiting Pick-up',
                  'On the way',
                  'Cancelled',
                  'On Hold',
                  'Delivered'
                ].map(type => (
                  <Select.Option key={type} value={type}>
                    {type}
                  </Select.Option>
                ))}
              </Select>
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

export default ManagePackagesDashboard
