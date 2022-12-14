export function Footer() {
  return (
    <footer className="page-footer white">
      <div className="footer-copyright blue">
        <div className="container">
          © {new Date().getFullYear()} Copyright
          <a
            className="grey-text text-lighten-4 right"
            href="https://rnzamuraev.github.io/react-shop"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
