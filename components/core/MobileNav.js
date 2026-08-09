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

export default function MobileNav({ navOpen, navControl }) {
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
          <li>
            <Link href="/" legacyBehavior>
              <a className="link" onClick={(e) => navControl(false)(e)}>
                 হোম
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="link" onClick={(e) => navControl(false)(e)}>
                 আমাদের সম্বন্ধে
              </a>
            </Link>
          </li>
          <li>
            <Link href="/bukhari-jame-masjid" legacyBehavior>
              <a className="link" onClick={(e) => navControl(false)(e)}>
                ইমাম বুখারী জামে মাসজিদ কমপ্লেক্স
              </a>
            </Link>
          </li>
          <li>
            <Link href="/kulliyatul-quranil-kareem" legacyBehavior>
              <a className="link" onClick={(e) => navControl(false)(e)}>
                কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ
              </a>
            </Link>
          </li>
          <li>
            <Link href="/darul-hadith-arabic-madrasa" legacyBehavior>
              <a className="link" onClick={(e) => navControl(false)(e)}>
                দারুল হাদীস অ্যারাবিক মাদরাসা
              </a>
            </Link>
          </li>

          {/*<li>*/}
          {/*  <Link href="/members">*/}
          {/*    <a className="link" onClick={(e) => navControl(false)(e)}>*/}
          {/*       একাডেমিক কমিটি*/}
          {/*    </a>*/}
          {/*  </Link>*/}
          {/*</li>*/}


          <li>
            <Link href="/videos/UUBTHMWdAFuQ5ynEryDIWdRw" legacyBehavior>
              <a className="link" onClick={(e) => navControl(false)(e)}>
                ভিডিও সমূহ
              </a>
            </Link>
          </li>

          <li>
            <Link href="/faqs" legacyBehavior>
              <a className="link" onClick={(e) => navControl(false)(e)}>
                প্রায়শই জিজ্ঞাসিত প্রশ্ন
              </a>
            </Link>
          </li>

          <li>
            <Link href="/contact" legacyBehavior>
              <a className="link" onClick={(e) => navControl(false)(e)}>
                যোগাযোগ
              </a>
            </Link>
          </li>

          <li>
            <Link href="/donate" legacyBehavior>
              <a className="link" onClick={(e) => navControl(false)(e)}>
                দান করুন
              </a>
            </Link>
          </li>


          {/* <li>
        <a href="#" className="link">Testimonials</a>
        </li> */}
          {/* <li className="contact_us__btn">
        <a className="link" onClick={(e) => navControl(false)(e)}>Let's Connect</a>
        </li>  */}
        </ul>
      </div>
    </div>
  );
}
