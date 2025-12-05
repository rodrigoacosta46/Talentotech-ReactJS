import * as Styled from "./InputV1.styles.jsx";

export default function InputV1({
  id,
  name,
  type,
  label = "",
  required = false,
  placeholder = "",
  feedback = "",
  describedBy = "",
  txt = "",
  width = "",
  className = "",
  onChange,
}) {
  return (
    <Styled.Group className={className}>
      {label && (
        <Styled.Label htmlFor={id} className="px-2 py-1">
          {label}
        </Styled.Label>
      )}
      <Styled.Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-describedby={describedBy}
        bsPrefix={`px-3 py-2`}
        required={required}
        $w={width}
        onChange={onChange}
      />
      {describedBy && (
        <Styled.Helper id={describedBy} muted>
          {txt}
        </Styled.Helper>
      )}
      <Styled.Feedback>{feedback}</Styled.Feedback>
    </Styled.Group>
  );
}
