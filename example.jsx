var React = require('react')

var Model = {
  pageTitle: 'React',
  page: '/',
  now: Date.now()
};

exports.init = function(app) {
  app.addRoute(Route)
}

var Page = exports.Page = React.createClass({

  getInitialState: function() {
    return {
      clicked: 0
    }
  },

  handleClick: function() {
    this.setState({
      clicked: this.state.clicked + 1
    })
  },

  render: function() {
    return (
      <div className="page active">
        <h1> This is {this.props.title} service </h1>
        <h2> page name {this.props.page}</h2>
        <p>Time: {this.props.now + ''}</p>
        <button name="click me" onClick={this.handleClick}></button>
        <p>Times clicked: {this.state.clicked}</p>
        <div data-hook="sub"></div>
        <div data-hook="amp">ampersand subview place holder</div>
        <a href="/">home</a> | <a href="/xxx">/xxx</a> |  <a href="/yyy">/yyy</a>
      </div>
      );
  }
})

var Route = exports.Route = {
  routes: {
    '': 'home',
    'xxx': 'xxx',
    'yyy': 'yyy'
  },
  home: function() {
    this.trigger('page', Page, {
      isReact: true,
      props: {
        title: 'react home',
        page: '/',
        now: new Date()
      }
    });
  },
  xxx: function() {
    this.trigger('page', Page, {
      isReact: true,
      props: {
        title: 'react xxx',
        page: 'xxx',
        now: Date.now()
      }
    });
  },
  yyy: function() {
    this.trigger('page', Page, {
      isReact: true,
      props: {
        title: 'react yyy',
        page: 'yyy',
        now: Date.now()
      }
    });
  }
}
