import Container from "../../src/components/layout/Container";
import Section from "../../src/components/layout/Section";
import SingleColumn from "../../src/components/layout/SingleColumn";
import Footer from "../../src/components/layout/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <Container>
      <SingleColumn>
        <Section className="space-y-4">
          <h2>Component library examples</h2>
          <p>
            Click each page below to see an example of the component in use.
          </p>
        </Section>
        <Section short className="flex space-x-8">
          <div>
            <h3>Layout</h3>
            {process.env.layout
              .map((item) => ({
                ...item,
                link: `/components/layout/${item.link}`,
              }))
              .map((item) => (
                <li key={item.link}>
                  <Link href={item.link} passHref>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
          </div>
          <div>
            <h3>Markdown</h3>
            {process.env.markdown
              .map((item) => ({
                ...item,
                link: `/components/markdown/${item.link}`,
              }))
              .map((item) => (
                <li key={item.link}>
                  <Link href={item.link} passHref>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
          </div>
          <div>
            <h3>UI</h3>
            {process.env.ui
              .map((item) => ({
                ...item,
                link: `/components/ui/${item.link}`,
              }))
              .map((item) => (
                <li key={item.link}>
                  <Link href={item.link} passHref>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
          </div>
        </Section>
      </SingleColumn>
    </Container>
  );
}
