interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export function Label(props: LabelProps) {
  return (
    <label
      htmlFor={props.htmlFor}
      className="block text-sm font-medium text-gray-200"
    >
      {props.children}
    </label>
  );
}
