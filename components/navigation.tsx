import Link from "next/link";
import navigation from "../styles/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={navigation.nav__Bar}>
      <ul className={navigation.nav__Menu}>
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/github">
          <a>
            <li>Github</li>
          </a>
        </Link>
        <Link href="/blog">
          <a>
            <li>Blog</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
}
