import sitemap from "@/data/sitemap";
import Link from "next/link";

export default function PageNav() {
  return (
    <nav id="pageNav" className="page-nav">
      {sitemap.service.map(({ key, name, url }) => (
        <Link key={key} href={url}>
          {name}
        </Link>
      ))}
    </nav>
  );
}
