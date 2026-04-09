function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="title">🐱 댄싱 캣</h1>
        <p className="subtitle">고양이와 함께 춤을!</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>🎵 음악에 맞춰 춤추는 귀여운 고양이 🎵</p>
      </footer>
    </div>
  );
}

export default Layout;
