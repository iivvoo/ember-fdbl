import Ember from 'ember';
import BaseComponent from '../base';
import layout from './template';

export default BaseComponent.extend({
    size: 10,
    layout: layout,
    structure: "fdbl-/structure",
    labelPosition: Ember.computed('label', 'position', function() {
      if(this.get('label') && this.get('position') === 'right') {
        return 'right';
      } else if(this.get('label')) {
        return 'left';
      }
    })
});
