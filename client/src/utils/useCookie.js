import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";

export function useCookie() {
  const [cookie, setCookie] = useCookies(["token"]);

  return { cookie, setCookie };
}

export function useLogout() {
  const [, , removeCookie] = useCookies(["token"]);
  // const navigate = useNavigate();

  const logOut = () => {
    removeCookie("token");
    // navigate("/", { replace: true });
  };
  return { logOut };
}
