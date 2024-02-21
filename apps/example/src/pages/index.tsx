export function Index() {
  return (
      <div />
  );
}

export default Index;

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/page/home',
      permanent: true,
    }
  }
}