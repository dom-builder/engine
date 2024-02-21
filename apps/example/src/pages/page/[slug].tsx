import { PageBuilder } from '@dom-builder/builder';
import schema from '../../../tests/mocks/builder_schema.json';
import { GetServerSidePropsContext } from 'next';

export function DynamicPage({ slug }: { slug: string }) {
    return (
        <PageBuilder builderSchema={schema} page={String(slug)} />
    );
}

export default DynamicPage;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context: GetServerSidePropsContext) {
    const hour_in_seconds = 3600

    return {
      props: {
        slug: context?.params?.slug,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: hour_in_seconds, // In seconds
    }
  }

  export async function getStaticPaths() {
    return { paths: [], fallback: 'blocking' }
  }
  