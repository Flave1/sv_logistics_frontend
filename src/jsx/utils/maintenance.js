import React from 'react';
import constructionImage from '../../images/maintenance.png'; // Replace with the actual path to your construction image

const Maintenance = () => {
  return (
    <div className="container p-5" style={{ background: 'rgba(252, 128, 25, 0.1)',  }}>
      <div className="row justify-content-center h-100 align-items-center">
        <div className="col-8">
          <div className="form-input-content text-center">
            <img src={constructionImage} alt="Under Construction" style={{ maxWidth: '100%', marginBottom: '20px' }} />
            <h1 className="font-weight-bold">Screen Under Construction</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
