import React from "react";
import user from "../../lib/users.json";
import TableRow from "../TableRow";
class Table extends React.Component {
  state = {
    mainList: [],
    activeList: [],
  };
  componentDidMount() {
    this.setState({
      mainList: user,
      activeList: user,
    });
  }
  searchHandler = (name) => {
     name = name.toLowerCase()
    const newList = this.state.mainList.filter(
      (user) =>
        user.name.first.toLowerCase().includes(name) ||
        user.name.last.toLowerCase().includes(name)
    );
    this.setState({ activeList: newList });
  };

  render() {
    let userList = this.state.activeList;
    return (
      <>
        <input
          placeholder="search term"
          type="text"
          onChange={(event) => this.searchHandler(event.target.value)}
        />
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Cell</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, id) => (
              <TableRow key={user.login.uuid} id={id} user={user} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
