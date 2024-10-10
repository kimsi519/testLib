export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header>
          <h1>MyApp</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/parallel">Parallel Layout</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 My Website</p>
        </footer>
      </body>
    </html>
  );
}
