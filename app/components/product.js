import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class ProductComponent extends Component {
  @tracked color = 'red';
  get productImage() {
    if (this.color == 'red') {
      return '/assets/images/beats-solo-red.png';
    } else return '/assets/images/beats-solo-black.png';
  }
  @action
  onChangeColor() {
    if (this.color == 'red') {
      this.color = 'black';
    } else this.color = 'red';
  }
}
