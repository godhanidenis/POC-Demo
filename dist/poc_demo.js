// poc_demo.js

// Define the custom element using the Custom Elements API
class HelloWidget extends HTMLElement {
  constructor() {
    super();
    // Create a shadow DOM for encapsulation (optional)
    this.attachShadow({ mode: "open" });
    // Set up the content of the custom element
    this.shadowRoot.innerHTML = `
            <style>
                /* Define styles for the custom element (optional) */
                :host {
                    display: block;
                    background-color: lightblue;
                    padding: 20px;
                    border-radius: 5px;
                }
            </style>
            <h1>Hello, World!</h1>
            <p>This is a custom widget.</p>
        `;
  }
}

// Define the custom element tag name
customElements.define("hello-widget", HelloWidget);
