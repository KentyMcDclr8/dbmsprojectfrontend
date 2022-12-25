
import { Row, Col, Modal, Button, Select, message, Popconfirm, Tooltip, Skeleton, Space, Table, Tag, Radio } from 'antd'
import { SyncOutlined, InboxOutlined , ExclamationCircleOutlined  ,  ExportOutlined   ,  FilterOutlined, PlusOutlined, FileExclamationOutlined, HistoryOutlined, SearchOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useMemo, useCallback, useState } from 'react'
import DataTable from '../../DataTable'
import {getSearchProps} from '../../SearchHelper'

const { Option } = Select

const ActiveShipmentsDashboard = ({user, addPackage}) => {

  // Table column filter
  const [filteredColumns, setFilteredColumns] = useState()
  const [filteringValue, setFilteringValue] = useState([]) // Array of selected column keys
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)

    // Pagination useStates
    const defaultPageSize = 10
    const [totalCount, setTotalCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPageSize, setCurrentPageSize] = useState(defaultPageSize)

  //Table
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState()

  const actionColumn = {
  
    title: 'Action',
    dataIndex: '_action',
    fixed: 'right',
    width: 100,
    render: (_, record) => (
      <Space size='middle'>
          <Popconfirm
            title='Are you sure you want to put this package on Hold'
            onConfirm={() => onHoldHandler(record.id)}
          >
            <HistoryOutlined style={{color:'#fcb020'}} />
          </Popconfirm>
          <Tooltip 
            title='Submit Complaint'
          >
            <FileExclamationOutlined style={{color:'#dd525f'}} onClick={() => onComplaintHandler(record.id)} />
          </Tooltip>
   


      </Space>
    )
  }

  const tagSelector = (text) => {
    console.log("text", text)
    if (String(text).includes('Awaiting Pick-up')) {
      return (
        <Tag icon={<ExportOutlined/>} color='green'>
          Awaiting Pick-up
        </Tag>
      )
    } else if (String(text).includes('On Hold')){
      return (
        <Tag icon={<ExclamationCircleOutlined/>} color='yellow'>
          On Hold
        </Tag>
      )
    }  else if (String(text).includes('To Be Assigned')){
      return (
        <Tag  icon={<InboxOutlined/>} color='volcano'>
          To Be Assigned
        </Tag>
      )
    } else {
      return (
        <Tag icon={<SyncOutlined/>}  color='blue'>
          On the way
        </Tag>
      )
    }
  }


  const columns =  [
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
      {name: "ather", id :1, weight:"300", dimensions:"50x34x23", type: "Fragile", status: 'On the way'},
      {name: "ather", id :1, weight:"300", dimensions:"50x34x23", type: "Fragile", status: 'On Hold'},
      {name: "ather", id :1, weight:"300", dimensions:"50x34x23", type: "Fragile", status: 'Awaiting Pick-up'},
      {name: "ather", id :1, weight:"300", dimensions:"50x34x23", type: "Fragile", status: 'To Be Assigned'},
      {name: "ather", id :1, weight:"300", dimensions:"50x34x23", type: "Fragile", status: 'On the way'},
      {name: "ather", id :1, weight:"300", dimensions:"50x34x23", type: "Fragile", status: 'Awaiting Pick-up'},
      {name: "ather", id :1, weight:"300", dimensions:"50x34x23", type: "Fragile", status: 'To Be Assigned'},
    ])

    let cols = []
    cols = columns?.map((column) => {
      return {
        ...column,
        ...getSearchProps(column.name, column.type, searchHandler),
      }
    })
    setFilteredColumns([...cols, actionColumn])

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
      setFilteredColumns([...cols, actionColumn])
      getRecipients()
    }

    
  const onComplaintHandler = (id) => {
    console.log(`Record with id:${id} is deleted`)
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


  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Active Shipments</h1>
      </Row>
      <Row >
        <Col offset={19} >
          <Button onClick={() => showFilter()}  type='primary' icon={<FilterOutlined />} style={{ alignContent: 'right', marginRight: 30 }}>
            Filter
          </Button>
          <Button onClick={() => addPackage()}  type='primary' icon={<PlusOutlined />} style={{ float: 'right', marginRight: 30 }}>
            Create New Package
          </Button>
        </Col>

        <Row style={{ paddingTop: '20px' }}>
        <Col>
          {!data          
            ? (
              <Skeleton style={{ width: '1000px' }} />
              )
            : (
              <Row style={{ paddingTop: '10px' }}>
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
                scroll={{ x: 1750 }}
              > 
              </Table>
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
