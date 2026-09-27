import { useState } from 'react';
import { useRouter } from 'next/router';
import Banner from '../../components/ui/BannerPrimary';
import HomeSubscription from '../../components/pages/home/Subscription';
import { getEvents, getMenu, filterMetaInfo, getSubscription } from '../../lib/fetch3';
import Image from 'next/image';
// import { format } from 'date-fns';
import Meta from '../../components/core/Meta';
import { apiServer } from '../../lib/config';

export default function EventsPage({ events, pageInfo, subscriptionData }) {
  const router = useRouter();

  const handleEventClick = (event) => {
    router.push(`/events/${event.slug}`);
  };

  return (
    <>
      <Meta
        title={pageInfo?.metaInfo?.title ?? "Events"}
        description={pageInfo?.metaInfo?.description ?? ""}
        url={`${apiServer}/events`}
        image={`${apiServer}/img/logo/logo.png`}
        type="website"
      />
      <Banner
        title={pageInfo?.pageInfo?.title ?? "Events"}
        subTitle=""
        bgImage="/img/banner/photo.jpg"
      />
      
        <section className="events basic_paddings">
          <div className="eventscontainer container">
            <div className="eventGrid">
              {events.map((event) => (
                <div
                key={event.id}
                className="eventCard"
                onClick={() => handleEventClick(event)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleEventClick(event)} // For keyboard accessibility
              >
                <div className="eventimageWrapper">
                  <Image
                    src={`https://api.kulliyatulquran.com${event.imageSrc}`}
                    alt={event.title}
                    layout="fill"
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                  />
                </div>
                <div className="eventInfo">
                  <h2 className="eventTitle">{event.title}</h2>
                  <p className="eventExcerpt">{event.excerpt}</p>
                  <p className="eventDateTime">
                    {/* {format(new Date(event.date), 'MMMM d, yyyy')} at{' '}
                    {format(new Date(`2000-01-01T${event.time}`), 'h:mm a')} */}
                  </p>
                </div>
              </div>
              
              ))}
            </div>
          </div>
        </section>
      <HomeSubscription subscriptionData={subscriptionData} bgColor="#f8f8f8" />
    </>
  );
}

export async function getStaticProps() {
  const events = await getEvents();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'events');
  const subscriptionData = await getSubscription();

  return {
    props: {
      events,
      menuItems,
      pageInfo,
      subscriptionData,
    },
    revalidate: 60,
  };
}