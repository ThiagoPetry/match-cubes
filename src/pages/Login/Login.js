import React from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = ({
  access,
  onChangeUsername,
  onChangePassword,
}) => {
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
            onChange={(e) => onChangeUsername(e)}
          />
        </div>
        <div>
          <label>Senha</label>
          <Input
            id={"password"}
            disabled={true}
            type={"password"}
            onChange={(e) => onChangePassword(e)}
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
            onClick={() => access()}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
