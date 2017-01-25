import Ember from 'ember';
import layout from './template';
import BaseComponent from '../base';

export default BaseComponent.extend({
  layout: layout,

  timePicker: false,

  start: null,
  end: null,

  applyAction() {},
  hideAction() {},
  cancelAction() {},

});
