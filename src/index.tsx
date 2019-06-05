import * as React from 'react';
import css from './style.scss';

export const PhraseSelector = ({
  value,
  phrase,
  className = css.selection,
  ...props
}: PhraseSelectorProps) => {

  const loweredValue = value.toLowerCase();
  const loweredPhrase = phrase.toLowerCase();

  const phraseStart = loweredValue.indexOf(loweredPhrase);
  if (phraseStart === -1) return value;
  const phraseEnd = phraseStart + phrase.length;

  return (
    <>
      {value.slice(0, phraseStart)}
      <strong className={className} {...props}>
        {value.slice(phraseStart, phraseEnd)}
      </strong>
      {value.slice(phraseEnd)}
    </>
  )
}

interface PhraseSelectorProps {
  value: string
  phrase: string
  className: string
  [strongProps: string]: any
}