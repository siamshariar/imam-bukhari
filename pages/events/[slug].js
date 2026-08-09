import Image from 'next/image';
// import { format } from 'date-fns';
import { getEventDetails, getAllEventSlugs, getSubscription } from '../../lib/fetch3';
import Banner from '../../components/ui/BannerPrimary';
import HomeSubscription from '../../components/pages/home/Subscription';
import { apiServer } from '../../lib/config';
import Meta from '../../components/core/Meta';
import RichText from '../../components/rich-text';

export default function EventPage({ event, subscriptionData }) {
  if (!event) return <div>Event not found.</div>;

  return (
    <>
      <Meta
        title={event.title}
        description={event.excerpt}
        url={`${apiServer}/events/${event.slug}`}
        image={`${apiServer}/img/logo/logo.png`}
        type="website"
      />
      <Banner
        title={event.title}
        subTitle=""
        bgImage="/img/banner/photo.jpg"
      />
      <section className="events">
        <div className="container basic_paddings">
          <div className="eventDetailLayout">
            <div className="eventDetailImageWrapper">
              <Image
                src={`https://api.kulliyatulquran.com${event.imageSrc}`}
                alt={event.title}
                width={400}
                height={400}
                style={{ objectFit: "cover", objectPosition: "center center" }}
                className="eventDetailImage"
              />
            </div>
            <div className="eventDetailContentWrapper">
              <h1 className="eventDetailTitle">{event.title}</h1>
              <p className="eventDetailDateTime">
                {/* {format(new Date(event.date), 'MMMM d, yyyy')} at{' '}
                {format(new Date(`2000-01-01T${event.time}`), 'h:mm a')} */}
              </p>
              <p className="eventDetailExcerpt">{event.excerpt}</p>
              <div className="eventDetailContent">
                <div className="contentBlock">
                    <RichText content={event.content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeSubscription subscriptionData={subscriptionData} bgColor="#f8f8f8"/>
    </>
  );
}

export async function getStaticProps({ params }) {
  const event = await getEventDetails(params.slug);
  const subscriptionData = await getSubscription();

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event, subscriptionData },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const events = await getAllEventSlugs(); 
  const paths = events.map(event => ({
    params: { slug: event.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
