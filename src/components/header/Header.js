// Create a component named MessageComponent
var HeaderComponent = React.createClass({
    render: function() {
      return (
        <div>{this.props.message}</div>
      );
    }
  });
  
  // Render an instance of HeaderComponent into document.body
  ReactDOM.render(
    <HeaderComponent message="Hello!" />,
    document.body
  );
  