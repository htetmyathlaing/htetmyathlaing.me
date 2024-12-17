import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Htet Myat Hlaing - Portfolio</title>
      </Head>
      <div className="relative flex flex-col items-center pb-8 bg-gray-100">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-y-[-135%] translate-y-[-72%]" >
          <Image src="/img/profile.jpeg" alt="Profile" width={128} height={128} className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />
        </div>
        <div className="text-left max-w-3xl space-y-4 px-4 bg-gray-100 md:pt-0 pt-12">
          <h1 className="text-4xl font-bold text-center">Htet Myat Hlaing</h1>
          <p className="text-center text-lg text-gray-700">Just a man who wants to live alive peacefully...</p>
          <p className="text-lg">I&apos;m a dedicated software engineer with 7+ years of experience in web technologies.</p>
          <p className="text-lg">Although primarily
          focused on backend technologies, frontend development capabilities are also in production experience.</p>
          <p className="text-lg">
            I hold a degree in <span className="font-bold">Computer Science</span> from <Link href="http://www.ucsh.edu.mm" target="_blank" rel="noopener noreferrer" className="text-indigo-500 no-underline">Hinthada University of Computer Studies</Link>.
          </p>
          <p className="text-lg">
            I work as a <span className="font-bold italic">Senior Software Engineer</span> at <Link href="https://carro.co.th/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 no-underline">Carro Thailand</Link>.
          </p>
          <p className="text-lg">
            You can connect with me through <Link href="https://www.facebook.com/htetmyathlaing" target="_blank" rel="noopener noreferrer" className="text-indigo-500 no-underline">Facebook</Link> and <Link href="https://www.linkedin.com/in/htetmyathlaing" target="_blank" rel="noopener noreferrer" className="text-indigo-500 no-underline">LinkedIn</Link>.
          </p>
          <p className="text-lg">
            My technical articles are available on <Link href="/blogs" target="_blank" rel="noopener noreferrer" className="text-indigo-500 no-underline">My Blogs</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
