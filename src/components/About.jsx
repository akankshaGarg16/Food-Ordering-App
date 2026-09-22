import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="py-25">
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is dummy Food ordering app</h2>
        <UserClass name={"First"} location={"Kolkata Class"} />
      </div>
    );
  }
}

export default About;
