import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"

function PaginatePage(props: {page: number}) {
  return <>{props.page}</>
}

export const getStaticProps: GetStaticProps = ({ params }: GetStaticPropsContext) => {
  const page = Number(params?.page) || 1;

  if (page === 1) {
    return {
      redirect: {
        destination: '/about',
        permanent: false,
      }
    }
  }
  return {
    props: {
      page,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Array.from({length: 5}).map((_, i) => `/about/${i + 2}`),
    fallback: 'blocking'
  }
}

export default PaginatePage