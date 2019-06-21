import * as React from 'react';
import './style.css';


interface PhraseSelectorProps extends React.HTMLProps<HTMLDivElement> {
  value: string
  phrase: string
  className?: string
}
export const PhraseSelector = ({
  className = 'react-phrase-selector',
  value,
  phrase,
  ...props
}: PhraseSelectorProps) => {

  const loweredValue = value.toLowerCase();
  const loweredPhrase = phrase.toLowerCase();

  const phraseStart = loweredValue.indexOf(loweredPhrase);
  const phraseEnd = phraseStart + phrase.length;

  if (phraseStart === -1) {
    return (
      <>
        {value}
      </>
    );
  }

  return (
    <>
      {value.slice(0, phraseStart)}
      <strong
        className={className}
        {...props}
      >
        {value.slice(phraseStart, phraseEnd)}
      </strong>
      {value.slice(phraseEnd)}
    </>
  );
}