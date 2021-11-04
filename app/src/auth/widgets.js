import { withAuthenticationRequired } from "@auth0/auth0-react";

import styles from "./styles.module.scss";
import useAuth0 from "./useAuth0";
export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div>
        <button className={styles.widgetsbtn} onClick={loginWithRedirect}>
          LOG IN
        </button>
      </div>
    </>
  );
};

export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className={styles.authLogout}
    >
      Log out
    </button>
  );
};

export const Protected = ({ component, ...props }) => {
  const Component = withAuthenticationRequired(component);
  return <Component {...props} />;
};
