import React, { Fragment, useState } from 'react';
import PageTitle from '../../../../layouts/PageTitle';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createQrCode } from '../../../../../services/RestaurantService';
import { Modal } from 'react-bootstrap';
import './qr_code.css';

const GenerateQrCode = (props) => {
  const [withTableNumber, setWithTableNumber] = useState(false);
  const [fields, setFields] = useState(['']);
  const [showQrCode, setShowQrCode] = useState(false);
  const [qrCodes, setQrCodes] = useState([]);
  console.log('qrCodes', qrCodes);

  const addField = () => {
    setFields([...values.table, '']);
  };

  const removeField = (index) => {
    if (values.table.length > 1) {
      const updatedTable = [...values.table];
      updatedTable.splice(index, 1);
      setFieldValue('table', updatedTable);
    }
  };

  const validationSchema = Yup.object({
    table: Yup.array().of(Yup.string().required('Table name is required')),
  });

  const { handleChange, handleSubmit, values, setFieldValue, touched, errors } = useFormik({
    initialValues: {
      table: fields,
      clientUrl: window.location.origin,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      createQrCode(values).then((result) => {
        setQrCodes([...result]);
        setShowQrCode(true);
      });

      // resetFormFields();
    },
  });

  const handlePrint = () => {
    const qrCodeModal = document.getElementById('qrCodeModal');
    if (qrCodeModal) {
      window.print();
    }
  };

  const renderQrCodes = () => (
    <Modal className="modal fade" show={showQrCode} id="qrCodeModal">
      <div className="modal-header">
        <button type="button" className="btn btn-primary" onClick={handlePrint}>
          Print
        </button>
        <button
          type="button"
          className="btn-close"
          onClick={() => {
            setShowQrCode(!showQrCode);
            setQrCodes([]);
          }}
        ></button>
      </div>
      <div className="modal-body m-0 p-0" id="qrcodePrint">
        {qrCodes &&
          qrCodes.length > 0 &&
          qrCodes.map((qrCode, index) => {
            return (
              <div className="card rounded-0">
                <div className="card-body">
                  <h2 className="card-title m-0  p-2 rounded-2 text-center bg-light text-uppercase">{qrCode.table}</h2>
                  <img key={index} src={qrCode.qrcode} alt={`QR Code ${index}`} className="img-fluid col-12" />
                </div>
              </div>
            );
          })}
      </div>
    </Modal>
  );

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between">
        <PageTitle activeMenu="Generate" motherMenu="QR Code" />
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-5">
                  <div className="col-12">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="val-type"
                      id="val-sequential"
                      // checked={true}
                      onChange={(e) => {
                        values.table = [];
                        setFields(values.table);
                        setWithTableNumber(false);
                      }}
                    />
                    <label className="form-check-label" htmlFor="val-sequential">
                      Generate QR code without table number
                    </label>
                  </div>

                  <div className="col-12">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="val-type"
                      id="val-nonsequential"
                      onChange={(e) => {
                        values.table = [''];
                        setFields(values.table);
                        setWithTableNumber(true);
                      }}
                    />
                    <label className="form-check-label" htmlFor="val-nonsequential">
                      Generate QR code for table
                    </label>
                  </div>
                </div>

                {withTableNumber == true ? (
                  <div className="row mb-2 d-flex align-items-center flex-wrap">
                    <div className="col-sm-12  col-md-8 col-lg-8">
                      <div className="d-flex justify-content-end">
                        <div className="mb-1">
                          <i onClick={addField} className="bi bi-plus border rounded-2 m-1" style={{ fontWeight: 'bold', fontSize: '20px' }}></i>
                          {/* <span>Add</span> */}
                        </div>
                      </div>
                      {values.table.map((field, idx) => (
                        <div key={idx}>
                          <div className="d-flex">
                            <input
                              type="text"
                              className="form-control mb-2"
                              id={`table[${idx}]`}
                              name={`table[${idx}]`}
                              placeholder="Enter table name"
                              value={field}
                              onChange={(e) => {
                                const updatedTable = [...values.table];
                                updatedTable[idx] = e.target.value;
                                setFieldValue('table', updatedTable);
                              }}
                            />
                            <i
                              className="fa fa-close mt-0"
                              onClick={() => removeField(idx)}
                              style={{ fontWeight: 'bold', fontSize: '20px', padding: '10px', paddingTop: '13px' }}
                            ></i>
                          </div>
                          <div className="row">
                            {touched.table && errors.table && touched.table[idx] && errors.table[idx] && (
                              <div style={{ color: 'red' }}>{errors.table[idx]}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary">
                    Generate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {renderQrCodes()}
      </div>
    </Fragment>
  );
};

export default GenerateQrCode;
