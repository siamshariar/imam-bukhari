import Link from 'next/link';
import Image from 'next/image';
import { getBlogs, getMenu, filterMetaInfo, getSubscription } from '../../lib/fetch3';
import Banner from "../../components/ui/BannerPrimary";
import HomeSubscription from "../../components/pages/home/Subscription";
import { apiServer } from '../../lib/config';
import Meta from '../../components/core/Meta';

export default function Blogs({ blogs, pageInfo, subscriptionData }) {
  return (
    <>

      <Meta
				title={pageInfo?.metaInfo?.title ?? "Blogs"}
				description={pageInfo?.metaInfo?.description ?? ""}
        url={`${apiServer}/blogs`}
        image={`${apiServer}/img/logo/logo.png`}
        type="website"
      />

      <Banner
        title={pageInfo?.pageInfo?.title || "Blogs"}
        subTitle=""
        bgImage="/img/banner/photo.jpg"
      />
      <section className="blogs basic_paddings">
        <div className="blogcontainer container">
          <div className="bloggrid">
            {blogs.map((blog) => (
              <Link href={`/blogs/${blog.slug}`} key={blog.id} className="blogcard">
                <div className="blogimageWrapper">
                  <Image
                    src={`${apiServer}${blog.coverImage}`}
                    alt={blog.title}
                    width={600} 
                    height={400} 
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="blogcontent">
                  <h2 className="blogtitle">{blog.title}</h2>
                  <p className="blogexcerpt">{blog.excerpt}</p>
                  <span className="blogreadMore">আরও দেখুন...</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <HomeSubscription subscriptionData={subscriptionData} bgColor="#f8f8f8" />
    </>
  );
}

export async function getStaticProps() {
  const blogs = await getBlogs();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'blogs');
  const subscriptionData = await getSubscription();

  return { props: { blogs, menuItems, pageInfo, subscriptionData, } , revalidate: 60};
}