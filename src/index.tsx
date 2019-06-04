import * as React from 'react';
import css from './style.scss';

export const PhraseSelector = ({
  value,
  phrase,
  className = css.selection,
  ...props
}: PhraseSelectorProps) => {

  const val = value.toLowerCase();
  const phrs = phrase.toLowerCase();

  const phraseStart = val.indexOf(phrs);
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
}