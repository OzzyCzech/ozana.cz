import React, {memo} from 'react';

const Twemoji = ({children}) => {
  const emoji = children.codePointAt(0).toString(16);

  return (
    <img className="inline-block w-6 h-6 mb-1"
         src={`https://twemoji.maxcdn.com/v/latest/svg/${emoji}.svg`}
         alt={children}
         draggable="false"/>
  );
};

export default memo(Twemoji);