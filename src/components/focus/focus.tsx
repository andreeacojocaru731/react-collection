import React from "react";
import Unauthorized from "../../auth/login/unauthorized";

export default function Focus() {
  const token = localStorage.getItem("token");

  return <>{token ? <div>Focus</div> : <Unauthorized />}</>;
}
