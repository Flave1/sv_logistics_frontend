import React, { Fragment, useState } from 'react';
import PageTitle from '../../../../layouts/PageTitle';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';

const GenerateQrCode = (props) => {
  const [type, setType] = useState(false);
  const [isSequential, setSequential] = useState(false);
  const [isNonSequential, setNonSequential] = useState(false);

  const [fields, setFields] = useState(['']);

  const addField = () => {
    setFields([...fields, '']);
  };

  const addFieldValue = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const removeField = () => {
    if (fields.length > 1) {
      const newFields = [...fields];
      newFields.pop();
      setFields(newFields);
    }
  };

  const { handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched } = useFormik({
    initialValues: {
      start: '',
      end: '',
      table: ''
    },
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      
      if (!isSequential && !isNonSequential) {
        swal('Oops', 'Please Select Type', 'error');
        return;
      }

      if (isSequential) {
        if(!values.end || !values.start)
        {
          swal('Oops', 'Please Input Start & End Value', 'error');
          return;
        }
      }

      if (isNonSequential) {
        console.log("fields ",fields)
      }
    },
  });

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between">
        <PageTitle activeMenu="Generate" motherMenu="QR Code" />
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                {' '}
                {/*onSubmit={handleSubmit}*/}
                <div className="row mb-2">
                  <div className="col-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="val-type"
                      id="val-sequential"
                      //checked={type == false}
                      value={values.sequential}
                      onChange={(e) => {
                        handleChange('sequential');
                        setFieldValue('sequential', e.target.value);
                        setSequential(true);
                        setNonSequential(false);
                      }}
                    />
                    <label className="form-check-label" htmlFor="val-sequential">
                      Sequential
                    </label>
                  </div>
                  <div className="col-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="val-type"
                      id="val-nonsequential"
                      //checked={type == false}
                      value={values.nonsequential}
                      onChange={(e) => {
                        handleChange('nonsequential');
                        setFieldValue('nonsequential', e.target.value);
                        setSequential(false);
                        setNonSequential(true);
                      }}
                    />
                    <label className="form-check-label" htmlFor="val-nonsequential">
                      Non Sequential
                    </label>
                  </div>
                </div>
                {isSequential == true ? (
                  <div className="row mb-2">
                    <label htmlFor="val-table" className="form-label">
                      Table <span className="text-danger">*</span>
                    </label>
                    <div className="col-3">
                      <input
                        type="text"
                        className="form-control"
                        id="val-start"
                        name="val-start"
                        placeholder="Enter start value"
                        value={values.start}
                        onChange={(e) => {
                          handleChange('start');
                          setFieldValue('start', e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        type="text"
                        className="form-control"
                        id="val-end"
                        name="val-end"
                        placeholder="Enter end value"
                        value={values.end}
                        onChange={(e) => {
                          handleChange('end');
                          setFieldValue('end', e.target.value);
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                {isNonSequential == true ? (
                  <div className="row mb-2 d-flex align-items-center flex-wrap">
                    <div className="col-6">
                      <label htmlFor="val-table" className="form-label">
                        Table <span className="text-danger">*</span>
                      </label>
                      {fields.map((field, index) => (
                      <input
                        type="text"
                        className="form-control mb-2"
                        id="val-table"
                        name="val-table"
                        placeholder="Enter table name"
                        key={index}
                        value={values.field}
                        onChange={(e) => {
                          addFieldValue(index, e.target.value);
                          setFieldValue('table', e.target.value);
                        }}
                      />
                      ))}
                    </div>
                    <div className="col-3 mt-4 mt-2">
                        <button type="button" className="btn btn-primary" onClick={addField}>
                          {/* <span className="btn-icon-start text-info"> */}
                            <i className="fa fa-plus color-info"></i>
                          {/* </span> */}
                          Add
                        </button>
                    </div>
                    {fields.length > 1 ?
                    <div className="col-3 mt-4 mt-2">
                    <button type="button" className="btn btn-primary" onClick={removeField}>
                      {/* <span className="btn-icon-start text-info"> */}
                        <i className="fa fa-trash color-info"> </i>
                      {/* </span> */}
                      {/* Delete */}
                    </button>
                </div> : <div></div>  
                  }
                  </div>
                ) : (
                  <div></div>
                )}
                <div className='mt-4'>
                  <button type="submit" className="btn btn-primary">
                    Generate
                  </button>
                </div>
              </form>
                {/* <Form type={type} setType={setType} 
                isSequential={isSequential} 
                isNonSequential={isNonSequential}
                setSequential={setSequential} 
                setNonSequential = {setNonSequential}
                fields = {fields}
                addField = {addField}
                removeField = {removeField}
                handleChange ={handleChange} /> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
// function Form({ type, setType, isSequential, isNonSequential, setSequential, setNonSequential,  fields, addField, removeField, handleChange  }) {
//   <form>
//                 {' '}
//                 {/*onSubmit={handleSubmit}*/}
//                 <div className="row mb-2">
//                   <div className="col-3">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="val-type"
//                       id="val-sequential"
//                       //checked={type == false}
//                       value={type}
//                       onChange={(e) => {
//                         // handleChange('type');
//                         // setFieldValue('type', e.target.value);
//                         setSequential(true);
//                         setNonSequential(false);
//                       }}
//                     />
//                     <label className="form-check-label" htmlFor="val-sequential">
//                       Sequential
//                     </label>
//                     {/* {errors.status && touched.status && <div className="text-danger fs-12">{errors.status}</div>} */}
//                   </div>
//                   <div className="col-3">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="val-type"
//                       id="val-nonsequential"
//                       //checked={type == false}
//                       value={type}
//                       onChange={(e) => {
//                         //  handleChange('type');
//                         //  setFieldValue('type', e.target.value);
//                         setSequential(false);
//                         setNonSequential(true);
//                       }}
//                     />
//                     <label className="form-check-label" htmlFor="val-nonsequential">
//                       Non Sequential
//                     </label>
//                     {/* {errors.status && touched.status && <div className="text-danger fs-12">{errors.status}</div>} */}
//                   </div>
//                 </div>
//                 {isSequential == true ? (
//                   <div className="row mb-2">
//                     <label htmlFor="val-table" className="form-label">
//                       Table <span className="text-danger">*</span>
//                     </label>
//                     <div className="col-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="val-start"
//                         name="val-start"
//                         placeholder="Enter start value"
//                         //value={values.email}
//                         // onChange={(e) => {
//                         //   handleChange('email');
//                         //   setFieldValue('email', e.target.value);
//                         // }}
//                       />
//                       {/* {errors.email && touched.email && <div className="text-danger fs-12">{errors.email}</div>} */}
//                     </div>
//                     <div className="col-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="val-end"
//                         name="val-end"
//                         placeholder="Enter end value"
//                         //value={values.email}
//                         // onChange={(e) => {
//                         //   handleChange('email');
//                         //   setFieldValue('email', e.target.value);
//                         // }}
//                       />
//                       {/* {errors.email && touched.email && <div className="text-danger fs-12">{errors.email}</div>} */}
//                     </div>
//                   </div>
//                 ) : (
//                   <div></div>
//                 )}
//                 {isNonSequential == true ? (
//                   <div className="row mb-2 d-flex align-items-center flex-wrap">
//                     <div className="col-6">
//                       <label htmlFor="val-table" className="form-label">
//                         Table <span className="text-danger">*</span>
//                       </label>
//                       {fields.map((field, index) => (
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="val-table"
//                         name="val-table"
//                         placeholder="Enter table name"
//                         key={index}
//                         value={field}
//                         onChange={(e) => handleChange(index, e.target.value)}
//                         //value={values.email}
//                         // onChange={(e) => {
//                         //   handleChange('email');
//                         //   setFieldValue('email', e.target.value);
//                         // }}
//                       />
//                       ))}
//                       {/* {errors.email && touched.email && <div className="text-danger fs-12">{errors.email}</div>} */}
//                     </div>
//                     <div className="col-3 mt-4 mt-2">
//                         <button type="button" className="btn btn-primary" onClick={addField}>
//                           {/* <span className="btn-icon-start text-info"> */}
//                             <i className="fa fa-plus color-info"></i>
//                           {/* </span> */}
//                           Add
//                         </button>
//                     </div>
//                     {fields.length > 1 ?
//                     <div className="col-3 mt-4 mt-2">
//                     <button type="button" className="btn btn-primary" onClick={removeField}>
//                       {/* <span className="btn-icon-start text-info"> */}
//                         <i className="fa fa-trash color-info"> </i>
//                       {/* </span> */}
//                       {/* Delete */}
//                     </button>
//                 </div> : <div></div>  
//                   }
//                   </div>
//                 ) : (
//                   <div></div>
//                 )}
//                 <div className='mt-4'>
//                   <button type="submit" className="btn btn-primary">
//                     Generate
//                   </button>
//                 </div>
//               </form>
// }
export default GenerateQrCode;
