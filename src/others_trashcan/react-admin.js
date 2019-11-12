import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class TabTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleTableTabChange = this.handleTableTabChange.bind(this);
  }

  handleTableTabChange(e) {
    this.props.onFilterChange(e.target.value);
  }

  render() {
    return (
      <div>
        <select name="position" onChange={this.handleTableTabChange}>
          <option value="Top">Top</option>
          <option value="Jungle">Jungle</option>
          <option value="Mid">Mid</option>
          <option value="AD">AD</option>
          <option value="Support">Support</option>
        </select>
      </div>
    );
  }
}

class InputForm extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Input Champ Name..."
          onSubmit={this.handleChampSubmit}
          />
      </form>
    );
  }
}

class ChampRow extends React.Component {
  render() {
    const champ = this.props.champ;
    const name = champ.name;
    const rank =
      champ.rank === 1 ? (
        <span style={{ color: "blue" }}>{champ.rank}</span>
      ) : (
        champ.rank
      );
    const position = champ.position;

    return (
      <tr>
        <th>{rank}</th>
        <th>{name}</th>
        <th>{position}</th>
        <th>
          <button>X</button>
        </th>
      </tr>
    );
  }
}

class ChampTable extends React.Component {
  render() {
    // const positionFilter = this.props.positionFilter;
    const positionFilter = this.props.positionFilter;
    const rows = [];
    this.props.champs.forEach(champ => {
      if (champ.position === positionFilter) {
        rows.push(<ChampRow champ={champ} key={champ.name} />);
      }
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class FilterableChampTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionFilter: "Top",
      champs : CHAMPS
    };
    this.handleTableTabChange = this.handleTableTabChange.bind(this);
  }

  handleTableTabChange(position) {
    this.setState({
      positionFilter: position
    });
  }

  render() {
    return (
      <div>
        <TabTable
          positionFilter={this.state.positionFilter}
          onFilterChange={this.handleTableTabChange}
        />
        <InputForm 
          onClick={this.handleChampSubmit}
        />
        <ChampTable
          champs={this.props.champs}
          positionFilter={this.state.positionFilter}
        />
      </div>
    );
  }
}
const CHAMPS = [
  {
    name: "Zyra",
    position: "Support",
    rank: 1
  },
  {
    name: "Ezreal",
    position: "AD",
    rank: 1
  },
  {
    name: "Alistar",
    position: "Support",
    rank: 2
  },
  {
    name: "Gragas",
    position: "Jungle",
    rank: 1
  },
  {
    name: "Kennen",
    position: "Top",
    rank: 1
  },
  {
    name: "Ahri",
    position: "Mid",
    rank: 1
  },
  {
    name: "Oriana",
    position: "Mid",
    rank: 2
  }
];

function ReactAdminAssignment() {
  return ReactDOM.render(
    <FilterableChampTable champs={CHAMPS} />,
    document.getElementById("root")
  );
}

export default ReactAdminAssignment;
