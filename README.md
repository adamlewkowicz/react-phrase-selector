# react-phrase-selector
React component for selecting phrases

[![Build Status](https://travis-ci.org/alk831/react-phrase-selector.svg?branch=master)](https://travis-ci.org/alk831/react-phrase-selector)

## Example
```js
import { PhraseSelector } from '@art4/react-phrase-selector';

export const ListItem = () => {
  return (
    <>
      <PhraseSelector
        value={'Interstellar'}
        phrase={'inte'}
      />
    </>
  );
}
```