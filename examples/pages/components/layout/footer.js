import Container from "../../../../src/components/layout/Container";
import Section from "../../../../src/components/layout/Section";
import SingleColumn from "../../../../src/components/layout/SingleColumn";
import Footer from "../../../../src/components/layout/Footer";
export default function FooterPage() {
  const data = [
    [
      {
        title: "Urbit",
        links: [
          {
            title: "Home",
            href: "/",
          },
          { title: "Get Started", href: "/getting-started" },
          {
            title: "Manual",
            href: "/using",
          },
          {
            title: "FAQ",
            href: "/faq",
          },
          {
            title: "Events",
            href: "/events",
          },
          {
            title: "Blog",
            href: "/blog",
          },
          {
            title: "Grants",
            href: "/grants",
          },
        ],
      },
      {
        title: " ",
        links: [
          { title: "GitHub", href: "https://github.com/urbit" },
          {
            title: "Airlock APIs",
            href: "https://github.com/urbit/awesome-urbit#http-apis-airlock",
          },
          {
            title: "Urbit Binaries",
            href: "https://github.com/urbit/urbit/releases",
          },
          {
            title: "Urbit Client",
            href: "https://github.com/urbit/port/releases",
          },
          {
            title: "Issue Tracker",
            href: "https://github.com/urbit/urbit/issues",
          },
          { title: "Whitepaper", href: "https://urbit.org/audits" },
        ],
      },
    ],
    [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms-of-service" },
      { title: `lol`, href: `lol` },
    ],
  ];

  return (
    <Container>
      <SingleColumn>
        <Section className="space-y-4">
          <h2>eh</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Section>
      </SingleColumn>
      <Footer data={data} />
    </Container>
  );
}
