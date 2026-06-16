function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="page-header">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
}

export default PageHeader;
