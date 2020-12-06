import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, Greeting, Name, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import Image from '../components/Image'

import HeaderNav from '../components/HeaderNav'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 text-md lg:text-lg`};
`
const Layout = styled.div``

const Index = () => (
  <>
    <Layout />
    <HeaderNav />
    <Parallax pages={5}>
      <Hero offset={0}>
        <Greeting>
          Hey 👋🏻 <br />
          <Name>I'm Valentina.</Name>
        </Greeting>
        <Subtitle>
          I design and shape digital products and bring them to life through
          code.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Freiheit"
            link="/blog/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my entry to Adobe's #ChallengeYourPerspective
            contest.
          </ProjectCard>
          <ProjectCard
            title="Harry Potter"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I entered the DOCMA 2017 award with this Harry Potter inspired
            image.
          </ProjectCard>
          <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Image />
          <AboutSub>
            Welcome to my personal portfolio website, the digital space where I
            share about my most recent projects & design creations and I also
            write about Tech.
          </AboutSub>
        </AboutHero>
        <AboutDesc></AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:frontendvale@gmail.com">Hi</a> or find me on
            other platforms:{' '}
            <a href="https://dribbble.com/blueberrymuffin95" target="_blank">
              Dribbble
            </a>{' '}
            &{' '}
            <a href="https://www.instagram.com/frontendvale/" target="_blank">
              Instagram
            </a>
          </ContactText>
        </Inner>
        <Footer>
          © {new Date().getFullYear()}, Built with ☕ & 💖 by
          <a
            href="https://www.valentinacalabrese.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {` `}Vale
          </a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
