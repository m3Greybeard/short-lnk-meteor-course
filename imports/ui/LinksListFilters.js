import React from 'react';
import { Tracker } from 'meteor/tracker';

export default class LinksListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVisible: false
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      this.setState({
        showVisible: Session.get('showVisible')
      })
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  render() {
    return (
      <label className="checkbox">
        <input className="checkbox__box" type='checkbox' checked={!this.state.showVisible} onChange={(e) => {
          Session.set('showVisible', !e.target.checked);
        }}/>
        show hidden links
      </label>
    );
  }
}
