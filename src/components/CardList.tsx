
import { MessageCard } from './ui/MessageCard'
import Card from './ui/Card';
import { CardProps } from '../types/props'

const CardList:React.FC<CardProps> = ({filteredPhrases, deletePhrase}) => {
  return (
    <div className="flex flex-row items-center flex-wrap gap-4">
        {filteredPhrases.length ? 
          filteredPhrases.map((phrase, index) => (
            <Card key={index} index={index} phrase={phrase} onClick={deletePhrase} />
        )) : 
            <MessageCard message="No se encontró una frase" />}
    </div>
  )
}

export default CardList