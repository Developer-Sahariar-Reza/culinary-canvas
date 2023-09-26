import React from "react";
import "./Blog.css";
import { usePDF } from "react-to-pdf";

const Blog = () => {
  const { toPDF, targetRef } = usePDF({ filename: "blog.pdf" });
  return (
    <div className="container">
      <div className="download">
        <button className="common-button" onClick={() => toPDF()}>
          Download PDF
        </button>
      </div>

      <section className="ques-answer-container" ref={targetRef}>
        <div className="topics">
          <h2 className="question">
            Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p>
            In React, components can be categorized as either controlled or
            uncontrolled components based on how they handle and manage form
            elements and user input. Here are the key differences between
            controlled and uncontrolled components:
          </p>
          <ol>
            <li>
              <h3>Control Over Component State:</h3>
              <ul>
                <li>
                  <span>Controlled Components:</span> In controlled components,
                  the component's state is controlled by React. The component
                  maintains its state, and any changes in the input elements are
                  reflected in the component's state, which in turn updates the
                  UI. State changes are managed through React's state management
                  functions like setState.
                </li>
                <li>
                  <span>Uncontrolled Components:</span> In uncontrolled
                  components, the state of the input elements is not controlled
                  by React. Instead, the state is maintained by the DOM itself.
                  React doesn't manage or track the state of these components.
                  You can access the current values using DOM references or
                  event handlers.
                </li>
              </ul>
            </li>

            <li>
              <h3>State Management:</h3>
              <ul>
                <li>
                  <span>Controlled Components:</span> State is explicitly
                  managed by React. Any change in the input elements triggers a
                  change in the component's state. This allows you to have full
                  control and access to the component's data at any point in
                  time.
                </li>
                <li>
                  <span>Uncontrolled Components:</span> State is managed by the
                  DOM. The values in input elements are not controlled by React.
                  Instead, you access them via references or event handling when
                  you need to read the values.
                </li>
              </ul>
            </li>
            <li>
              <h3>Event Handling:</h3>
              <ul>
                <li>
                  <span>Controlled Components:</span> You typically use React
                  event handlers (e.g., onChange) to capture and update the
                  component's state in response to user input. These handlers
                  are usually used to enforce validation and control the
                  behavior of the input elements.
                </li>
                <li>
                  <span>Uncontrolled Components:</span> You may still use React
                  event handlers, but they are often used for different
                  purposes, such as responding to specific events or actions.
                  The actual state of the input elements is not updated by React
                  event handlers in uncontrolled
                </li>
              </ul>
            </li>
            <li>
              <h3>Predictable State:</h3>
              <ul>
                <li>
                  <span>Controlled Components:</span> State is predictable and
                  explicit, making it easier to reason about the component's
                  behavior and data flow.
                </li>
                <li>
                  <span>Uncontrolled Components:</span> State is not as
                  predictable and may require more effort to maintain
                  consistency and control over user input.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            The choice between controlled and uncontrolled components depends on
            the specific requirements of your application. Controlled components
            are generally recommended for better control and predictability,
            especially in complex forms and scenarios where form data needs to
            be manipulated, validated, or processed before submission.
            Uncontrolled components may be suitable for simpler use cases or
            when integrating with external libraries that rely on the DOM's
            state management.
          </p>
        </div>

        <div className="topics">
          <h2>How to validate React props using PropTypes?</h2>
          <p>
            To validate React props, we need prop-types package. It helps catch
            bugs by defining types and requirements for component props. First,
            install prop-types. Then, import it into your component file. Create
            a propTypes object where we define types for props. Use PropTypes
            with various types like string, number, bool, func, and shape to
            specify expectations. Marking props as isRequired ensures they must
            be present. React will show warnings if prop types dont match.
          </p>
        </div>

        <div className="topics">
          <h2>What is the difference between nodejs and express js?</h2>
          <p>
            Node.js and Express.js are web development technologies. Node.js is
            a runtime environment enabling server-side JavaScript execution
            outside browsers, on the other hand, Express is a framework that
            sits on top of Node.js. Its super helpful for making web apps and
            APIs without much hassle. It got these middleware things to process
            HTTP requests, easy route handling, and some templating options if
            youre into that stuff. Together, they make a dream team for building
            powerful server-side apps and APIs. Devs love using both to create
            robust web stuff with ease.
          </p>
        </div>

        <div className="topics">
          <h2>What is a custom hook, and why will you create a custom hook?</h2>
          <p>
            Custom hooks are reusable functions in React to manage stateful
            logic between components. When we need to import same thing in a lot
            of files. Its easy to make and lessens code and importing. I will
            create custom hooks because it reuses stateful logic between React
            components, making development more efficient and maintaining
            cleaner, modular code.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
