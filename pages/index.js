export default function Home() {
  return <div>Home</div>;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/manga_list',
      permanent: false,
    },
  };
}
