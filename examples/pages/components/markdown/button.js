import Container from "../../../../src/components/layout/Container";
import Section from "../../../../src/components/layout/Section";
import SingleColumn from "../../../../src/components/layout/SingleColumn";
import Markdown from "../../../../src/components/Markdown";
export default function IntraNavPage({ markdown }) {
  return (
    <Container>
      <SingleColumn>
        <Section className="markdown">
          <h2>Button</h2>
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
        content: `{% button label="Download Port" link="https://github.com/urbit/port/releases/latest/download/Port.dmg" color="bg-green-400 text-white" %}{% /button %}`,
      },
    })
  );
  return { props: { markdown } };
}
