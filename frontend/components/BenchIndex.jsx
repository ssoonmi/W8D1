import React from 'react';

class BenchIndex extends React.Component {
  render() {
    const {benches} = this.props;
    let benchLis;
    if (benches) {
      const benchesArr = Object.values(benches);
      benchLis = benchesArr.map((bench) => {
        return <li key={bench.id}>{bench.description}</li>;
      });
    }
    return (
      <ul>
        {benchLis}
      </ul>
    );
  }
}

export default BenchIndex;
