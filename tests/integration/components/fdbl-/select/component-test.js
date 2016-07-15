import Ember from 'ember';
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

test('it allows translation to be disabled', function(assert) {
  this.set('options', [{value:1, label:'label'}]);

  this.render(hbs`{{fdbl-/select model=model options=options translate=false}}`);

  assert.equal(this.$("option:first").text().trim(), "label");
});

test('it deals with ember objects differently', function(assert) {
  this.set('o', Ember.Object.create({id:42}));
  this.set('options', [{value:this.get('o'), label:'label'}]);

  this.render(hbs`{{fdbl-/select model=model options=options translate=false relations=true}}`);

  assert.equal(this.$("option:first").attr("value").trim(), "42");
});

test('it returns the ember object', function(assert) {
  this.set('options', [{value: Ember.Object.create({id:42}), label:'label'}]);

  this.set('model', Ember.Object.create({selection: null}));

  this.render(hbs`{{fdbl-/select model=model property="selection" options=options translate=false relations=true}}`);

  this.$("option:first");
  assert.equal(this.get("model.selection.id", 42));
});

test('it selects the right ember object', function(assert) {
  this.set('v', Ember.Object.create({id:24}));

  this.set('options', [{value: Ember.Object.create({id:42}), label:'label'},
                       {value: this.get("v"), label: 'other'}]);

  this.set('model', Ember.Object.create({selection: this.get("v")}));

  this.render(hbs`{{fdbl-/select model=model property="selection" value=v options=options translate=false relations=true}}`);

  assert.equal(this.$("option:selected").attr("value").trim(), 24);
});

test('it handles property changes', function(assert) {
  let v1 = Ember.Object.create({id:24});
  let v2 = Ember.Object.create({id:42});
  this.set('v', v1);

  this.set('options', [{value: v2, label:'label'},
                       {value: v1, label: 'other'}]);

  this.set('model', Ember.Object.create({selection: this.get("v")}));

  this.render(hbs`{{fdbl-/select model=model property="selection" options=options translate=false relations=true}}`);

  this.set('model.selection', this.get('options.lastObject.value'));

  assert.equal(this.$("option:selected").attr("value").trim(), 42);
});
