import Link from "next/link";
export default function ButtonPrimary({ link, text }) {
  return (
    <Link href={link} legacyBehavior>
      <a className="primary-button">{text}</a>
    </Link>
  );
}
