import Link from "next/link";

const LegalLayout = ({ children }) => {
  return (
    <div className="max-w-prose mx-auto p-10 md:p-0 md:mt-10">
      <Link className="btn btn-ghost text-lg mb-10" href="/tech">
        <span className="mr-1 text-xl">←</span>Back
      </Link>
      <article className="prose prose-sm sm:prose lg:prose-lg">
        {children}
      </article>
    </div>
  );
};

export default LegalLayout;
