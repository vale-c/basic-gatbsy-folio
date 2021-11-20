import React from 'react'
import './p5sound_fix'
import 'p5/lib/addons/p5.sound'
import * as p5 from 'p5'
import bradPitt from './brad-pitt.mp3'
import vaporwave from '../../assets/images/vaporwave.png'

class Circle extends React.Component {
  constructor() {
    super()
    this.myRef = React.createRef()
  }

  Sketch = p => {
    let amp,
      bg,
      canvas,
      fft,
      song,
      volHistory = []
    // Loads the music file into p5.js to play on click
    p.preload = () => {
      p.soundFormats('mp3')
      song = p.loadSound(bradPitt)
    }

    // Initial setup to create canvas and audio analyzers
    p.setup = () => {
      bg = p.loadImage(vaporwave)
      canvas = p.createCanvas(637, 835)
      canvas.mouseClicked(p.handleClick)

      amp = new p5.Amplitude()
    }

    p.draw = () => {
      p.background(bg)
      // Circle
      // let size = p.map(vol, 0, 1, 0, 800)
      // p.ellipse(325, 400, size, size)
      let vol = amp.getLevel()
      volHistory.push(vol)
      p.stroke(255)
      p.noFill()

      p.translate(320, 250)
      p.beginShape()
      for (let i = 0; i < 600; i++) {
        let r = p.map(volHistory[i], 0, 1, 200, 10)
        let x = r * p.cos(i)
        let y = r * p.sin(i)
        p.vertex(x, y)
      }
      p.endShape()

      if (volHistory.length > 360) {
        volHistory.splice(0, 1)
      }
      //ellipse(100, 100, 200, vol * 200);
    }

    // Toggles song on click
    p.handleClick = () => {
      if (song.isPlaying()) {
        if (song) {
          song.pause()
        }
      } else {
        song.play()
      }
    }
  }
  // React things to make p5.js work properly and not lag when leaving the current page below
  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  componentDidUpdate() {
    this.myP5.remove()
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  componentWillUnmount() {
    this.myP5.remove()
  }

  render() {
    return (
      <>
        <div className="flex flex-wrap lg:flex-nowrap mt-8 w-full justify-center items-center">
          <div className="flex justify-center" ref={this.myRef} />
          <div className="flex w-full font-bold flex-wrap max-w-sm lg:w-1/2 mb-4 lg:mx-6 lg:justify-start">
            <p className="w-full text-lg md:text-md lg:text-lg font-bold p-4">
              This is a{' '}
              <a
                href="https://en.wikipedia.org/wiki/Vaporwave"
                target="_blank"
                rel="noreferrer"
                className="duration-500"
              >
                <b>vaporwave-inspired</b>
              </a>{' '}
              music visualizer that I built with{' '}
              <a
                href="https://p5js.org/"
                target="_blank"
                rel="noreferrer"
                className="duration-500"
              >
                p5.js
              </a>
              <br />
              <br />
              Please <b>click</b> on the visualization to start/stop the song.
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default Circle
