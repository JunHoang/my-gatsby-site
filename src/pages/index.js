import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

export default function index() {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatby Tutorial.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/dog.jfif"
        />
      </Layout>
    </main>
  );
}
