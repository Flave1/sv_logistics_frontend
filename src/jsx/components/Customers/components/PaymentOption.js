import React from 'react';
export default function PaymentOption(setPaymentOption) {
  return (
    <div className="card-body px-3">
      <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
        <div className="nav-link setting-bx d-flex" id="pills-account-tab">
          <input type="radio" defaultChecked name="paymentoption" onClick={() => setPaymentOption(1)} className="m-3" style={{ width: 40 }} />
          <div className="setting-info">
            <h6>Pay At The Restaurant</h6>
            <p className="mb-0">
              This option provides the flexibility for customers to pay in-person at the restaurant, ensuring a seamless and convenient dining
              experience.
            </p>
          </div>
        </div>
        <div className="nav-link setting-bx d-flex" id="pills-account-tab">
          <input type="radio" name="paymentoption" onClick={() => setPaymentOption(2)} className="m-3" style={{ width: 40 }} />
          <div className="setting-info">
            <h6>Pay on Delivery</h6>
            <p className="mb-0">
              With Pay on Delivery, customers order online and settle the payment in cash upon receiving the products. This option offers a tangible
              and secure way to pay after inspecting the items.
            </p>
          </div>
        </div>
        <div className="nav-link setting-bx d-flex" id="pills-account-tab">
          <input type="radio" name="paymentoption" onClick={() => setPaymentOption(3)} className="m-3" style={{ width: 40 }} />
          <div className="setting-info">
            <h6>Pay With Card, Bank Transfer or USSD</h6>
            <p className="mb-0">
              Pay with Card, Bank Transfer, or USSD enables digital payments, allowing customers to make purchases online using credit/debit cards,
              direct bank transfers, or USSD codes. This method ensures quick, secure, and cashless transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
