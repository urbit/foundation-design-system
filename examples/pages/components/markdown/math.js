import Container from "../../../../src/components/layout/Container";
import Section from "../../../../src/components/layout/Section";
import SingleColumn from "../../../../src/components/layout/SingleColumn";
import Markdown from "../../../../src/components/Markdown";
export default function IntraNavPage({ markdown }) {
    return (
        <Container>
            <SingleColumn>
                <Section className="markdown">
                    <h2>Math</h2>
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
                content: String.raw`{% math %}\sum_{2}^{\longrightarrow \beta}\equiv \beta\beta\beta\beta{% /math %}`,
            },
        })
    );
    return { props: { markdown } };
}
