import {
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
  PlusOutlined,
  SearchOutlined
} from '@ant-design/icons'
import {
  Button,
  Input,
  Popconfirm,
  Radio,
  Typography,
  Row,
  Space,
  Table,
  Tooltip
} from 'antd'
import { useCallback, useEffect, useMemo, useState } from 'react'

const {Text} = Typography

const DataTable = ({
  isLoading,
  data,
  tooltipTexts,
  columns,
  addHandler,
  deleteHandler,
  editHandler,
  changePageHandler,
  sortHandler,
  searchHandler
}) => {
  // filtered columns recieved from parentComponent (e.g. MasterTable, DetailTable)
  const [filteredColumns, setFilteredColumns] = useState(columns)

  // Pagination useStates
  const defaultPageSize = 10
  const [totalCount, setTotalCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageSize, setCurrentPageSize] = useState(defaultPageSize)

  const actionColumn = useMemo(() => {
    if (!deleteHandler && !editHandler) return {}
    return {
      title: 'Action',
      dataIndex: '_action',
      fixed: 'right',
      width: 100,
      render: (_, record) => (
        <Space size='middle'>
          {addHandler && (
            <Tooltip
              title={tooltipTexts?.add}
            >
              <PlusOutlined className='p-1' onClick={() => addHandler(record)} />
            </Tooltip>
          )}

          {editHandler && (
            <Tooltip
              title={tooltipTexts?.edit}
            >
              <EditOutlined className='p-1' onClick={() => editHandler(record)} />
            </Tooltip>
          )}

          {deleteHandler && (
            <Popconfirm
              title={tooltipTexts?.delete}
              onConfirm={() => deleteHandler(record.id)}
            >
              <DeleteOutlined className='p-1' />
            </Popconfirm>
          )}
        </Space>
      )
    }
  }, [editHandler, deleteHandler, addHandler])

  // for initializing the values of filteredColumns and currentPage when columns prop is recieved
  useEffect(() => {
    let cols = []
    cols = columns?.map((column) => {
      return {
        ...column,
        ...getSearchProps(column.name, column.type),
      }
    })
    setFilteredColumns([...cols, actionColumn])
  }, [columns, actionColumn, getSearchProps])


  useEffect(() => {
    setTotalCount(data.length)
  }, [data])

  // Column Search/Sort functionality functions
  const handleSort = useCallback(
    (field, order) => {
      sortHandler(order, field, currentPage)
    },
    [sortHandler]
  )
  const handleSearch = useCallback(
    (selectedKeys, confirm, columnName, columnType) => {
      confirm({
        filtered: true,
        closeDropdown: true
      })

      const columnData = columns.find(column => column.name === columnName)
      columnName = columnData.relationField ? columnData.relationField : columnName

      let dsl = {}
      if (columnType == 'varchar') {
        dsl = {
          containsIgnoreCase: {
            field: columnName,
            value: `${selectedKeys[0]}`
          }
        }
      } else if (columnType == 'boolean') {
        dsl = {
          must: [
            {
              eq: {
                field: columnName,
                value: selectedKeys[0] !== 'false'
              }
            }
          ]
        }
      } else {
        dsl = {
          eq: {
            field: columnName,
            value: `${selectedKeys[0]}`
          }
        }
      }

      if (columnData.relation && columnData.relationField) {
        dsl = {
          exists: {
            relation: columnData.relation,
            queryDsl: dsl
          }
        }
      }

      setCurrentPage(1)
      searchHandler(dsl)
    },
    [searchHandler, columns]
  )
  const handleReset = useCallback(
    (clearFilters, confirm) => {
      clearFilters()
      confirm({
        closeDropdown: true
      })
      setCurrentPage(1)
      searchHandler({})
    },
    [searchHandler]
  )

  const handleChange = (pagination, filters, sorter) => {
    handleSort(sorter.field, sorter.order)
  }

  const getSearchProps = useCallback(
    (columnName, columnType) => {
      // if columnType is boolean, dropdown is an option group
      if (columnType === 'boolean') {
        return {
          sorter: (a, b, sortOrder) => {
            // sorting is handled in handleChange function (provided by antd, attached directly to table)
          },
          sortDirections: ['descend', 'ascend'],
          filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters
          }) => (
            <div className='p-3'>
              <div className='pb-3'>
                <Radio.Group
                  onChange={(e) =>
                    setSelectedKeys(e.target.value ? [e.target.value] : [])}
                  value={selectedKeys[0]}
                >
                  <Space direction='vertical'>
                    <Radio value='true'>True</Radio>
                    <Radio value='false'>False</Radio>
                  </Space>
                </Radio.Group>
              </div>
              <Space>
                <Button
                  type='primary'
                  onClick={() =>
                    handleSearch(selectedKeys, confirm, columnName, columnType)}
                  icon={<SearchOutlined />}
                  size='medium'
                >
                  Search
                </Button>
                <Button
                  onClick={() => handleReset(clearFilters, confirm)}
                  size='medium'
                >
                  Reset
                </Button>
              </Space>
            </div>
          ),
          filterIcon: (filtered) => (
            <FilterOutlined
              style={{ color: filtered ? '#1890ff' : undefined }}
            />
          )
        }
      }
      // if columnType is NOT boolean, dropdoown is input field
      return {
        sorter: (a, b, sortOrder) => {
          // sorting is handled in handleChange function (provided by antd, attached directly to table)
        },
        sortDirections: ['descend', 'ascend'],
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters
        }) => (
          <div className='p-3'>
            <Input
              placeholder={`Search ${columnName}`}
              value={selectedKeys[0]}
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() =>
                handleSearch(selectedKeys, confirm, columnName, columnType)}
              className='mb-2 d-block'
            />
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Button
                style={{ display: 'flex', alignItems: 'center' }}
                type='primary'
                onClick={() =>
                  handleSearch(selectedKeys, confirm, columnName, columnType)}
                icon={<SearchOutlined />}
              >
                Search
              </Button>
              <Button onClick={() => handleReset(clearFilters, confirm)}>
                Reset
              </Button>
            </div>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        )
      }
    },
    [handleReset, handleSearch]
  )

  return (
    <>
      hlelo
      <Row style={{ paddingTop: '10px' }}>
        <Table
          onChange={handleChange}
          loading={isLoading}
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: [10, 20, 50, 100],
            pageSize: currentPageSize,
            total: totalCount,
            current: currentPage,
            showTotal: (total) => (
              <span style={{ color: 'GrayText' }}>(Total {total} items)</span>
            ),
            onChange: (pageIndex, pageSize) => {
              setCurrentPage(pageIndex)
              setCurrentPageSize(pageSize)
              changePageHandler(pageIndex, pageSize)
            }
          }}
          rowKey={(record) => record.id} // the ID of the corresponding record is assigned as the ID
          columns={filteredColumns}
          dataSource={data}
          size='small'
          style={{ width: '100%' }}
          scroll={{ x: 1300 }}
        />
      </Row>
    </>
  )
}

export default DataTable
