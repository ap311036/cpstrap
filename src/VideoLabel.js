/*
* Video Label
* 標籤
* @version 0.0.1
* @param {string} text - 顯示的文字
* @param {bool} isLive - 是否為 Live Style
* @param {bool} isComingSoon - 是否為 Coming Soon Style
* @param {bool} isNewSeason - 是否為 New Season Style
* @param {bool} isDesktop - 是否為 Desktop Style
* @param {bool} isHotPicks - 是否為 HotPicks Style
* @param {bool} hasBoxShadow - 是否加入 Box Shadow
* @todo BigScreen Style
* @todo 將 HotPick Style 移植到 HotPicks Component
*/

import React from 'react';
import classNames from 'classnames';

class VideoLabel extends React.Component {
  render() {
    const { text, isLive, isNewSeason, isComingSoon, isDesktop, isHotPicks, hasBoxShadow } = this.props;

    return text ? (
      <div
        className={classNames(
          'video-label',
          { '_live': isLive },
          { '_coming-soon': isComingSoon },
          { '_new-season': isNewSeason },
          { '_hot-picks': isHotPicks },
          { '_box-shadow': hasBoxShadow || isLive },
          { '_desktop': isDesktop }
        )}
      >
        {text}
      </div>
    ) : <span></span>;
  }
}

VideoLabel.defaultProps = {
  text: '',
  isLive: false,
  isComingSoon: false,
  isNewSeason: false,
  isDesktop: false,
  isHotPicks: false,
  hasBoxShadow: false
};

export default VideoLabel;
