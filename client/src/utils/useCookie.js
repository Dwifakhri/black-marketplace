import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function useCookie() {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const logOut = () => {
    removeCookie("token");
    navigate("/", { replace: true });
  };

  return { cookie, setCookie, logOut };
}
