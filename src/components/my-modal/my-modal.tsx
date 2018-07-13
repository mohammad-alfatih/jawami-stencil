import { Component } from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.scss'
})
export class MyModal {
  render() {
    return <h3>Popup Modal</h3>
  }
}
