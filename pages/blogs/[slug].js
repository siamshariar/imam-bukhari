import { getBlogs, getBlogDetails, getMenu, filterMetaInfo, getSubscription } from "../../lib/fetch3";
import Banner from "../../components/ui/BannerPrimary";
import Image from 'next/image';
import HomeSubscription from "../../components/pages/home/Subscription";
import { apiServer } from "../../lib/config";
import RichText from "../../components/rich-text";
import Meta from "../../components/core/Meta";

export default function BlogPost({ blog, pageInfo, subscriptionData }) {
  if (!blog) {
    return <p className="blogslugnotFound">Blog not found!</p>;
  }

  return (
    <>

      <Meta
				title={pageInfo?.metaInfo?.title ?? ""}
				description={pageInfo?.metaInfo?.description ?? ""}
        url={`${apiServer}/blogs/${blog.slug}`}
        image={`${apiServer}/img/logo/logo.png`}
        type="website"
      />
      
      <Banner
        title={blog.title}
        subTitle=""
        bgImage="/img/banner/photo.jpg"
      />
      <section  className="blogs">
        <div className="blogslugcontainer container basic_paddings">
          <div className="blogsluglayout">
            <div className="blogslugimageWrapper">
              <Image
              src={`${apiServer}${blog.coverImage || "/placeholder.svg"}`}
                alt={blog.title}
                width={400}
                height={400}
                layout="responsive"
                className="blogslugimage"
              />
            </div>
            <div className="blogslugcontentWrapper">
              <h1 className="blogslugtitle">{blog.title}</h1>
              <p className="blogslugexcerpt">{blog.excerpt}</p>
              <RichText content={blog.content} />
            </div>
          </div>
        </div>
      </section>
      <HomeSubscription subscriptionData={subscriptionData} bgColor="#f8f8f8"/>
    </>
  );
}

export async function getStaticPaths() {
  const blogs = await getBlogs();
  const paths = blogs.map((blog) => ({ params: { slug: blog.slug } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const blog = await getBlogDetails(params.slug);
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'blogs');
  const subscriptionData = await getSubscription();
  return { props: { blog, menuItems, pageInfo, subscriptionData }, revalidate: 60,  };
}