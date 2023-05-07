import React, { useEffect, useState } from 'react'
import Datatable, { createTheme } from 'react-data-table-component'
import DataServies from '../Servies/requestApi'

const DataTeble = () => {
    const [data , setData] = useState([])
    const [search, setSearch]= useState("")
    const [filter, setFilter]= useState([])
    const TableData = async ()=>{
        try {
            const respones = await DataServies.TableData()
            setData(respones.data)
            setFilter(respones.data)
            console.log(respones.data)
        } catch (error) {
            console.log(error)
        }
    }
    // Colume array for table
    const Colums = [
        {
            name: "Name",
            selector: (row)=>row.name,
            sortable: true
        },
        {
            name: "Age/Sex,",   
            selector: (row)=>`${row.age}/${row.sex}`,
        },
        {
            name: "Mobile,",
            selector: (row)=>row.phoneNo,
        },
        {
            name: "Address,",
            selector: (row)=>row.Address
        },
        {
            name: "Govt ID,,",
            selector: (row)=>`${row.Govt_id}-${row.Id_no}`,
        },
        {
            name: "Guardian Details",
            selector: (row)=>row.Guardian,
        },
        {
            name: "Nationality,",
            selector: (row)=>row.Nastionality,
        },
    ]

    useEffect(()=>{
        TableData();
    },[])


    useEffect(()=>{
    const result = data.filter((data)=>{
        return data.name.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilter(result);
    },[search])

    createTheme('solarized', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#002b36',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
        //   button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
        //   disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');

  return (
    <div>
      <Datatable
       theme="solarized"
       columns={Colums}
        data={filter}
        pagination
        title="Candidate DataTable"
        fixedHeader
        fixedHeaderScrollHeight='400px'
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
             <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} className=' w-50 form-control' placeholder='Search here'/>
        }
        />
    </div>
  )
}

export default DataTeble
