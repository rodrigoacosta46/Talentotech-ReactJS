import { Form } from "react-bootstrap";
import InputV1 from "../components/InputV1/InputV1";
import ButtonV1 from "../components/ButtonV1/ButtonV1";
import { toast } from "react-toastify";
import { useUserContext } from "../Context/UserContext";

export default function Login() {
    const { login } = useUserContext();
    const error = () => toast.error("Usuario o contraseña incorrecto", {
        position: "bottom-right"
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = e.target;
        let user = JSON.parse(localStorage.getItem("user"));

        if (form.name.value != user.name || form.password.value != user.password) {
            error();
            return
        }
        login(user);
    }

    return (
        <Form className="d-flex flex-wrap gap-3" onSubmit={handleSubmit}>
            <InputV1 id="login-name" name="name" type="text" label="Nombre" required={true} />
            <InputV1 id="login-password" name="password" type="password" label="Contraseña" required={true} />
            <ButtonV1 type="submit" value="Enviar"/>
        </Form>
    )
}