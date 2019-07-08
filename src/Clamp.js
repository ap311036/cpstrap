/*
* Clamp
* 提供簡化文字過長的方法，依據行數
* afterEllipsisText 若有文字，則可以進行展開關閉；若無文字，則無法點擊展開。
* 若 text 為 HTML，afterEllipsisText 不能為空值。（使用 HTMLResponsiveEllipsis）
* @version 0.0.1
* @param {string} text - 提供之文字（text or html）
* @param {number} maxLine - 最大行數
* @param {string} ellipsis - 簡化後附加的符號
* @param {string} afterEllipsisText - 簡化後附加的文字
* @param {string} afterEllipsisClass - 簡化後附加文字的 class
* @param {string} basedOn - 依據 letters 或 words 進行裁切
* @param {bool} isTrimRight - 清除字尾的空白（僅發揮在 afterEllipsis 為空值）
*/

import React from 'react';
import ReactEllipsis from 'react-lines-ellipsis';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

const ReactResponsiveEllipsis = responsiveHOC()(ReactEllipsis);
const HTMLResponsiveEllipsis = responsiveHOC()(HTMLEllipsis);

class Clamp extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClamp = this.toggleClamp.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.delayTimer = null;
    this.state = {
      hasDelay: props.delay > 0,
      isUsingClamp: !props.manualOpen
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isUsingClamp } = this.state;
    const { closeCallback, openCallback, manualOpen } = this.props;

    if (manualOpen !== prevProps.manualOpen) {
      if ((manualOpen && isUsingClamp) || (!manualOpen && !isUsingClamp)) {
        this.toggleClamp();
      }
    }

    if (isUsingClamp && !prevState.isUsingClamp && closeCallback) {
      closeCallback();
    } else if (!isUsingClamp && prevState.isUsingClamp && openCallback) {
      openCallback();
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  toggleClamp() {
    const { isUsingClamp } = this.state;
    const { afterEllipsisText, forceDisable } = this.props;

    if (afterEllipsisText !== '' && !forceDisable) {
      this.setState({
        isUsingClamp: !isUsingClamp
      });
    }
  }

  delayUpdate() {
    const { delay } = this.props;

    if (delay > 0) {
      clearTimeout(this.delayTimer);
      this.setState({
        hasDelay: true 
      });
      this.delayTimer = setTimeout(() => {
        this.setState({
          hasDelay: false
        });
      }, delay);
    }
  }

  handleResize() {
    this.delayUpdate();
  }

  render() {
    const { isUsingClamp, hasDelay } = this.state;
    const { text, maxLine, ellipsis, afterEllipsisText, afterEllipsisClass, basedOn, isTrimRight, manualOpen, forceDisable } = this.props;
    const afterText = (afterEllipsisText !== '') ? ` <span class="${afterEllipsisClass}">${afterEllipsisText}</span>` : '';
    const ellipsisHTML = `${ellipsis}${afterText}`;
    const key = `${(text && text.length > 1) ? text.slice(0, 2) : 'text'}${(hasDelay) ? '-delay' : ''}`;

    return isUsingClamp && !manualOpen && !forceDisable
      ? (
        <div
          className="clamp-wrapper"
          onClick={this.toggleClamp}
          key={key}
        >
          {
            afterEllipsisText === ''
            && (
              <ReactResponsiveEllipsis
                text={text}
                maxLine={`${maxLine}`}
                ellipsis={ellipsis}
                basedOn={basedOn}
                trimRight={isTrimRight}
              />
            )
          }
          {
            afterEllipsisText !== ''
            && (
              <HTMLResponsiveEllipsis
                unsafeHTML={text}
                maxLine={`${maxLine}`}
                ellipsisHTML={ellipsisHTML}
                basedOn={basedOn}
              />
            )
          }
        </div>
      )
      : (
        <div
          className="clamp-wrapper"
          onClick={this.toggleClamp}
          dangerouslySetInnerHTML={{__html: text}}
        />
      );
  }
}

Clamp.defaultProps = {
  text: '',
  maxLine: 2,
  ellipsis: '...',
  afterEllipsisText: 'MORE',
  afterEllipsisClass: 'clamp-after-ellipsis',
  basedOn: 'letters',
  isTrimRight: true,
  manualOpen: false,
  forceDisable: false,
  delay: 0,
  openCallback: () => {},
  closeCallback: () => {}
};

export default Clamp;
