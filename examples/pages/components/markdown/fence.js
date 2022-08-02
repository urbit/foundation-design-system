import Container from "../../../../src/components/layout/Container";
import Section from "../../../../src/components/layout/Section";
import SingleColumn from "../../../../src/components/layout/SingleColumn";
import Markdown from "../../../../src/components/Markdown";
import fs from "fs";
import path from "path";
export default function IntraNavPage({ markdown }) {
  return (
    <Container>
      <SingleColumn>
        <Section className="markdown">
          <h2>Fence</h2>
          <Markdown.render content={JSON.parse(markdown)} />
        </Section>
      </SingleColumn>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const markdown = JSON.stringify(
    Markdown.parse({
      post: {
        content: fs.readFileSync(path.join(process.cwd(), "./lib/post.md")),
      },
    })
  );
  return { props: { markdown } };
}
