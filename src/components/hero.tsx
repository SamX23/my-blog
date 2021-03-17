import Image from "next/image";
import Link from "next/link";
import hero from "../../styles/hero.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function Hero({ home, name }: { home?: boolean; name: string }) {
  return (
    <>
      {home ? (
        <div className={hero.hero}>
          <div className={hero.hero__container}>
            <h1>
              Yo! I&apos;m {name} a highly motivated self-taugh Front-End Web
              Developer. 😎
            </h1>
          </div>
        </div>
      ) : (
        <div className={hero.hero__NotHome}>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </div>
      )}
    </>
  );
}
