import React from 'react';
import { PhraseSelector } from '.';
import { render } from '@testing-library/react';

jest.mock('./style.css', () => ({}));

describe('<PhraseSelector />', () => {

  test('selects phrase correctly', () => {
    const { container } = render(
      <PhraseSelector
        value={"Interstellar"}
        phrase="int"
      />
    );

    expect(container).toMatchSnapshot();
  });

  test(`doesn't return selected text if phrase wasn't found`, () => {
    const { container } = render(
      <PhraseSelector
        value={"Interstellar"}
        phrase="abc"
      />
    );
    
    expect(container).toMatchSnapshot();
  });
});