import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
export default function signout() {
  setToken(null);
  navigate("/");
}
