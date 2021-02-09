class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    // is a shorter version than see below:
    {
      this.props.s1;
    }
    {
      this.props.s2;
    }
    {
      this.props.s3;
    }
    const winner = s1 === s2 && s2 === s3;

    return (
      <div>
        <p>
          {s1} {s2} {s3}
        </p>
        <p>{winner ? "Winner!" : "Loser!"}</p>
      </div>
    );
  }
}
