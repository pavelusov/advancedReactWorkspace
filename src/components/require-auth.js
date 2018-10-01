import React, { Component } from 'react'

export default function requireAuth(ChildComponent) {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent/>
    }
  }

  return ComposedComponent;
}
