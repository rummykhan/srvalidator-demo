import React from 'react';
import "prismjs/themes/prism-okaidia.css";

import Prism from 'prismjs';
require('prismjs/components/prism-php');
require('prismjs/components/prism-php-extras');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-python');
require('prismjs/components/prism-git');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-batch');
require('prismjs/components/prism-csharp');
require('prismjs/components/prism-powershell');
require('prismjs/components/prism-json');


const CodeBlock = (props) => {

  let html = Prism.highlight(props.literal, Prism.languages[props.language]);
  let cls = 'language-' + props.language;

  return <pre className={cls}>
      <code dangerouslySetInnerHTML={{__html: html}} className={cls}/>
    </pre>
};

export default CodeBlock;