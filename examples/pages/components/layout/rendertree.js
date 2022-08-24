import Container from "../../../../src/components/layout/Container";
import RenderTree from "../../../../src/components/layout/RenderTree";
import tree from "../../../lib/sidebar.json";

export default function IntraNavPage({ posts }) {
  return (
    <Container>
      <RenderTree root="/reference" posts={posts.children} />
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const posts = tree;

  return { props: { posts } };
}
