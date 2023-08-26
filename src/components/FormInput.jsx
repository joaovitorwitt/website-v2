export default function FormInput({
  classname,
  type,
  autocomplete,
  placeholder,
  required,
  id,
  action,
  value,
}) {
  return (
    <input
      type={type}
      className={classname}
      autoComplete={autocomplete}
      placeholder={placeholder}
      required={required}
      id={id}
      onChange={action}
      value={value}
    />
  );
}
