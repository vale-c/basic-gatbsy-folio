import React from 'react'
import * as Styled from './styled'

const Terminal = () => {
  return (
    <Styled.TerminalContainer>
      <Styled.OuterWrapper>
        <Styled.TerminalHeader>
          <Styled.CloseButton />
          <Styled.MinButton />
          <Styled.MaxButton />
          <Styled.TerminalTitle>Terminal</Styled.TerminalTitle>
        </Styled.TerminalHeader>
        <Styled.TerminalContent>
          <Styled.Paragraph>
            Last login: Wed Sep 25 09:11:04 on ttys002
          </Styled.Paragraph>
          <Styled.TContent>$Vale$</Styled.TContent>
          <Styled.Spacer />
          <Styled.Spacer />
          <Styled.Content>
            My name is <b>Valentina</b> and I am a Front-end Software Engineer
            with a knack for
            <a
              href="https://medium.com/eightshapes-llc/defining-design-systems-6dd4b03e0ff6"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Design Systems{' '}
            </a>{' '}
            & a special interest in{' '}
            <a
              href="https://en.wikipedia.org/wiki/User-centered_design"
              target="_blank"
              rel="noopener noreferrer"
            >
              UCD
            </a>{' '}
            &{' '}
            <a
              href="https://www.a11yproject.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              a11y best-practices.
            </a>
            <Styled.Spacer />I really enjoy thinking about Usability, and love
            to make great Designs come to life through code.
          </Styled.Content>
          <Styled.Spacer />
          <Styled.Content>
            In my spare time I enjoy playing the drums 🥁, reading books about
            personal finance & self-improvement 📚, and expanding my knowledge
            about cryptocurrencies 💱.
          </Styled.Content>
          <Styled.Spacer />
          <Styled.Content>
            Check out my CV{' '}
            <a
              href="https://drive.google.com/file/d/1BWQfwZdzvKgJEWsxtYdsTVaXvOQ8YwqN/view?usp=sharing"
              target="_blank"
            >
              here
            </a>
            .{' '}
          </Styled.Content>
        </Styled.TerminalContent>
      </Styled.OuterWrapper>
    </Styled.TerminalContainer>
  )
}

export default Terminal
