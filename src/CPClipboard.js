import React, { Component } from "react";
import Tooltip from "rc-tooltip";
// import _ from "underscore";

const Clipboard = require("clipboard");

class CPClipboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyMessage: "",
      copyTimer: null,
    };
  }
  componentDidMount() {
    let _this = this,
      { callBack, copiedMsg, macCopy, winCopy } = this.props,
      { btn_copy } = this.refs;

    if (btn_copy) {
      let clipboard = new Clipboard(btn_copy);

      clipboard.on("success", function(e) {
        console.info("Action:", e.action);
        console.info("Text:", e.text);
        console.info("Trigger:", e.trigger);

        _this.setState({
          copyMessage: copiedMsg
        });

        clearTimeout(_this.state.copyTimer);
        _this.state.copyTimer = setTimeout(() => {
          _this.setState({
            copyMessage: ""
          });
        }, 3000);

        e.clearSelection();

        // CallbackFunction
        if (callBack) {
          callBack();
        }
      });

      clipboard.on("error", function(e) {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);

        let actionMsg = "";

        if (/iPhone|iPad/i.test(navigator.userAgent)) {
          actionMsg = "No support :(";
        } else if (/Mac/i.test(navigator.userAgent)) {
          actionMsg = macCopy;
        } else {
          actionMsg = winCopy;
        }

        _this.setState({
          copyMessage: actionMsg
        });

        clearTimeout(_this.state.copyTimer);
        _this.state.copyTimer = setTimeout(() => {
          _this.setState({
            copyMessage: ""
          });
        }, 3000);
      });
    }
  }
  render() {
    let { link, className, children } = this.props,
      { copyMessage } = this.state,
      element_clipboard = null;

    if (link && link.length > 0) {
      element_clipboard = (
        <Tooltip
          placement="bottom"
          overlay={copyMessage}
          visible={copyMessage !== ""}
          trigger="click"
        >
          <div
            id="CPClipboard_1"
            className={className}
            ref="btn_copy"
            data-clipboard-action="copy"
            data-clipboard-text={link}
          >
            {children || link}
          </div>
        </Tooltip>
      );
    }

    return element_clipboard;
  }
}

CPClipboard.defaultProps = {
  copiedMsg: "已複製!!",
  macCopy: "請按 ⌘-C 複製網址",
  winCopy: "請按 Ctrl-C 複製網址"
};

export default CPClipboard;
