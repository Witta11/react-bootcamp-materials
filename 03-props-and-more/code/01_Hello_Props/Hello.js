class Hello extends React.Component {
  render() {
    return (
      <p>
        Hi {this.props.to} from {this.props.from}, {this.props.num}, hub{" "}
      </p>
    );
  }
}
