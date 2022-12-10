import React from 'react';
import '../scss/Button.scss';

type Params = {
  text: string, onClick: (...args: any) => any
}

const Button = (params: Params) => {
  return <button onClick={params.onClick} className={'main-button'}>
    {params.text}
  </button>
}

export default Button;
