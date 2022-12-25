
import { Row, Col, Modal, Button, Select, message, Popconfirm, Tooltip, Skeleton, Space, Table, Tag, Form, Input } from 'antd'
import { SyncOutlined, InboxOutlined, DeleteOutlined, ExportOutlined, FilterOutlined, PlusOutlined, FileExclamationOutlined, CheckCircleOutlined, SearchOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useMemo, useCallback, useState } from 'react'
import { getSearchProps } from '../../SearchHelper'
import DeliveryBranchSelectInput from '../Modals/DeliveryBranchSelectInput'

const { Option } = Select

const CourierApplicationsDashboard = ({ user, addPackage }) => {
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

  const [approveModal, setApproveModal] = useState(false)
  const [activeCourierId, setActiveCourierId] = useState(null)

  const actionColumn = {

    title: 'Action',
    dataIndex: '_action',
    fixed: 'right',
    width: 100,
    render: (_, record) => (
      <Space size='middle'>
        <Tooltip
          title='Approve Courier'
        >
          <CheckCircleOutlined style={{ color: 'green' }} onClick={() => onApproveHandler(record.id)} />
        </Tooltip>
        <Tooltip
          title='Reject Courier'
        >
          <DeleteOutlined style={{ color: '#dd525f' }} onClick={() => onRejectHandler(record.id)} />
        </Tooltip>
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
      title: 'Courier Name',
      id: 'name',
      dataIndex: 'name',
      key: 'name',
      name: 'name',
      type: 'varchar'
    },
    {
      title: 'Email',
      id: 'email',
      dataIndex: 'email',
      key: 'email',
      name: 'email',
      type: 'varchar'
    },
    {
      title: 'Phone',
      id: 'phone',
      dataIndex: 'phone',
      key: 'phone',
      name: 'phone',
      type: 'number'
    }
  ]

  const reset = () => {
    setData([
      { name: 'ather', id: 1, email: 'smth@gmail.com', phone: '50x34x23', description: '5 years experience in Getir, Personal Car Available and 5 days per week availability ' },
      { name: 'ather', id: 12, email: 'smth@gmail.com', phone: '50x34x23', description: '5 years experience in Getir, Personal Car Available and 5 days per week availability ' },
      { name: 'ather', id: 13, email: 'smth@gmail.com', phone: '50x34x23', description: '5 years experience in Getir, Personal Car Available and 5 days per week availability ' },
      { name: 'ather', id: 14, email: 'smth@gmail.com', phone: '50x34x23', description: '5 years experience in Getir, Personal Car Available and 5 days per week availability ' },
      { name: 'ather', id: 15, email: 'smth@gmail.com', phone: '50x34x23', description: '5 years experience in Getir, Personal Car Available and 5 days per week availability ' },
      { name: 'ather', id: 16, email: 'smth@gmail.com', phone: '50x34x23', description: '5 years experience in Getir, Personal Car Available and 5 days per week availability ' },
      { name: 'ather', id: 111, email: 'smth@gmail.com', phone: '50x34x23', description: '5 years experience in Getir, Personal Car Available and 5 days per week availability ' }
    ])

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

  const onApproveHandler = (id) => {
    setActiveCourierId(id)
    setApproveModal(true)
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

  const approveCourierApiCall = () => {
    // TODO
    setApproveModal(false)
    form.resetFields()
    message.success('Courier Approved Successfully')
  }

  const approvalCancelled = () => {
    setApproveModal(false)
    form.resetFields()
  }

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Courier Applications</h1>
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
                          {record.description == null ? null : record.description}
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
          title='Courier Approval'
          visible={approveModal}
          onCancel={approvalCancelled}
          footer={null}
          width={800}
        >
          <Form
            style={{ marginTop: '45px' }}
            name='Delivery Branch Assignment'
            form={form}
            layout='horizontal'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 17 }}
            onFinish={approveCourierApiCall}
            autoComplete='off'
            colon
          >
            <Form.Item
              label='Courier ID'
              key='courierId'
              name='courierId'
              initialValue={activeCourierId === null ? null : activeCourierId}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label='Delivery Branch'
              key='deliveryBranchId'
              name='deliveryBranchId'
              rules={[{ required: true, message: 'Missing Delivery Branch' }]}
            >
              <DeliveryBranchSelectInput />
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

export default CourierApplicationsDashboard
