import React from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import AbstractWidget from './AbstractWidget'

export default class Grid extends React.Component {
  static propTypes = {
    collectionId: PropTypes.string.isRequired,
    onLoad: PropTypes.func,
  };

  static defaultProps = {
    onLoad: () => {},
  };

  shouldComponentUpdate(nextProps) {
    const changed = (name) => !isEqual(this.props[name], nextProps[name])
    return changed('collectionId')
  }

  ready = (tw, element, done) => {
    const { collectionId, onLoad } = this.props

    // Just need the collectionId, you can create a collection with tweetdeck (https://help.twitter.com/en/using-twitter/advanced-tweetdeck-features)
    tw.widgets.createGridFromCollection(collectionId, element)
    .then(() => {
      // Widget is loaded
      done()
      onLoad()
    })
  }

  render() {
    return React.createElement(AbstractWidget, { ready: this.ready })
  }
}