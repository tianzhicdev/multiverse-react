import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import markdownFile from '../assets/multiverse.markdown?raw';

function PrivacyPolicy() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    setMarkdown(markdownFile);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <article className="prose prose-slate max-w-none">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
        <div className="mt-8 text-center">
          <a href="/" className="text-blue-600 hover:text-blue-800">Back to Home</a>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 