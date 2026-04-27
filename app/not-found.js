import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-shell section-gap">
      <div className="surface-card p-10 text-center">
        <p className="eyebrow">Page Not Found</p>
        <h1 className="section-title">This page is not here</h1>
        <p className="section-copy mx-auto mt-4 max-w-2xl">
          The page you tried to open does not exist or may have moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Link className="cta-primary" href="/">
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
