import { CardListProps } from "../../types/props";
import { Button } from "./Button";

const Card: React.FC<CardListProps> = ({index, phrase, onClick}) => {
  return (
    <div key={index} className="relative bg-white p-4 rounded shadow min-w-[200px] ">
            <p>{phrase}</p>
            <Button
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              onClick={() => onClick(index)}
            >
              X
            </Button>
    </div>
  )
}

export default Card