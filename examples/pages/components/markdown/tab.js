import Container from "../../../../src/components/layout/Container";
import Section from "../../../../src/components/layout/Section";
import SingleColumn from "../../../../src/components/layout/SingleColumn";
import Markdown from "../../../../src/components/Markdown";
export default function TabPage({ markdown }) {
  return (
    <Container>
      <SingleColumn>
        <Section className="markdown">
          <h2>Tabs</h2>
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
        content: `
{% tabs %}

{% tab label="MacOS" %}

To install **Port** on MacOS, simply download and open the .dmg file.
        
{% /tab %}
        
{% tab label="Linux" %}
                
Or to install snap for your distribution, snapcraft provides [installation instructions](https://snapcraft.io/docs/installing-snapd).
        
{% /tab %}

{% tab label="Windows" %}
        
To install **Port** on Windows, simply download and open the .exe file.

{% /tab %}
        
{% /tabs %}`,
      },
    })
  );
  return { props: { markdown } };
}
