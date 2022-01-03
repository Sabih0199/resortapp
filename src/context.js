import React, { Component } from "react";

import items from "./data"

export const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRoom: [],
    featuredRooms: [],
    loading: true,
  };
  //getData{}
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export const RoomConsumer = RoomContext.Consumer;
