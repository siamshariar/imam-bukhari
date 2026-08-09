import Image from 'next/image';
import Link from 'next/link';
import { getBooks, getMenu, filterMetaInfo, getSubscription } from '../../lib/fetch3'; 
import Banner from '../../components/ui/BannerPrimary';
import HomeSubscription from '../../components/pages/home/Subscription';
import { apiServer } from '../../lib/config';
import Meta from '../../components/core/Meta';

export default function BooksPage({ books, subscriptionData, pageInfo }) {
  if (!books || books.length === 0) {
    return (
      <div className="container">
        <h1 className="title">Our Book Collection</h1>
        <p className="message">No books available at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <>
      <Meta
				title={pageInfo?.metaInfo?.title ?? "বই সমূহ"}
				description={pageInfo?.metaInfo?.description ?? ""}
        url={`${apiServer}/books`}
        image={`${apiServer}/img/logo/logo.png`}
        type="website"
      />
      <Banner
        title={pageInfo?.pageInfo?.title || "বই সমূহ"}
        subTitle=""
        bgImage="/img/banner/photo.jpg"
      />
      <section className="books basic_paddings">
        <div className="container">
          <div className="grid">
            {books.map((book) => (
              <Link href={`/books/${book.slug}`} key={book.id} className="card">
                <img
                  src={`${apiServer}${book.coverImage}`}
                  alt={`Cover of ${book.title}`}
                  width={300}
                  height={400}
                  className="bookCover"
                />
                <div className="bookInfo">
                  <h2 className="bookTitle">{book.title}</h2>
                  <p className="bookAuthor">{book.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <HomeSubscription subscriptionData={subscriptionData} bgColor="#f8f8f8"/>
    </>
  );
}

export async function getStaticProps() {
  const books = await getBooks();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'books');
  const subscriptionData = await getSubscription();

  return {
    props: { books, menuItems, pageInfo, subscriptionData },
    revalidate: 60, 
  };
}

