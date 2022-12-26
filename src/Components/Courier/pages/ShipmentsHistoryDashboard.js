
import { Row, Col, Modal, Button, Select, message, Form, Input, Tooltip, Skeleton, Space, Table, Tag, Radio } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, ExportOutlined, FilterOutlined, PlusOutlined, FileExclamationOutlined, HistoryOutlined, SearchOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useMemo, useCallback, useState } from 'react'
import { getSearchProps } from '../../SearchHelper'

const { Option } = Select
const { TextArea } = Input

const ShipmentsHistoryDashboard = ({ user, addPackage }) => {
  const [form] = Form.useForm()
  // Table column filter
  const [filteredColumns, setFilteredColumns] = useState()
  const [filteringValue, setFilteringValue] = useState([]) // Array of selected column keys
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)

  // Pagination useStates
  const defaultPageSize = 10
  const [totalCount, setTotalCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageSize, setCurrentPageSize] = useState(defaultPageSize)

  const [complaintModal, setComplaintModal] = useState(false)
  const [activePackageId, setActivePackageId] = useState(null)
  // Table
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState()

  const onComplaintHandler = (id) => {
    console.log(`Record with id:${id} is deleted`)
    setActivePackageId(id)
    setComplaintModal(true)
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

  const complaintApiCall = () => {
    // TODO
    setComplaintModal(false)
    message.success('Complaint Sent Successfully')
  }

  const complaintCancelled = () => {
    setComplaintModal(false)
  }

  const tagSelector = (text) => {
    console.log('text', text)
    if (String(text).includes('Delivered')) {
      return (
        <Tag icon={<CheckCircleOutlined />} color='green'>
          Delivered
        </Tag>
      )
    } else {
      return (
        <Tag icon={<CloseCircleOutlined />} color='volcano'>
          Cancelled
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
    {
      title: 'Recipient Name',
      id: 'name',
      dataIndex: 'name',
      key: 'name',
      name: 'name',
      type: 'varchar'
    },
    {
      title: 'Weight',
      id: 'weight',
      dataIndex: 'weight',
      key: 'weight',
      name: 'weight',
      type: 'varchar'
    },
    {
      title: 'Dimensions',
      id: 'dimensions',
      dataIndex: 'dimensions',
      key: 'dimensions',
      name: 'dimensions',
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
      id: 'status',
      dataIndex: 'status',
      key: 'status',
      name: 'status',
      type: 'status',
      render: (text) => tagSelector(text)
    }
  ]

  const reset = () => {
    setData([
      { name: 'ather', id: 1, weight: '300', dimensions: '50x34x23', type: 'Fragile', status: 'Delivered' },
      { name: 'ather', id: 1, weight: '300', dimensions: '50x34x23', type: 'Fragile', status: 'Cancelled' },
      { name: 'ather', id: 1, weight: '300', dimensions: '50x34x23', type: 'Fragile', status: 'Delivered' },
      { name: 'ather', id: 1, weight: '300', dimensions: '50x34x23', type: 'Fragile', status: 'Delivered' },
      { name: 'ather', id: 1, weight: '300', dimensions: '50x34x23', type: 'Fragile', status: 'Delivered' },
      { name: 'ather', id: 1, weight: '300', dimensions: '50x34x23', type: 'Fragile', status: 'Cancelled' },
      { name: 'ather', id: 1, weight: '300', dimensions: '50x34x23', type: 'Fragile', status: 'Delivered' }
    ])

    let cols = []
    cols = columns?.map((column) => {
      return {
        ...column,
        ...getSearchProps(column.name, column.type, searchHandler)
      }
    })
    setFilteredColumns([...cols])

    // setFilteredColumns(columns)
  }

  useEffect(() => {
    reset()
  }, [])

  const onEditRowHandler = () => {
    // TODO

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
            ]
    setFilteredColumns([...cols])
    getRecipients()
  }

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Shipments History</h1>
      </Row>
      <Row>
        <Col offset={21} span={3}>
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
          title='Create Complaint'
          visible={complaintModal}
          onCancel={complaintCancelled}
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
            onFinish={complaintApiCall}
            autoComplete='off'
            colon
          >
            <Form.Item
              label='Package ID'
              key='packageId'
              name='packageId'

              initialValue={activePackageId === null ? null : activePackageId}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label='Details'
              key='details'
              name='details'
              rules={[{ required: true, message: 'Missing Details' }]}
            >
              <TextArea rows={3} />
            </Form.Item>
            <Form.Item
              label='Complaint Type'
              key='complaintType'
              name='complaintType'
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

export default ShipmentsHistoryDashboard
