import { Button } from "./ButtonV1.styles.jsx";

export default function ButtonV1({ type = "button", onClick, value="", className }) {
  return (
    <Button type={type} onClick={onClick} bsPrefix={`w-100 p-2 fs-5 ${className}`}>
      {value}
    </Button>
  );
}
