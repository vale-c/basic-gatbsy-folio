import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Divider'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, #5433FF 0%, #20BDFF 50%, #A5FECB 100%)"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <SVG
          icon="bookmark"
          width={6}
          fill={colors.grey}
          left="85%"
          top="75%"
        />
        <SVG icon="upDown" width={8} fill={colors.teal} left="70%" top="20%" />
        <SVG icon="play" width={8} stroke={colors.orange} left="25%" top="5%" />
        <SVG
          icon="send"
          hiddenMobile
          width={24}
          fill={colors.white}
          left="17%"
          top="60%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          fill={colors.green}
          left="20%"
          top="90%"
        />
        <SVG
          icon="paper"
          width={12}
          stroke={colors.white}
          left="90%"
          top="30%"
        />
        <SVG icon="play" width={16} fill={colors.yellow} left="70%" top="90%" />
        <SVG
          icon="game"
          hiddenMobile
          width={16}
          stroke={colors.teal}
          left="18%"
          top="75%"
        />
        <SVG icon="wallet" width={6} fill={colors.white} left="75%" top="10%" />
        <SVG
          icon="arrowUpSquare"
          hiddenMobile
          width={8}
          fill={colors.green}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG icon="game" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="star" width={12} fill={colors.pink} left="80%" top="60%" />
      <SVG icon="wallet" width={6} fill={colors.orange} left="10%" top="10%" />
      <SVG
        icon="setting"
        width={12}
        fill={colors.yellow}
        left="29%"
        top="26%"
      />
      <SVG
        icon="timeCircle"
        width={16}
        stroke={colors['pink-light']}
        left="75%"
        top="30%"
      />
      <SVG
        icon="arrowUpSquare"
        width={8}
        stroke={colors.yellow}
        left="80%"
        top="70%"
      />
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
