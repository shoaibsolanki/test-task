import React, { useState } from 'react'
import DataServies from '../Servies/requestApi'

const Form = () => {
    const [data, setData]= useState({name:"",phoneNo:"",email:"",age:"",sex:"",Govt_id:"",Id_no:"",Guardian:"",EM_Contact:"",Address:"",State:"",city:"",country:"",pincode:"",Occuption:"",Relgion:"",Marital_Status:"",blood_group:"",Nastionality:""})
    const handelsubmeit = async(e)=>{
       e.preventDefault();
  try {
    const Result = await DataServies.registertion(data)
    console.log(Result)
    setData(Result)
  } catch (error) {
    console.log(error)
  }
   }
   const onChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value})

}

  return (
    <div className='mx-3 mt-2 bg-light shadow-sm p-3 mb-5 bg-light rounded'>
        <h6><u>Personal Details</u></h6>
        <form  className="row g-6">
  <div className="col-md-6">
    <label htmlFor="name" className="form-label">
      name
    </label>
    <input type="name" name='name' value={data.name} onChange={onChange} className="form-control" minLength={3} id="name" placeholder='Enter Name' />
  </div>
  <div className="col-md-3">
    <label htmlFor="age" className="form-label">
      age
    </label>
    <input type="age" name='age' minLength={1} value={data.age} onChange={onChange}  className="form-control" id="age" placeholder='DD/MM/YYYY Or Age in year' />
  </div>
  <div className="col-md-3">
    <label htmlFor="age" className="form-label">
      sex
    </label>
    <select id="inputState" name='sex' minLength={4} value={data.sex} onChange={onChange}  className="form-select" placeholder='Enter Sex'>
      <option>male</option>
      <option>female</option>
    </select>
    
  </div>
  <div className="col-md-6">
    <label htmlFor="mobile"  className="form-label">
      Mobail
    </label>
    <input
      type="number"
      className="form-control"
    //   id="number"
      name='phoneNo'
      onChange={onChange} 
      value={data.phoneNo}
      placeholder="Enter Mobail"
    />
  </div>
  <div className="col-md-3 d-inline-block">
    <label htmlFor="Govt ID" className="form-label">
      Govt Issued ID
    </label>
    <select  
        id="Govt_id"
      name='Govt_id'
      value={data.Govt_id}
      onChange={onChange}
    className="form-select">
      <option >ID type</option>
      <option>Adhar</option>
      <option>PAN</option>
    </select>
    </div>
    <div  className="col-md-3" style={{marginTop:"30px"}}>

    <input
      type="text"
      className="form-control"
      name='Id_no'
      value={data.Id_no}
      placeholder="Enter Govt ID"
      onChange={onChange}
      minLength={data.Govt_id == "Adhar"? 10:12
      }required
      />
      </div>
      <h6 className='mt-2'><u>Contact Details</u></h6>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">
      Guardian Details
    </label>
    <input type="text" name='Guardian' value={data.Guardian} onChange={onChange} className="form-control" id="Guardian" placeholder='Enter Guardian Name' />
  </div>
  <div className="col-md-3">
    <label htmlFor="inputState" className="form-label">
      Email
    </label>
    <input type="email" name='email' value={data.email} onChange={onChange} className="form-control" id="email" placeholder='Enter Email ' />
  </div>
  <div className="col-md-3">
    <label htmlFor="inputZip" className="form-label">
    Emergency contact number
    </label>
    <input type="text"  name='EM_Contact' value={data.EM_Contact} onChange={onChange} className="form-control" id="EM_Contact" placeholder='Enter Emergency No' />
  </div>
  
      <h6 className='mt-2'><u>Address Details</u></h6>

  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">
      Address
    </label>
    <input type="text" name='Address' value={data.Address} onChange={onChange} className="form-control" id="Address" placeholder='Enter Address' />
  </div>
  <div className="col-md-3">
    <label htmlFor="inputState" className="form-label">
      State
    </label>
    <input type="text" name='State' value={data.State} onChange={onChange} className="form-control" id="state" placeholder='Enter State'/>
  </div>
  <div className="col-md-3">
    <label htmlFor="inputZip" className="form-label">
    City
    </label>
    <input type="text" name='city' value={data.city} onChange={onChange} className="form-control" id="city" placeholder='Enter City/town/village' />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputZip" className="form-label">
    Country
    </label>
    <input type="text" name='country' value={data.country} onChange={onChange} className="form-control" id="country" placeholder='Enter country' />
  </div>
  <div className="col-md-3">
    <label htmlFor="inputZip" className="form-label">
    Pincode
    </label>
    <input type="text" name='pincode' value={data.pincode} onChange={onChange} className="form-control" id="pincode" placeholder='Enter Pincode' />
  </div>
  <h6 className='mt-3'><u>Other Details</u></h6>
  <div className="col-md-3">
    <label htmlFor="inputZip" className="form-label">
    Occupation
    </label>
    <input type="text" name='Occuption' value={data.Occuption} onChange={onChange} className="form-control" id="Occuption" placeholder='Enter Occuption' />
  </div>
  <div className="col-md-3">
    <label htmlFor="inputZip" className="form-label">
     Religion
    </label>
    <input type="text" name='Relgion' value={data.Relgion} onChange={onChange} className="form-control" id="Relgion" placeholder='Enter Relgion' />
  </div>
  <div className="col-md-3">
    <label htmlFor="inputZip" className="form-label">
    Marital Status
    </label>
    <input type="text" name='Marital_Status' value={data.Marital_Status} onChange={onChange} className="form-control" id="Marital_Status" placeholder='Enter Marital Status' />
  </div>
  <div className="col-md-3">
    <label htmlFor="inputZip" className="form-label">
    Blood Group
    </label>
    <input type="text" name='blood_group' value={data.blood_group} onChange={onChange} className="form-control" id="blood_group" placeholder='Enter Blood Group' />
  </div>
  <div className="col-md-3">
    <label htmlFor="inputZip" className="form-label">
    Nationality
    </label>
    <input type="text" name='Nastionality' value={data.Nastionality} onChange={onChange} className="form-control" id="Nastionality" placeholder='Enter Nastionality' />
  </div>
  <div className="col-12 mt-1 d-flex justify-content-end">
    <button type="submit" onClick={handelsubmeit} className="btn btn-primary">
      Submit
    </button>
  </div>
</form>
</div>
  )
}

export default Form
