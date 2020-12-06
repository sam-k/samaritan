import { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super();
    this.state = {
      color: props.color,
      colorHover: props.colorHover,
      colorLeave: props.color,

      bgColor: props.bgColor,
      bgColorHover: props.bgColorHover,
      bgColorLeave: props.bgColor,

      borderColor: props.borderColor,
      borderColorHover: props.borderColorHover,
      borderColorLeave: props.borderColor,

      iconColor: props.iconColor,
      iconColorLeave: props.iconColor
    };
  }

  render() {
    const buttonProps = {
      style: {
        textDecoration: "none",
        color: this.state.color,
        backgroundColor: this.state.bgColor,
        borderColor: this.state.borderColor,
        cursor: "pointer"
      },
      onMouseEnter: () => this.setState({
        color: this.state.colorHover,
        bgColor: this.state.bgColorHover,
        borderColor: this.state.borderColorHover,
        iconColor: this.state.colorHover
      }),
      onMouseLeave: () => this.setState({
        color: this.state.colorLeave,
        bgColor: this.state.bgColorLeave,
        borderColor: this.state.borderColorLeave,
        iconColor: this.state.iconColorLeave
      }),
      onMouseClick: () => {
        this.props.function();
      }
    };

    let buttonElement =
      <a
        href={this.props.link}
        style={buttonProps.style}
        onMouseEnter={buttonProps.onMouseEnter}
        onMouseLeave={buttonProps.onMouseLeave}
        onMouseClick={buttonProps.onMouseClick}
      >
        {this.props.icon &&
          <i
            className={this.props.icon}
            style={{ color: this.state.iconColor }}
          />
        }
        <span id='buttonText'>{this.props.text}</span>
      </a>;

    return (
      <div className={this.props.className}>
        {buttonElement}
      </div>
    );
  }
}

export default Button;
