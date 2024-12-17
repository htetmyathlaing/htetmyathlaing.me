import React from 'react';
import Link from 'next/link';

export default function Occupation() {
  return (
    <div>
      <h2 className="mb-4 text-2xl">Occupation</h2>

      <p className="mb-4">
        I&apos;m working as a{' '}
        <span className="italic text-gradient">Senior Software Engineer</span>{' '}
        at{' '}
        <Link
          href="https://carro.co.th/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-gradient"
        >
          Carro Thailand
        </Link>
        .
      </p>
    </div>
  );
}
