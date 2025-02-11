export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

export interface CardListProps {
    index: number;
    phrase: string;
    onClick: (index: number) => void
}

export type InputProps = {
  type?: "text" | "email" | "password" | "number";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  className?: string;
};

export type MessageCardProps = {
  message?: string;
  className?: string;
};

export interface CardProps {
    filteredPhrases: string[]
    deletePhrase: (index: number) => void
}