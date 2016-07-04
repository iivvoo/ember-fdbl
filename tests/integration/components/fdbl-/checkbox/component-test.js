import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import { model } from '../../../../utils';

moduleForComponent('fdbl-/checkbox', 'Integration | Component | fdbl /checkbox', {
  integration: true,
  beforeEach() {
    this.set('model', model);
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fdbl-/checkbox model=model}}`);

  assert.equal(this.$().text().trim(), '');
});
