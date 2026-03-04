import Unauthorized from "../../auth/login/unauthorized";

export default function MegaStoreApp() {
  const token = localStorage.getItem("token");
  return <>{token ? <div>MegaStoreApp</div> : <Unauthorized />}</>;
}
