import type React from "react"
import type { Suggestions } from "../../types/OptionsTypes"


interface SuggestionPageProps {
    t: Suggestions,
    selected : string,
    setSelected : (title : string) => void;
    index: number
}

const SuggestionPage: React.FC<SuggestionPageProps> = ({t,selected,setSelected,index}) => {
  return (
    <div>
        <div
            onClick={() => setSelected(t.title)}
            key={index}
            className={`inline-flex items-center h-[32px] px-3 border bg-gray-200 rounded-[8px] cursor-pointer text-sm whitespace-nowrap ${
              selected === t.title
                ? "bg-gray-300 font-medium"
                : "border-transparent hover:bg-gray-300"
            }`}
          >
            <span key={t.title} className="">
              {t.title}
            </span>
          </div>
    </div>
  )
}

export default SuggestionPage