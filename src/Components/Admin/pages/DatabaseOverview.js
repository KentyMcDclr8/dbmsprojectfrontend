
import { Row, Col, Modal, Button, Select, message, Table, Layout, Menu } from 'antd'
import { SyncOutlined, InboxOutlined, ExclamationCircleOutlined, ExportOutlined, FilterOutlined, PlusOutlined, FileExclamationOutlined, HistoryOutlined, SearchOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useMemo, useCallback, useState } from 'react'
import { getSearchProps } from '../../SearchHelper'

const { Option } = Select
const { Header, Content, Footer, Sider } = Layout

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
  const [columns, setColumns] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    setColumns([
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
    ])

    setData([
      { district: 'Bilkent', id: 1, courierCount: '5' },
      { district: 'Cankaya', id: 2, courierCount: '3' },
      { district: 'Istanbul', id: 3, courierCount: '2' },
      { district: 'Tunus', id: 4, courierCount: '15' },
      { district: 'Metro', id: 5, courierCount: '5' }
    ])
  }, [])

  const MenuItems = [
    {
      key: 'User',
      label: 'User'
    },
    {
      key: 'Customer',
      label: 'Customer'
    },
    {
      key: 'Employee',
      label: 'Employee'
    },
    {
      key: 'Payment',
      label: 'Payment'
    },
    {
      key: 'Vehicle',
      label: 'Vehicle'
    },
    {
      key: 'Package',
      label: 'Package'
    },
    {
      key: 'Courier',
      label: 'Courier'
    },
    {
      key: 'Delivery branch',
      label: 'Delivery branch'
    },
    {
      key: 'Admin',
      label: 'Admin'
    },
    {
      key: 'Approval',
      label: 'Approval'
    },
    {
      key: 'Manages',
      label: 'Manages'
    },
    {
      key: 'Has',
      label: 'Has'
    }
  ]

  const pageChangeHandler = (menuItem) => {
    setColumns([
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
    ])

    setData([
      { district: 'Bilkent', id: 1, courierCount: '5' },
      { district: 'Cankaya', id: 2, courierCount: '3' },
      { district: 'Istanbul', id: 3, courierCount: '2' },
      { district: 'Tunus', id: 4, courierCount: '15' },
      { district: 'Metro', id: 5, courierCount: '5' }
    ])
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
  }

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Database Overview</h1>
      </Row>
      <Row>
        <Col offset={21}>
          <Button onClick={() => showFilter()} type='primary' icon={<FilterOutlined />} style={{ alignContent: 'right', marginRight: 30 }}>
            Save View as Report
          </Button>
        </Col>
      </Row>
      <Row>
        <Header>
          <Menu
            mode='horizontal'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['Users']}
            style={{
              backgroundColor: 'white',
              width: '100%'
            }}
            items={MenuItems}
            onClick={pageChangeHandler}
          />
        </Header>

      </Row>
      <Row style={{ marginLeft: '30px' }}>
        <Table
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: [10, 20, 50, 100],
            pageSize: currentPageSize,
            total: totalCount,
            current: currentPage,
            showTotal: (total) => <span style={{ color: 'GrayText' }}>(Total {total} items)</span>,
            onChange: (pageIndex, pageSize) => {
              setCurrentPage(pageIndex)
              setCurrentPageSize(pageSize)
            }
          }}
          columns={columns}
          dataSource={data}
          size='small'
          style={{ width: '80%' }}
          scroll={{ x: 1000 }}
        />

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

    </>

  )
}

export default ActiveShipmentsDashboard
