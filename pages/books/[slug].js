import Image from 'next/image';
import Link from 'next/link';
import { getBookDetails, getBooks, getMenu, filterMetaInfo, getSubscription } from '../../lib/fetch3'; 
import Banner from '../../components/ui/BannerPrimary';
import HomeSubscription from '../../components/pages/home/Subscription';
import { apiServer } from '../../lib/config';
import RichText from '../../components/rich-text';
import Share from '../../components/core/share';
import Meta from '../../components/core/Meta';

export async function getStaticProps({ params }) {
  const book = await getBookDetails(params.slug);
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'books');
  const subscriptionData = await getSubscription();

  if (!book) {
    return { notFound: true };
  }

  return {
    props: { book, subscriptionData, menuItems, pageInfo },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const books = await getBooks();

  const paths = books.map((book) => ({
    params: { slug: book.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export default function BookPage({ book, subscriptionData, pageInfo }) {
  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Meta
        title={pageInfo?.metaInfo?.title ?? ""}
        description={pageInfo?.metaInfo?.description ?? ""}
        url={`${apiServer}/books/${book.slug}`}
        image={`${apiServer}/img/logo/logo.png`}
        type="website"
      />
      <Banner
        title={book.title}
        subTitle=""
        bgImage="/img/banner/photo.jpg"
      />
      <section className="books basic_paddings">
        <div className="bookDetailsleft">
          <div className="bookDetailsleftinner">
          <Image
            src={`${apiServer}${book.coverImage}`}
            alt={`Cover of ${book.title}`}
            width={250}
            height={350}
            className="bookCover"
          />
          </div>
        </div>
        <div className="bookInfo">
          <h1 className="bookTitleSlug">{book.title}</h1>
          <div className="bookAuthor">লেখক: <span>{book.author}</span></div>
          <div className="bookAction">
          <div className="bookBtn">
          {book.purchaseUrl ? (
            <a
              className="bookR"
              target="_blank"
              href={book.purchaseUrl} 
              rel="noopener noreferrer"
            >
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5z"></path>
                <path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99M13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83m4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24"></path>
              </svg>
              <span>ক্রয় করতে</span>
            </a>
          ) : (
            <p>ক্রয় লিংক পাওয়া যায়নি।</p>
          )}
          </div>
           <div className="bookShare">
              <Share
                urlWeb={`books/${book.slug}`}
                urlMobile={book.slug}
                title={book.name}
              />
            </div>
          </div>
          <div className="description">
            <RichText content={book.description} />
          </div>
        </div>
      </section>
      <HomeSubscription subscriptionData={subscriptionData} bgColor="#f8f8f8"/>
    </>
  );
}