import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked color = 'red';

  get productImage() {
    if (this.color == 'red') {
      return '/assets/images/beats-solo-red.png';
    } else return '/assets/images/beats-solo-black.png';
  }

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }
}
