/** @jsx jsx */
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'; // @ts-ignore
import List from '@lekoarts/gatsby-theme-minimal-blog/src/components/list'; // @ts-ignore
import Listing from '@lekoarts/gatsby-theme-minimal-blog/src/components/listing'; // @ts-ignore
import Title from '@lekoarts/gatsby-theme-minimal-blog/src/components/title';
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config'; // @ts-ignore
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata'; // @ts-ignore
import { visuallyHidden } from '@lekoarts/gatsby-theme-minimal-blog/src/styles/utils';
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes'; // @ts-ignore
import { Link } from 'gatsby';
import { jsx } from 'theme-ui'; // @ts-ignore
// @ts-ignore
import Bottom from '../texts/bottom';
// @ts-ignore
import Hero from '../texts/hero'; // @ts-ignore

type PostsProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
  [key: string]: any;
};

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();
  const { siteTitle } = useSiteMetadata();

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section
        sx={{
          mb: [3, 4, 5],
          p: { fontSize: [1, 2, 3], mt: 2 },
          variant: `section_hero`,
        }}
      >
        <Hero />
      </section>
      <List>
        <Bottom />
      </List>
      <Title text='Latest Posts'>
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Read all posts
        </Link>
      </Title>
      <Listing posts={posts} showTags={false} />
    </Layout>
  );
};

export default Homepage;
