import React from 'react';
import MarkdownViewer from 'react-markdown';
import contents from './contents';
import CodeBlock from './CodeBlock';


const Home = () => (
  <MarkdownViewer source={contents} renderer={{ CodeBlock: CodeBlock }}/>
);

export default Home;