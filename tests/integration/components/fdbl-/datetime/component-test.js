import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import {
  model,
  dateRangePicker
} from '../../../../utils';

moduleForComponent('fdbl-/datetime', 'Integration | Component | fdbl /datetime', {
  integration: true,
  beforeEach() {
    this.register('helper:date-range-picker', dateRangePicker);
    this.set('model', model);
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fdbl-/datetime model=model}}`);

  assert.equal(this.$().text().trim(), '');
});
