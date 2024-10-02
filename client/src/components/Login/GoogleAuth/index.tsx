import { jwtDecode, JwtPayload } from "jwt-decode";

// ===== Material UI ===== //

// ===== Components ===== //

// ===== Constants ===== //

// ===== Google OAuth ===== //
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

// ===== Helpers ===== //

// ===== Interfaces ===== //

interface Credentials extends JwtPayload {
  email: string;
  family_name: string;
  given_name: string;
}

// ===== React Router ===== //
import { useNavigate } from "react-router-dom";

// ===== Redux ===== //
import { useAppDispatch } from "redux/hooks";
import { setUser } from "redux/slices/user/endpoints";

export default function GoogleAuth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnSuccess = (resp: CredentialResponse) => {
    const credentials = jwtDecode(
      resp && resp?.credential ? resp.credential : ""
    ) as Credentials;

    if (Object.keys(credentials).length > 0) {
      const { email, family_name, given_name } = credentials;

      const payload = {
        email,
        lastName: family_name,
        firstName: given_name,
      };

      dispatch(setUser(payload))
        .unwrap()
        .then(() => {
          navigate("/dashboard");
        })
        .catch((err) => {
          console.error("uh oh, unable to set user", err);

          navigate("/");
        });
    }
  };

  const handleOnError = () => {
    console.log("failed to log in via Google OAuth");
  };

  return <GoogleLogin onSuccess={handleOnSuccess} onError={handleOnError} />;
}
