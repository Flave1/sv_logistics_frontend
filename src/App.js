import { lazy, Suspense, useEffect, useState } from "react";

/// Components
import Index from "./jsx";
import { connect, useDispatch } from "react-redux";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
// action
import { checkAutoLogin } from "./services/AuthService";
import { isAuthenticated } from "./store/selectors/AuthSelectors";
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";
import { socket } from "./services/socket/SocketService";
import { getAllStaff } from "./store/actions/UserActions";
import { getAllDrivers } from "./store/actions/UserActions";
import { eventActions } from "./services/socket/map-event-actions";

const SignUp = lazy(() => import("./jsx/pages/Registration"));
const ForgotPassword = lazy(() => import("./jsx/pages/ForgotPassword"));
const Login = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./jsx/pages/Login")), 500);
  });
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function App(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    checkAutoLogin(dispatch, navigate);
  }, []);

  // const [isConnected, setIsConnected] = useState(socket.connected);

  function connectToGateway(evAc) {
    if (evAc.dispatchAble) return evAc.action()(dispatch);
    else return evAc.action();
  }
  useEffect(() => {
    if (socket) {
      eventActions &&
        eventActions.forEach((evAc) => {
          socket.on(evAc.event, () => connectToGateway(evAc));
        });
  
      return () => {
        eventActions &&
          eventActions.forEach((evAc) => {
            socket.off(evAc.event);
          });
      };
    }
  }, [socket]);

  let routeblog = (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/page-register" element={<SignUp />} />
      <Route path="/page-forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
  if (props.isAuthenticated) {
    return (
      <>
        <Suspense
          fallback={
            <div id="preloader">
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
              </div>
            </div>
          }
        >
          <Index />
        </Suspense>
      </>
    );
  } else {
    return (
      <div className="vh-100">
        <Suspense
          fallback={
            <div id="preloader">
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
              </div>
            </div>
          }
        >
          {routeblog}
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

//export default connect((mapStateToProps)(App));
export default withRouter(connect(mapStateToProps)(App));
