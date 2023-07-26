import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styled from 'styled-components';

interface MarkdownHandlerProps {
  markdown: string
}


const Prose = styled.div`
  max-width: none;
  font-size: 2rem;
`;

export function MarkdownHandler({ markdown }: MarkdownHandlerProps) {
  return (
    <ReactMarkdown
      className="prose max-w-none text-base-text dark:prose-invert"
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={dracula}
              language={match[1]}
              PreTag={Prose}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  )
}
