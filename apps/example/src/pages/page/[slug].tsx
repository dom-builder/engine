import { PageBuilder } from '@dom-builder/builder';
import { GetServerSidePropsContext } from 'next';

export function DynamicPage({ slug, schema }: { slug: string, schema: any }) {
    return (
        <PageBuilder builderSchema={schema} page={String(slug)} />
    );
}

export default DynamicPage;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context: GetServerSidePropsContext) {
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
    const response = await fetch(baseUrl + '/api/admin/pages')
    const data = await response.json()

    return {
      props: {
        schema: data.schema,
        theme: data.theme,
        slug: context?.params?.slug,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }

  export async function getStaticPaths() {
    return { paths: [], fallback: 'blocking' }
  }
  