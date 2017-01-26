import layout from './template';
import BaseComponent from '../base';

export default BaseComponent.extend({
  layout: layout,

  timePicker: false,
  timePicker24Hour: false,

  start: null,
  end: null,

  applyAction() {},
  hideAction() {},
  cancelAction() {},

});
