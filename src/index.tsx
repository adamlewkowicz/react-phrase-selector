import * as React from 'react';
import './style.css';


interface PhraseSelectorProps {
  value: string
  phrase: string
  className?: string
}
export const PhraseSelector = ({
  className = 'react-phrase-selector',
  ...props
}: PhraseSelectorProps) => {

  const loweredValue = props.value.toLowerCase();
  const loweredPhrase = props.phrase.toLowerCase();

  const phraseStart = loweredValue.indexOf(loweredPhrase);
  const phraseEnd = phraseStart + props.phrase.length;

  if (phraseStart === -1) {
    return (
      <>
        {props.value}
      </>
    );
  }

  return (
    <>
      {props.value.slice(0, phraseStart)}
      <strong {...props}>
        {props.value.slice(phraseStart, phraseEnd)}
      </strong>
      {props.value.slice(phraseEnd)}
    </>
  );
}