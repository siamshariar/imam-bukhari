import Link from "next/link";

export default function ButtonSecondary({ link, text, size }) {
  const sizes = {
    sm: `0.3rem 2rem`,
    md: `0.8rem 2rem`,
    lg: `1rem 2.5rem`,
  };

  const btnSize = size ? sizes[size] : "";

  return (
      <Link href={link} legacyBehavior>
        <a className="button-secondary" href={link} style={{ padding: btnSize }}>
          {text}
        </a>
      </Link>
  );
}
