import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Divider'
import Content from '../elements/Content'
import { UpDown, UpDownWide } from '../styles/animations'
import SVG from '../components/SVG'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.3} offset={offset}>
      <UpDown>
        <SVG
          icon="search"
          hiddenMobile
          width={48}
          stroke={colors['indigo-lighter']}
          left="5%"
          top="20%"
        />
        <SVG
          icon="send"
          width={48}
          stroke={colors['blue-light']}
          left="60%"
          top="70%"
        />
        <SVG
          icon="volumeUp"
          width={16}
          fill={colors['orange-light']}
          left="60%"
          top="15%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="notification"
          hiddenMobile
          width={16}
          fill={colors['blue-dark']}
          left="80%"
          top="10%"
        />
        <SVG
          icon="work"
          width={12}
          stroke={colors.white}
          left="90%"
          top="50%"
        />
        <SVG
          icon="search"
          width={16}
          fill={colors['grey-darker']}
          left="70%"
          top="90%"
        />
        <SVG
          icon="ticket"
          width={16}
          stroke={colors['grey-light']}
          left="30%"
          top="65%"
        />
        <SVG
          icon="setting"
          width={6}
          fill={colors['grey-light']}
          left="75%"
          top="10%"
        />
        <SVG
          icon="ticketStar"
          hiddenMobile
          width={8}
          fill={colors['indigo-light']}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG
        icon="heart"
        hiddenMobile
        width={24}
        fill={colors['red-light']}
        left="5%"
        top="70%"
      />
      <SVG
        icon="chart"
        width={6}
        fill={colors['grey-light']}
        left="4%"
        top="20%"
      />
      <SVG
        icon="play"
        width={12}
        fill={colors['grey-dark']}
        left="50%"
        top="60%"
      />
      <SVG
        icon="heart"
        width={8}
        fill={colors['grey-darkest']}
        left="95%"
        top="90%"
      />
      <SVG
        icon="chart"
        hiddenMobile
        width={24}
        fill={colors.green}
        left="40%"
        top="80%"
      />
      <SVG
        icon="star"
        width={8}
        stroke={colors['yellow-light']}
        left="25%"
        top="5%"
      />
      <SVG icon="setting" width={64} fill={colors.green} left="95%" top="5%" />
      <SVG
        icon="game"
        hiddenMobile
        width={64}
        fill={colors['purple-light']}
        left="5%"
        top="90%"
      />
      <SVG
        icon="paper"
        width={6}
        fill={colors['grey-darkest']}
        left="10%"
        top="10%"
      />
      <SVG
        icon="chat"
        width={12}
        fill={colors['grey-light']}
        left="40%"
        top="30%"
      />
      <SVG
        icon="setting"
        width={16}
        stroke={colors['green-lightest']}
        left="10%"
        top="50%"
      />
      <SVG
        icon="chat"
        width={8}
        stroke={colors['grey-darker']}
        left="80%"
        top="70%"
      />
    </Divider>
    <Content speed={0.3} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
