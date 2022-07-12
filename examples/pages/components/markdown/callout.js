import Container from "../../../../src/components/layout/Container";
import Section from "../../../../src/components/layout/Section";
import SingleColumn from "../../../../src/components/layout/SingleColumn";
import Markdown from "../../../../src/components/Markdown";
export default function CalloutPage({ markdown }) {
  return (
    <Container>
      <SingleColumn>
        <Section className="markdown">
          <h2>Callouts</h2>
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
        content: `{% callout %}This is a very important message for you.{% /callout %}`,
      },
    })
  );
  return { props: { markdown } };
}
