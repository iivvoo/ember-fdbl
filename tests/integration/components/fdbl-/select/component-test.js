import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import { model } from '../../../../utils';

moduleForComponent('fdbl-/select', 'Integration | Component | fdbl /select', {
  integration: true,
  beforeEach() {
    this.set('model', model);
  }
});

test('it renders', function(assert) {

  this.render(hbs`{{fdbl-/select model=model}}`);

  assert.equal(this.$().text().trim(), '');
});
