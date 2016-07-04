import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import { model } from '../../../../utils';

moduleForComponent('fdbl-/textarea', 'Integration | Component | fdbl /textarea', {
  integration: true,
  beforeEach() {
    this.set('model', model);
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{fdbl-/textarea}}`);

  assert.equal(this.$().text().trim(), '');
});
