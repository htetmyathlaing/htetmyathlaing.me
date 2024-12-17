import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h2 className="mb-4 text-2xl">About Me</h2>
      <p className="mb-4">
        I&apos;m a dedicated software engineer with strong experience in{' '}
        <span className="inline-block text-gradient"> Web Technologies</span>.
        <br />
        Primarily focused on backend technologies.
        <br />I have extensive experience with{' '}
        <Link
          href="https://laravel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-red-600 no-underline"
        >
          Laravel
        </Link>
        <br />
        I love solving complex problems and optimizing server-side performance.
        <br />I hold a degree in{' '}
        <span className="italic text-gradient">Computer Science</span> from{' '}
        <Link
          href="http://www.ucsh.edu.mm"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-gradient"
        >
          Hinthada University of Computer Studies
        </Link>
        .
      </p>
    </div>
  );
}
