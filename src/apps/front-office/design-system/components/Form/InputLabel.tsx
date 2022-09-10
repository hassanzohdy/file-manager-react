export default function InputLabel({ children, required, ...props }: any) {
  if (!children) return null;

  return (
    <label {...props}>
      <span>{children}</span>
      {required && <strong>*</strong>}
    </label>
  );
}
