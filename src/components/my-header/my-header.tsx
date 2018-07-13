import { Component } from '@stencil/core';

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.scss'
})
export class MyHeader {
  render() {
    return (
      <div>
        <h1>Jawami</h1>
      </div>
    )
  }
}
