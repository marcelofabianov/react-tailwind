interface InputProps {
  type: string;
  id: string;
  value: string;
  placeholder: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {
  return (
    <input
      type={props.type}
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      required={props.required}
      onChange={props.onChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
    />
  );
}
