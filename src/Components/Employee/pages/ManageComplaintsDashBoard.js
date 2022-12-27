
import { Row, Col, Modal, Button, Select, message, Popconfirm, Tooltip, Skeleton, Space, Table, Tag, Form, Input } from 'antd'
import { SyncOutlined, ExclamationCircleOutlined, DeleteOutlined, ExportOutlined, FilterOutlined, EditOutlined, FileExclamationOutlined, CheckCircleOutlined, SearchOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useMemo, useCallback, useState } from 'react'
import { getSearchProps } from '../../SearchHelper'
import DeliveryBranchSelectInput from '../Modals/DeliveryBranchSelectInput'
import { getUserComplaints, updateComplaint } from '../../../ApiHelper/backend_helper'

const { Option } = Select
const { TextArea } = Input

const ManageComplaintsDashboard = ({ employee }) => {
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

  const [complaintModal, setcomplaintModal] = useState(false)
  const [activeComplaint, setActiveComplaint] = useState(null)

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
          title='Manage Complaint'
        >
          <EditOutlined style={{ color: '#2196fc' }} onClick={() => onApproveHandler(record)} />
        </Tooltip>
      </Space>
    )
  }

  const tagSelector = (text) => {
    console.log('text', text)
    if (String(text).includes('Resolved')) {
      return (
        <Tag icon={<ExportOutlined />} color='green'>
          Resolved
        </Tag>
      )
    } else if (String(text).includes('Invalid Complaint')) {
      return (
        <Tag icon={<ExclamationCircleOutlined />} color='volcano'>
          Invalid Complaint
        </Tag>
      )
    } else {
      return (
        <Tag icon={<SyncOutlined />} color='blue'>
          Processing
        </Tag>
      )
    }
  }

  const columns = [
    {
      title: 'Complaint ID',
      dataIndex: 'id',
      key: 'id',
      id: 'id',
      name: 'id',
      type: 'number'
    },
    {
      title: 'Type',
      id: 'type',
      dataIndex: 'type',
      key: 'type',
      name: 'type',
      type: 'varchar'
    },
    // {
    //   title: 'Date Resolved',
    //   id: 'dateResolved',
    //   dataIndex: 'dateResolved',
    //   key: 'dateResolved',
    //   name: 'dateResolved',
    //   type: 'date'
    // },
    {
      title: 'Package ID',
      id: 'package',
      dataIndex: 'package',
      key: 'package',
      name: 'package',
      type: 'number',
      render: (text) => text.id
    },
    {
      title: 'Status',
      id: 'status',
      dataIndex: 'status',
      key: 'status',
      name: 'status',
      type: 'status',
      render: (text) => tagSelector(text)
    }
  ]

  const reset = () => {
    getUserComplaints(5)
      .then((data) => {
        setData(data)
      })
      .catch(e => {
        message.error(e.message)
        console.log(e)
      })
      .finally(() => {
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

  const onRejectHandler = (id) => {
    // TODO

    message.success('Courier Rejected Successfully')
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

  const onAddToTable = () => {
    // TODO
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

  const onApproveHandler = (record) => {
    setActiveComplaint(record)
    setcomplaintModal(true)
    form.resetFields()
    // setIsLoading(true)
    // deleteRecipient( id)
    //   .then(_ => {
    //     message.success(`Record with id:${id} is deleted`)
    //   })
    //   .catch(e => message.error(e.message))
    //   .finally(() => {
    //     setIsLoading(false)
    //     getRecipients()
    // })
  }

  const editComplaintApiCall = (values) => {
    // TODO
    updateComplaint(values.id, values)
      .then((data) => {
        // setColumnData(colData)
        message.success('Complaint Updated Successfully')
      })
      .catch(e => {
        message.error(e.message)
        console.log(e)
      })
      .finally(() => {
        form.resetFields()
        reset()
      })
    setcomplaintModal(false)
  }

  const editCancelled = () => {
    setcomplaintModal(false)
    form.resetFields()
  }

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Manage Complaints</h1>
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
                    expandable={{
                      expandedRowRender: (record) => (
                        <p
                          style={{
                            margin: 0
                          }}
                        >
                          {record.details == null ? null : record.details}
                        </p>
                      )
                      // rowExpandable: true,
                    }}
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
          title='Create Complaint'
          visible={complaintModal}
          onCancel={editCancelled}
          footer={null}
          width={800}
        >
          <Form
            style={{ marginTop: '45px' }}
            name='User Info'
            form={form}
            layout='horizontal'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 17 }}
            onFinish={editComplaintApiCall}
            autoComplete='off'
            colon
          >
            <Form.Item
              label='Complaint ID'
              key='id'
              name='id'

              initialValue={activeComplaint === null ? null : activeComplaint.id}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label='Package ID'
              key='packageId'
              name='packageId'

              initialValue={activeComplaint === null ? null : activeComplaint.package.id}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label='Details'
              key='details'
              name='details'
              initialValue={activeComplaint === null ? null : activeComplaint.details}
              rules={[{ required: true, message: 'Missing Details' }]}
            >
              <TextArea rows={3} />
            </Form.Item>
            <Form.Item
              label='Complaint Type'
              key='type'
              name='type'
              initialValue={activeComplaint === null ? null : activeComplaint.type}
              rules={[{ required: true, message: 'Missing Complaint Type' }]}
            >
              <Select placeholder='Choose Complaint Type'>
                {[
                  'Incorrect Status',
                  'Late Delivery',
                  'Wrong Package Deliveried',
                  'Other'
                ].map(type => (
                  <Select.Option key={type} value={type}>
                    {type}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label='Status'
              key='status'
              name='status'
              initialValue={activeComplaint === null ? null : activeComplaint.status}
              rules={[{ required: true, message: 'Missing Complaint Type' }]}
            >
              <Select placeholder='Choose Complaint Status'>
                {[
                  'Resolved',
                  'Invalid Complaint',
                  'Processing'
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

export default ManageComplaintsDashboard
