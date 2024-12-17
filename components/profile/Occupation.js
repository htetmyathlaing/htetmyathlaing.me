import Link from 'next/link';

export default function Occupation() {
    return (
        <div>
            <h2 className="text-2xl mb-4">My Work</h2>
          
            <p className="mb-4">
            I&apos;m working as a <span className="text-gradient italic">Senior Software Engineer</span> at <Link href="https://carro.co.th/" target="_blank" rel="noopener noreferrer" className="text-gradient no-underline">Carro Thailand</Link>.
          </p>
        </div>
    );
}
