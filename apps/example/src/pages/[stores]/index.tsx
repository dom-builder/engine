import { GetServerSideProps } from "next";

export function Index() {
    return (
        <div />
    );
  }
  
  export default Index;
  
  export async function getServerSideProps(context: GetServerSideProps) {
    // @ts-expect-error - context.params.stores is not null
    const stores = context?.params?.stores
    return {
      redirect: {
        destination: `/${stores}/page/home`,
        permanent: true,
      }
    }
  }