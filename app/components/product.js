import Component from '@glimmer/component';

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class ProductComponent extends Component {
  productImage = this.args.product.colors[0].image;
}
