import {
  $,
  C$,
  css,
  hasClass,
  addClass,
  getStyle,
  addEvent,
  removeClass,
  removeEvent,
  removeA
} from './components/domUtility'


(function (window, undefined) {

  'use strict'

  class likeCO {

    // --------------------------likeCO  constructor-------------------------- //
    constructor(elm, options, bol) {
      this.elmcall = elm
      this.elements = document.querySelectorAll(this.elmcall)
      this.options = {}
      this.bol = bol

      for (var prop in likeCO.defaults) {
        this.options[prop] = likeCO.defaults[prop]
      } ''

      for (prop in options) {
        this.options[prop] = options[prop]
      }

      this.int()
    }

    // --------------------------likeCO  method-------------------------- //
    _creatElements() {
      const modalConatiner = document.createElement('div')
      modalConatiner.classList.add('likco_modal_conatiner')

      const title = document.createElement('h2')
      title.innerHTML = this.options.title

      const msg = document.createElement('p')
      msg.innerHTML = this.options.msg

      const suggestlink = document.createElement('a')
      suggestlink.setAttribute('href', `${this.options.suggestlink.link}`)
      suggestlink.innerHTML = this.options.suggestlink.text

      const wE = [title, msg, suggestlink]
      wE.forEach(element => modalConatiner.appendChild(element));

      this.modalConatiner = modalConatiner
    }

    _appendElement(e) {
      if (this.appended == 0) {
        const body = document.querySelector('body')
        body.appendChild(this.modalConatiner)
        this._modalPosition(e)
        this.appended = !0
      }
    }

    _removeElement() {
      if (this.appended) {
        const body = document.querySelector('body')
        body.removeChild(this.modalConatiner)
        this.appended = 0
      }
    }

    _modalPosition(event) {
      let top = event.clientY
      let left = event.clientX
      const height = (getStyle(this.modalConatiner).height).match(/\d/g).join('')
      const pt = (getStyle(this.modalConatiner).paddingTop).match(/\d/g).join('')
      const pb = (getStyle(this.modalConatiner).paddingBottom).match(/\d/g).join('')
      const totalHeight = Number(height) + Number(pt) + Number(pb)

      console.log( height);

      if (event.clientY > totalHeight) {
        top -= totalHeight
      } else {
        top = event.clientY + 30
      }

      css(this.modalConatiner, {
        top: `${top}px`,
        left: `${left}px`,
      })
    }

    _scrollToRemove() {
      const scrollContainer = document.querySelector(this.options.scrollContainer)

      scrollContainer.addEventListener('scroll', () => {
        this._removeElement()
      })
    }

    _bodyCLickToRemove() {
      window.addEventListener('click', (e) => {
        const scc = removeA(this.elmcall.split(''), '.').toString()
        const sccc = scc.replace(/,/g, "")
        const pc = e.target.parentNode.classList[0]
        const tc = e.target.classList[0]

        if (this.appended == !0 && pc !== 'likco_modal_conatiner' && tc !== 'likco_modal_conatiner' && pc !== sccc && tc !== sccc)
          this._removeElement()
      })
    }

    _creat() {
      this._creatElements()

      this.appended = 0

      this.elements.forEach(em => em.addEventListener('click', (e) => this._appendElement(e)))

      this._bodyCLickToRemove()
      this._scrollToRemove()
    }

    int() {
      if (this.bol == !0)
        this._creat()
    }
  }

  // -------------------------- likeCO  defaults option-------------------------- //
  likeCO.defaults = {
    scrollContainer: 'body',
    title: `Opps!`,
    msg: `You don't have permission to access`,
    suggestlink: {
      text: 'visit this link',
      link: '#'
    }
  }

  window.likeCO = likeCO

})(window)

export default likeCO
