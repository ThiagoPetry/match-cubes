import React, { useState } from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = () => {
  const [balance, setBalance] = useState(0);
  const [progress, setProgress] = useState(0);

  const onChangeBalance = (e) => {
    setBalance(e);
  };

  const onChangeProgress = (e) => {
    setProgress(e);
  };

  return (
    <div id="login">
      <div>
        <div>
          <h1>Match Cubes</h1>
        </div>
        <div>
          <label>Usuário</label>
          <Input
            id={"username"}
            disabled={true}
          />
        </div>
        <div>
          <label>Senha</label>
          <Input
            id={"password"}
            disabled={true}
          />
          <a>Não possui uma conta? Cadastre-se aqui</a>
        </div>
        <div>
          <Button
            id={"access"}
            label={"Login"}
            disabled={true}
          />
        </div>
        <div>
          <Button
            id={"access"}
            label={"Protótipo"}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
