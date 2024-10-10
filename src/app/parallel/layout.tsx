import Link from 'next/link';

export default function ParallelLayout({
  children,
  login,
  profile,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
  profile: React.ReactNode;
}) {
  return (
    <>
      <header>Header...</header>
      <main>
        <h1>Parallel Layout</h1>
        <div>{profile}</div>
        <div>{login}</div>
        <hr />
        {children}
        <Link href="/parallel/aaa">GoTo AAA</Link>
      </main>
      <footer>Footer...</footer>
    </>
  );
}
