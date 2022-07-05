import Container from "../../src/components/layout/Container";
import Section from "../../src/components/layout/Section";
import SingleColumn from "../../src/components/layout/SingleColumn";
export default function Home() {
  return (
    <Container>
      <SingleColumn>
        <Section>
          <h2>Hello</h2>
        </Section>
      </SingleColumn>
    </Container>
  );
}
