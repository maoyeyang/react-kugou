import React, { Component } from 'react'
import styles from './carousel.module.styl'
import BScroll from 'better-scroll'
import { addClass } from 'common/js/dom'

interface componentsProps {
  children: any
}

interface componentsState {
  loop: boolean
  threshold: number
  autoPlay: boolean
  interval: number
  showDot: boolean
  click: boolean
  speed: number
  currentPageIndex: number
  dots: Array<any>
}

// let resizeTimer:any=null;
// let carouselBS:any = null;
// let children:any = null;
// let timer:any=null;

export default class Carousel extends Component<
  componentsProps,
  componentsState
> {
  carousel: React.RefObject<HTMLDivElement>
  carouselGroup: React.RefObject<HTMLDivElement>
  children: any
  resizeTimer: any
  carouselBS: any
  timer: any
  constructor(props: componentsProps) {
    super(props)
    this.carousel = React.createRef()
    this.carouselGroup = React.createRef()
    this.resizeTimer = null
    this.carouselBS = null
    this.children = null
    this.timer = null
    this.state = {
      loop: true,
      autoPlay: true,
      interval: 4000,
      showDot: true,
      click: true,
      threshold: 0.3,
      speed: 400,
      dots: [],
      currentPageIndex: 0
    }
  }

  componentDidMount() {
    this.update()
    window.addEventListener('resize', () => {
      if (!this.carouselBS || !this.carouselBS.enabled) {
        return
      }
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        if (this.carouselBS.isInTransition) {
          this._onScrollEnd()
        } else {
          if (this.state.autoPlay) {
            this._play()
          }
        }
        this.refresh()
      }, 60)
    })
  }

  componentWillUnmount() {
    clearTimeout(this.resizeTimer)
    clearTimeout(this.timer)
  }

  update() {
    if (this.carouselBS) {
      this.carouselBS.destroy()
    }
    this.init()
  }
  init() {
    clearTimeout(this.timer)
    this.setState({
      currentPageIndex: 0
    })
    this._setSlideWidth()
    if (this.state.showDot) {
      this._initDots()
    }
    this._initSlide()
    if (this.state.autoPlay) {
      this._play()
    }
  }
  _initDots() {
    this.setState({
      dots: new Array(this.children.length).fill(0)
    })
  }
  _initSlide() {
    if (!this.carousel.current) return
    this.carouselBS = new BScroll(this.carousel.current, {
      scrollX: true,
      scrollY: false,
      momentum: false,
      snap: {
        loop: this.state.loop,
        threshold: this.state.threshold,
        speed: this.state.speed
      },
      bounce: false,
      stopPropagation: true,
      click: this.state.click
    })
    this.carouselBS.on('scrollEnd', this._onScrollEnd.bind(this))
    this.carouselBS.on('touchEnd', () => {
      if (this.state.autoPlay) {
        this._play()
      }
    })
    this.carouselBS.on('beforeScrollStart', () => {
      if (this.state.autoPlay) {
        clearTimeout(this.timer)
      }
    })
  }
  _setSlideWidth(isResize: boolean = false) {
    if (!this.carouselGroup.current || !this.carousel.current) return
    this.children = this.carouselGroup.current.children
    let width = 0
    let sliderWidth = this.carousel.current.clientWidth
    for (let i = 0; i < this.children.length; i++) {
      let child = this.children[i]
      addClass(child, styles.carouselItem)

      child.style.width = sliderWidth + 'px'
      width += sliderWidth
    }
    if (this.state.loop && !isResize) {
      width += 2 * sliderWidth
    }
    this.carouselGroup.current.style.width = width + 'px'
  }
  _play() {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.carouselBS.next()
    }, this.state.interval)
  }
  refresh() {
    this._setSlideWidth(true)
    this.carouselBS.refresh()
  }
  _onScrollEnd() {
    let pageIndex = this.carouselBS.getCurrentPage().pageX
    this.setState({
      currentPageIndex: pageIndex
    })
    if (this.state.autoPlay) {
      this._play()
    }
  }
  render() {
    const { dots, currentPageIndex } = this.state
    return (
      <div className={styles.carousel} ref={this.carousel}>
        <div className={styles.carouselGroup} ref={this.carouselGroup}>
          {this.props.children}
        </div>
        <div className={styles.dots}>
          {dots.length &&
            dots.map((item, index) => (
              <span
                className={
                  styles.dot +
                  ' ' +
                  (currentPageIndex === index ? styles.active : '')
                }
                key={index}
              />
            ))}
        </div>
      </div>
    )
  }
}
