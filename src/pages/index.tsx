/**
 * TODO: Under construction. Just learning React for now.
 */

import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

// data
const links = [
  {
    text: "Skynet Token Spec",
    url: "https://gitlab.com/SkynetLabs/skynet-token/-/blob/main/docs/spec.md",
    description: "Click here to learn about the technical details of Skynet Token.",
    color: "#E95800",
  },
  {
    text: "Skynet Kernel",
    url: "https://github.com/SkynetLabs/skynet-kernel",
    description: "Click here to learn more about the Skynet kernel.",
    color: "#1099A8",
  },
  {
    text: "libkernel",
    url: "https://www.npmjs.com/package/libkernel",
    description:
      "A node module for web developers that would like to use the Skynet kernel in their applications, or would like to build modules for the Skynet kernel",
    color: "#BC027F",
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Skynet Token Wallet Foundation</h1>
      <p style={paragraphStyles}>
        <code style={codeStyles}>TODO:</code> Login using kernel. 😎
      </p>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
