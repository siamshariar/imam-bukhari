import { server, apiServer } from "../../lib/config";
import Head from "next/head";

export default function Meta(props) {
  const { favicon } = props;
  const faviconUrl = favicon?.url ? `${apiServer}${favicon.url}` : `${server}/img/favicon/favicon.ico`;
  
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
      />

      <meta name="author" content="" />
      <meta name="keywords" content="" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      {/* Android phone */}
      <meta name="theme-color" content="#369fae" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* iOS phone */}
      <meta name="apple-mobile-web-app-title" content="" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#369fae" />

      {/* Windows phone */}
      <meta name="msapplication-navbutton-color" content="#369fae" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      {/* <meta name="msapplication-TileImage" content="ms-icon-144x144.png" /> */}
      {/* <meta name="msapplication-config" content="browserconfig.xml" /> */}

      {/* Pinned Sites */}
      <meta name="application-name" content="Application Name" />
      <meta name="msapplication-tooltip" content="Tooltip Text" />
      <meta name="msapplication-starturl" content="/" />

      {/* Tap highlighting */}
      <meta name="msapplication-tap-highlight" content="no" />

      {/* UC Mobile Browser */}
      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />

      {/* Disable night mode for this page */}
      <meta name="nightmode" content="disable" />

      {/* Layout mode - content="fitscreen/standard" */}
      <meta name="layoutmode" content="fitscreen" />

      {/* imagemode - show image even in text only mode */}
      <meta name="imagemode" content="force" />

      {/* Orientation */}
      <meta name="screen-orientation" content="portrait" />

      {/* format-detection */}
      <meta name="format-detection" content="telephone=no" />


      <meta property="og:locale" content="" key="oglocale" />
      <meta property="og:site_name" content="ImamBukhariTrust.com" key="ogsitename" />

      {/* meta information for twitter */}
      <meta name="twitter:card" content="ImamBukhariTrust.com" key="twcard" />
      <meta name="twitter:site" content="@ImamBukhariTrust.com" key="twsite" />
      <meta name="twitter:url" content={props.url || ""} key="twurl" />

      <meta
        name="twitter:description"
        content={props.description || ""}
        key="twdesc"
      />
      <meta name="twitter:image" content={props.image || ""} key="twimage" />

      {/* favicon */}
      {/* Main Link Tags */}
      <link
        href={`${server}/img/favicon/favicon.png`}
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href={`${server}/img/favicon/favicon.png`}
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link
        href={`${server}/img/favicon/favicon.png`}
        rel="icon"
        type="image/png"
        sizes="48x48"
      />

      {/* iOS */}
      <link href={`${server}/img/favicon/favicon.ico`} rel="apple-touch-icon" />
      <link
        href={`${server}/img/favicon/favicon.ico`}
        rel="apple-touch-icon"
        sizes="76x76"
      />
      <link
        href={`${server}/img/favicon/favicon.ico`}
        rel="apple-touch-icon"
        sizes="120x120"
      />
      <link
        href={`${server}/img/favicon/favicon.ico`}
        rel="apple-touch-icon"
        sizes="152x152"
      />
      <link
        href={`${server}/img/favicon/favicon.ico`}
        rel="apple-touch-icon"
        sizes="180x180"
      />

      {/* Startup Image */}
      <link
        href="touch-icon-start-up-320x480.png"
        rel="apple-touch-startup-image"
      />

      {/* Pinned Tab */}
      <link href="path/to/icon.svg" rel="mask-icon" size="any" color="red" />

      {/* Android */}
      <link
        href={`${server}/img/favicon/favicon.ico`}
        rel="icon"
        sizes="192x192"
      />
      <link
        href={`${server}/img/favicon/favicon.ico`}
        rel="icon"
        sizes="128x128"
      />

      {/* UC Browser */}
      <link
        href={faviconUrl}
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
      />
      <link
        href={faviconUrl}
        rel="apple-touch-icon"
        sizes="72x72"
      />

      {/* Others */}
      <link
        href={faviconUrl}
        rel="shortcut icon"
        type="image/x-icon"
      />

      {/* page title */}
      <title>{props.title ? `${props.title} | ইমাম বুখারী ট্রাস্ট` : "ইমাম বুখারী ট্রাস্ট"}</title>
        <meta name="description" content={props.description || ""} />



        {/* meta information for facebook */}
        <meta property="og:title" content={props.title + " ইমাম বুখারী ট্রাস্ট "} key="ogtitle" />
        <meta property="og:url" content={props.url || ""} key="ogurl" />
        <meta property="og:image" content={props.image || ""} key="ogimage" />
        <meta property="og:type" content={props.type || "website"} key="ogtype" />
        <meta
            property="og:description"
            content={props.description || ""}
            key="ogdesc"
        />

        <meta name="twitter:title" content={props.title  + " ইমাম বুখারী ট্রাস্ট "} key="twtitle" />






      {/* Manifest.json */}
      {/* <link href="/manifest.json" rel="manifest" /> */}

      {/* material icons - Icon Library */}
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />
    </Head>
  );
}
