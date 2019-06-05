import * as React from 'react';
import css from './style.scss';
import { StandardLonghandProperties } from 'csstype';

export const defaultStyle: StandardLonghandProperties = {
  backgroundColor: '#79FEE0'
}

export const PhraseSelector = ({
  value,
  phrase,
  className = css.selection,
  style = defaultStyle,
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
      <strong style={style} {...props}>
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
  style: StandardLonghandProperties
  [strongProps: string]: any
}