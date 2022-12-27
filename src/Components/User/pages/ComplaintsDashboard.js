
import { Row, Col, Modal, Button, Select, message, Popconfirm, Tooltip, Skeleton, Space, Table, Tag, Radio } from 'antd'
import { SyncOutlined, InboxOutlined, ExclamationCircleOutlined, ExportOutlined, FilterOutlined, PlusOutlined, FileExclamationOutlined, HistoryOutlined, SearchOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useMemo, useCallback, useState } from 'react'
import { getSearchProps } from '../../SearchHelper'
import { getUserComplaints } from '../../../ApiHelper/backend_helper'

const { Option } = Select

const ActiveShipmentsDashboard = ({ user, addPackage }) => {
  // Table column filter
  const [filteredColumns, setFilteredColumns] = useState()
  const [filteringValue, setFilteringValue] = useState([]) // Array of selected column keys
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)

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
  }, [user])

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
    {
      title: 'Details',
      id: 'details',
      dataIndex: 'details',
      key: 'details',
      name: 'details',
      type: 'varchar'
    },
    {
      title: 'Date Resolved',
      id: 'dateResolved',
      dataIndex: 'dateResolved',
      key: 'dateResolved',
      name: 'dateResolved',
      type: 'date'
    },
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
    getUserComplaints(user.id)
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
    setFilteredColumns(cols)

    // setFilteredColumns(columns)
  }

  useEffect(() => {
    reset()
  }, [])

  const onHoldHandler = () => {
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
              // actionColumn
            ]
    setFilteredColumns(cols)
    getRecipients()
  }

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Complaints</h1>
      </Row>
      <Row>
        <Col offset={21}>
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

      </Row>
    </>

  )
}

export default ActiveShipmentsDashboard
