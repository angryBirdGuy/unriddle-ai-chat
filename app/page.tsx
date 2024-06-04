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
      <div className="flex flex-col p-6 border max-w-xl w-full gap-6 rounded-md bg-card">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold">AI Chat Component</h1>
          <ThemeToggle />
        </div>
        <Editor initialValue={value} onChange={setValue} />
      </div>
    </main>
  );
}
