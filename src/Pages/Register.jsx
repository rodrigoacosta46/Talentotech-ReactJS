import { Form } from "react-bootstrap";
import InputV1 from "../components/InputV1/InputV1";
import ButtonV1 from "../components/ButtonV1/ButtonV1";
import { useUserContext } from "../Context/UserContext";

export default function Register() {
    const { register } = useUserContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        register(e.target.name.value, e.target.password.value);            
    }

  return (
    <Form className="d-flex flex-wrap gap-3" onSubmit={handleSubmit}>
      <InputV1
        id="registro-name"
        name="name"
        type="text"
        label="Nombre"
        required={true}
        feedback="Ingrese nombre de usuario"
      />
      <InputV1
        id="registro-password"
        name="password"
        type="password"
        label="Contraseña"
        required={true}
        feedback="Ingrese su contraseña"
      />
      <ButtonV1 type="submit" value="Enviar" />
    </Form>
  );
}
