/* eslint-disable no-console */
import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./components/Container";

export default class TextOrdering extends (H5P.EventDispatcher as {
  new (): any;
}) {
  /**
   * @constructor
   *
   * @param {object} params passed from the H5P editor
   * @param {string} contentId number
   * @param {object} [extras] Saved state, metadata, etc
   */
  constructor(private params: any, private id: string, private extras = {}) {
    super();
    // this.params.$extend({});

    this.contentId = id;

    this.main = document.createElement("div");

    this.listItems = params.listItems.map((x: string, y: number) => {
      return {
        text: x,
        position: y,
      };
    });

    this.numberOfItems = this.listItems.length;

    this.shuffledList = this.shuffleItems(this.listItems);
    console.log(this.shuffledList);

    const element = document.createElement("div");
    element.classList.add("h5p-text-ordering");
    element.innerHTML = this.shuffledList.map((x: any, y: number) => {
      return x.text;
    });

    /**
     * Attach library to wrapper
     *
     * @param {jQuery} $wrapper for H5P
     */
    this.attach = (wrapper: JQuery) => {
      wrapper.get(0)?.classList.add("h5p-text-ordering");
      // wrapper.get(0)?.appendChild(this.main);
      wrapper.get(0)?.appendChild(element);

      // ReactDOM.render(<div>DOM</div>, this.main);
    };
  }

  private shuffleItems = (list: string[]): string[] => {
    // Schwartzian transform in ES6
    const shuffled = list
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  };
}
