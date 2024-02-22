import React, { Fragment, useEffect, useState } from 'react';
import PageTitle from '../../../../layouts/PageTitle';
/// images
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import { MenuList } from '../../../../layouts/nav/Menu';
import { getUserPermissions, savePermissionSettings } from '../../../../../services/RestaurantService';
import { useLocation } from 'react-router-dom';
import { spinner } from '../../../../../store/actions';

const Permissions = () => {
  const [userPermissiions, setUserPerms] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  var searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('userid');
  const type = searchParams.get('type');
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const permissions = await getUserPermissions(userId, type);
      setUserPerms(permissions);
    }
    userId && type && fetchData();
  }, []);

  useEffect(() => {
    userPermissiions && setSelected(userPermissiions?.permissions);
  }, [userPermissiions]);

  const {
    auth: { restaurantId },
  } = useSelector((state: any) => state.auth);

  function check(permission: string): boolean {
    return (userPermissiions && userPermissiions.permissions.includes(permission)) || false;
  }

  function updateSelected(permission) {
    const itemExists = selected.includes(permission);
    if (itemExists) {
      setSelected(selected.filter((de) => de !== permission));
    } else {
      setSelected([...selected, permission]);
    }
  }

  function renderChecbox(item) {
    const isCheck = check(item?.to);
    return (
      <div className="form-group " style={{ marginLeft: '40px' }}>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={() => {
              updateSelected(item?.to);
            }}
            id="check1"
            value=""
            checked={selected.find((d) => d == item?.to) !== undefined}
          />
          <label
            className="form-check-label"
            // htmlFor="check1"
          >
            {item?.title}
          </label>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <Row>
        <Col xl="6" style={{ margin: 'auto' }}>
          <Card>
            <Card.Header className="d-flex">
              <div className="d-block justify-content-between">
                <Card.Title>Permissions setup for {userPermissiions?.name}</Card.Title>
                <Card.Text className="m-0 subtitle">
                  user type: <code>{userPermissiions?.userType}</code> selected permissions: <code>({selected.length})</code>
                </Card.Text>
              </div>
              <div className="d-block">
                <Button
                  className="btn-sm"
                  onClick={async () => {
                    const payload = {
                      permissions: selected,
                      type: Number(type),
                      userId: Number(userId),
                    };
                    dispatch(spinner(true));
                    await savePermissionSettings(payload);
                    dispatch(spinner(false));
                  }}
                >
                  SAVE
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion className="accordion accordion-solid-bg" defaultActiveKey="0">
                {MenuList.map((d, i) => (
                  <Accordion.Item key={i} eventKey={`${i}`}>
                    <Accordion.Header className="accordion-header  accordion-header-primary">
                      <span className="accordion-header-icon"></span>
                      <strong className="accordion-header-text">{d.title}</strong>
                      <span className="accordion-header-indicator "></span>
                    </Accordion.Header>
                    <Accordion.Collapse eventKey={`${i}`} className="accordion__body">
                      <div className="accordion-body">
                        {d.content && d.content.length > 0 ? (
                          d.content.map((_men, i) => (
                            <Accordion.Item className="accordion-item" key={i} eventKey={`${i}`}>
                              {renderChecbox(_men)}
                            </Accordion.Item>
                          ))
                        ) : (
                          <Accordion.Item className="accordion-item" key={i} eventKey={`${i}`}>
                            {renderChecbox(d)}
                          </Accordion.Item>
                        )}
                      </div>
                    </Accordion.Collapse>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Permissions;
