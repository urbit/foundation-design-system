import { Card, TwoUp, SingleColumn, Section, Container } from "../../../../src";

export default function DocsPage() {
  return (
    <Container>
      <SingleColumn>
        <Section className="space-y-4">
          <h2 id="eh">Card</h2>
          <TwoUp>
            <Card
              slug=""
              image="https://storage.googleapis.com/media.urbit.org/blog/2022.7.14..19.19.05-image.jpg"
              title="Building Your DAO with Pseudonymous Reputation on Urbit"
              author="Anthony Arroyo"
              ship="~poldec-tonteg"
              content="A date"
            />
            <Card
              slug=""
              image="https://storage.googleapis.com/media.urbit.org/blog/2022.7.14..19.19.05-image.jpg"
              title="Building Your DAO with Pseudonymous Reputation on Urbit"
              author="Anthony Arroyo"
              ship="~poldec-tonteg"
              content="A date"
            />
          </TwoUp>
        </Section>
      </SingleColumn>
    </Container>
  );
}
