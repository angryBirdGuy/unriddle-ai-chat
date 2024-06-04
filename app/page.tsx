'use client';

import { useState } from 'react';
import { JSONContent } from 'novel';
import { defaultValue } from './default-value';
import { ThemeToggle } from '@/components/theme-toggle';
import Editor from '@/components/editor/advanced-editor';

export default function Home() {
  const [value, setValue] = useState<JSONContent>(defaultValue);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex flex-col p-6 border max-w-2xl w-full gap-6 rounded-md bg-card shadow-2xl">
        <div className="flex justify-center">
          <h1 className="text-[2rem] font-semibold sm:text-[3rem] mb-5 sm:mb-6 leading-[0.9] !tracking-[-0.2rem]">
            AI Chat Component
          </h1>
        </div>
        <div className="text-base">
          <Editor initialValue={value} onChange={setValue} />
        </div>
      </div>
    </main>
  );
}
