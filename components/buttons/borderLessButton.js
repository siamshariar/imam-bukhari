import Link from "next/link";
export default function ButtonBorderLess({ link, text }) {
  return (
    <Link href={link} legacyBehavior>
      <a className="borderLess-button">{text}</a>
    </Link>
  );
}
