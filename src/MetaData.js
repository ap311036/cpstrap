import React, { Component } from "react";
import classNames from "classnames";

class MetaData extends Component {
  render() {
    const { type, children } = this.props;

    if (!children) return <div />;

    const isBorder = type === "border";
    const isImdb = type === "imdb";
    const whiteGroup = ["imdb", "white"];
    const orangeGroup = ["orange"];
    const wrapperClass = classNames(
      "metadata",
      { "is-border": isBorder },
      { "is-imdb": isImdb },
      { "is-white": whiteGroup.includes(type) },
      { "is-orange": orangeGroup.includes(type) }
    );
    let renderText;
    switch (type) {
      case "imdb":
        renderText =
          parseFloat(children) >= 10
            ? parseFloat(children)
            : parseFloat(children).toFixed(1);
        break;
      default:
        renderText = children;
        break;
    }

    return (
      <div className={wrapperClass}>
        {this.renderIcon()}
        <div className="metadata-content">{renderText}</div>
      </div>
    );
  }

  renderIcon() {
    const { type, url, staticRoot } = this.props;

    if (type === "imdb") {
      return url ? (
        <a
          className="metadata-imdb"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`${staticRoot}imdb.png`} alt="imdb" />
        </a>
      ) : (
        <span className="metadata-imdb">
          <img src={`${staticRoot}imdb.png`} alt="imdb" />
        </span>
      );
    }
  }
}

MetaData.defaultProps = {
  type: "string", // border, imdb
  staticRoot: "/assets/icons/"
};

export default MetaData;
