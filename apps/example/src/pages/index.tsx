export function Index() {
  return (
      <div />
  );
}

export default Index;

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/404',
      permanent: true,
    }
  }
}