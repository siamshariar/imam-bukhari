import Link from "next/link";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import { server, youtube } from "../../lib/config";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ClassIcon from "@mui/icons-material/Class";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import ButtonSecondary from "../buttons/buttonSecondary";

// Pages not covered by the Page Information CMS schema (no menu slot
// exists for these there), so they stay as fixed entries.
const STATIC_ITEMS = [
  { key: "bukhari-jame-masjid", displayName: "ইমাম বুখারী জামে মাসজিদ কমপ্লেক্স" },
  { key: "kulliyatul-quranil-kareem", displayName: "কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ" },
  { key: "darul-hadith-arabic-madrasa", displayName: "দারুল হাদীস অ্যারাবিক মাদরাসা" },
  { key: "donate", displayName: "দান করুন" },
];

export default function MobileNav({ navOpen, navControl, menuItems = [] }) {
  const items = [...menuItems, ...STATIC_ITEMS];

  return (
    <div id="sidemenu" className={navOpen ? "show" : ""}>
      <div
        className="container sidemenu_close"
        onClick={(e) => navControl(false)(e)}
      >
        <button className="sidemenu_close_btn toggle">
          <span></span>
        </button>
      </div>
      <div className="container sidemenu_main">
        <ul>
          {items.map((item) => (
            <li key={item.key}>
              <Link href={`/${item.key}`} legacyBehavior>
                <a className="link" onClick={(e) => navControl(false)(e)}>
                  {item.displayName}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
