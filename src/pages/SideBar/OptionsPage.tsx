import type { Option , YouOptions} from "../../types/OptionsTypes";

type others = Option | YouOptions

interface OptionPageProps {
    option: others,
    selected: string,
    setSelected: (title: string) => void;
}

const OptionsPage: React.FC<OptionPageProps> = ({ option, selected, setSelected }) => {
    return (
      <li
        onClick={() => setSelected(option.title)}
        className={`
          flex items-center gap-3 w-full h-[40px] p-2 rounded-r-[10px] cursor-pointer text-[14px] text-[#0f0f0f]
          border-l-4
          ${
            selected === option.title
              ? "border-red-600 bg-gray-200 font-medium"
              : "border-transparent hover:bg-gray-200"
          }
        `}
      >
        <span>{option.icon}</span>
        <span>{option.title}</span>
      </li>
    );
  };
  
  export default OptionsPage;
  