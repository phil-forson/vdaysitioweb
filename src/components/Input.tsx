const DynamicInput: React.FC<{
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ name, label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        className="text-gray-300 text-sm font-bold mb-2"
        htmlFor={name}
        aria-label={name}
      >
        {label}
      </label>
      <input
        className="w-full py-2 px-4 bg-[#1e1e2d] text-gray-300 outline-none placeholder-gray-300 focus:placeholder-gray-300 focus:bg-[#323248] rounded focus:outline-none"
        type="text"
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};
export default DynamicInput;
