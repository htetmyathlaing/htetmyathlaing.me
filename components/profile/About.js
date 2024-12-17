import Link from 'next/link';

export default function About() {
    return (
        <div>
            <h2 className="text-2xl mb-4">About Me</h2>
            <p className="mb-4">
                I&apos;m a dedicated software engineer with strong experience in <span className="text-gradient inline-block"> Web Technologies</span>.
                <br />
                Primarily focused on backend technologies. 
                <br />
                I have extensive experience with <span className="text-red-600 font-bold">Laravel</span>. 
                <br />
                I love solving complex problems and optimizing server-side performance.
                <br />
                I hold a degree in <span className="text-gradient italic">Computer Science</span> from <Link href="http://www.ucsh.edu.mm" target="_blank" rel="noopener noreferrer" className="text-gradient no-underline">Hinthada University of Computer Studies</Link>.
            </p>
        </div>
    );
}
