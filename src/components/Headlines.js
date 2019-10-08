import React, { Component } from 'react';

const url = 'https://webhose.io/filterWebContent?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&ts=1557088877428&sort=crawled&q=Financial%20Markets%20Investment&size=5';

class HeadLines extends Component {

  constructor() {
    super();
    this.state = {
      headlines: [],
    }
  }

  componentDidMount() {

    fetch(url).then(posts => {

        return posts.json();
    }
  ).then(data => {

    let headlines = data.posts.map((inst) => {

      return (

        <div className="headline-card" key={inst.posts}>
          <h4>Title: {inst.thread.title}</h4>
        </div>
      )
    })

    this.setState({headlines: headlines});
  })
}
  render() {

    return(

        <div className="container">
            <div>{this.state.headlines}</div>
          </div>
    )
  }
}
export default HeadLines;
