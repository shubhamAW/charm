import type { FC } from 'react';
import type React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid, xcode } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type IBrowseWindow = {
  child1: React.ReactNode;
  child2: React.ReactNode;
};

const BrowserWindow: FC<IBrowseWindow> = ({ child1, child2 }) => (
  <>
    <div className="hidden dark:flex">
      <div className="container dark:drop-shadow-[0px_-10px_200px_rgba(119,197,227,0.50)]">
        <div className="grid-starts-1 gap-16 pt-20 md:grid-cols-12 lg:grid">
          <div className="col-span-10 col-start-2 my-12">
            <div className="mx-auto">
              <div className="flex h-11 w-full items-center justify-start space-x-1.5 rounded-t-lg bg-[#0B0B0B] px-3 ">
                <div className="flex h-[2.7375rem] items-center justify-center border-r border-neutral-50 pr-[0.375rem]">
                  <span className="font-codeRegular font-FiraCode_Regular text-codeMDRegular leading-[4rem] text-neutral-30">
                    {child1}
                  </span>
                  <div className="ml-2 mr-2 h-[0.4063rem] w-[0.4063rem] rounded-full border-neutral-0 bg-neutral-30" />
                </div>
              </div>
              <SyntaxHighlighter
                wrapLongLines
                wrapLines
                showLineNumbers
                style={hybrid}
                language="typescript"
                className="rounded-b-lg"
                customStyle={{
                  paddingTop: '3rem',
                  paddingBottom: '3rem',
                  paddingLeft: '3rem',
                  paddingRight: '3rem',
                }}
              >
                {child2 as string}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="flex dark:hidden">
        <div className="container drop-shadow-[0px_-10px_200px_rgba(17,24,39,0.25)]">
          <div className="grid-starts-1 grid-cols-12 gap-16 pt-20 lg:grid">
            <div className="col-span-10 col-start-2 my-12">
              <div className="mx-auto">
                <div className="flex h-11 w-full items-center justify-start space-x-1.5 rounded-t-lg bg-primary-50 px-3 ">
                  <div className="flex h-[2.7375rem] items-center justify-center border-r border-neutral-50 pr-[0.375rem]">
                    <span className="font-codeRegular font-FiraCode_Regular text-codeMDRegular leading-[4rem] text-neutral-65">
                      {child1}
                    </span>
                    <div className="ml-2 mr-2 h-[0.4063rem] w-[0.4063rem] rounded-full border-neutral-0 bg-neutral-50" />
                  </div>
                </div>
                <SyntaxHighlighter
                  wrapLongLines
                  wrapLines
                  showLineNumbers
                  style={xcode}
                  className="rounded-b-lg"
                  customStyle={{
                    paddingTop: '3rem',
                    paddingBottom: '3rem',
                    paddingLeft: '3rem',
                    paddingRight: '3rem',
                  }}
                >
                  {child2 as string}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default BrowserWindow;
