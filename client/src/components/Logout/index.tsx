// ===== Material UI ===== //
import { Button } from "@mui/material";

// ===== Components ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== React Router ===== //
import { useNavigate } from "react-router-dom";

// ===== Redux ===== //
import { useAppDispatch } from "redux/hooks";
import { reset as resetUser } from "redux/slices/user/slice";
import { reset as resetSettings } from "redux/slices/settings/slice";

// ===== Styles ===== //

export default function Logout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(resetUser());
    dispatch(resetSettings());

    navigate("/");
  };

  return (
    <Button
      data-testid="logout-btn"
      color="inherit"
      variant="outlined"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}
