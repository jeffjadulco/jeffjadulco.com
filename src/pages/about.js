import React from "react"
import Layout from "../components/layout"

const Heading = ({ children }) => {
  return (
    <h1 className="mt-12 mb-2 text-2xl font-serif font-medium text-primary">
      {children}
    </h1>
  )
}

const Paragraph = ({ children }) => {
  return (
    <p className=" max-w-screen-md mb-4 font-normal text-base leading-relaxed md:leading-normal text-secondary">
      {children}
    </p>
  )
}

const Strong = ({ children }) => {
  return <strong className="font-medium text-primary">{children}</strong>
}

const ExtLink = ({ children, link }) => {
  return (
    <a href={link} className="font-medium text-primary">
      {children}
    </a>
  )
}

const About = _ => {
  return (
    <Layout>
      <div className="container">
        <article>
          <Heading>About Me</Heading>
          <Paragraph>
            I'm Jeff Jadulco, I work full-time as a game programmer at{" "}
            <ExtLink link="https://secret6.com/">Secret 6, Inc.</ExtLink>, Inc.
            In my free time, I study front-end development with React. My goal
            is to write useful apps and contribute to open source projects.
          </Paragraph>
          <Paragraph>
            My current tech stack for game development: <Strong>Unity</Strong>,
            <Strong>Unreal Engine</Strong>, and <Strong>Phaser</Strong>
          </Paragraph>
          <Paragraph>
            For front-end development: <Strong>React</Strong>,{" "}
            <Strong>Gatsby</Strong>, <Strong>tailwindcss</Strong>
          </Paragraph>
          <Heading>Why make this website?</Heading>
          <Paragraph>
            I made this website to learn what actually goes into web
            development. From planning, design, development, launch, and
            maintenance. For sure there are other things that I have yet to
            encounter, and I’m ready to learn them.
          </Paragraph>
          <Paragraph>
            This also serves a motivation for me to continue making projects
            because now I finally have a place to showcase them.
          </Paragraph>
          <Heading>Why write a blog?</Heading>
          <Paragraph>
            Since I’m still a web development beginner, this is a good
            opportunity for me to document my learning and share my process out
            there. This is also a perfect time to practice technical writing.
          </Paragraph>
          <Heading>What else?</Heading>
          <Paragraph>
            When I’m not programming, I endlessly browse Reddit (
            <ExtLink link="https://www.reddit.com/r/gamedev/">
              /r/gamedev
            </ExtLink>
            ,
            <ExtLink link="https://www.reddit.com/r/webdev/">/r/webdev</ExtLink>
            ,{" "}
            <ExtLink link="https://www.reddit.com/r/animalsbeingderps/">
              /r/animalsbeingderps
            </ExtLink>
            ). I also love watching{" "}
            <ExtLink link="https://letterboxd.com/jeffjads/">movies</ExtLink>{" "}
            and listening to{" "}
            <ExtLink link="https://open.spotify.com/user/jeffjads">
              awesome music
            </ExtLink>
            . You can catch me playing games sometimes, I play as xKore, xKored,
            or xKoreddd.
          </Paragraph>
        </article>
      </div>
    </Layout>
  )
}

export default About
