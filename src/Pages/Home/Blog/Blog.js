import React from "react";
import useTitle from "../../../hooks/useTitle";

const Blog = () => {
    useTitle('Blog')
  return (
    <div>
      <div className="w-3/4 mx-auto rounded">
        <div className="mt-10">
          <div>
            <h1 className="text-3xl text-center bg-accent text-white p-4">
              What are the different ways to manage a state in a React
              application?
            </h1>
            <p className=" p-3">
              There are four main types of state you need to properly manage in
              React apps: <br /> 1. Local state <br /> 2. Global state
              <br /> 3. Server state <br /> 4. URL state <br />
              <b>Local (UI) state – </b>Local state is data we manage in one or
              another component. <br />
              Local state is most often managed in React using the
              <code> useState </code>
              hook. <br />
              <b> Global (UI) state – </b> Global state is data we manage across
              multiple components. <br /> Global state is necessary when we want
              to get and update data anywhere in our app, or in multiple
              components at least. <br />
              <b>Server state –</b> Data that comes from an external server that
              must be integrated with our UI state. <br />
              Server state is a simple concept, but can be hard to manage
              alongside all of our local and global UI state. <br />
              <b>URL state – </b> Data that exists on our URLs, including the
              pathname and query parameters. <br />
              URL state is often missing as a category of state, but it is an
              important one. In many cases, a lot of major parts of our
              application rely upon accessing URL state. Try to imagine building
              a blog without being able to fetch a post based off of its slug or
              id that is located in the URL!
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-3xl text-center bg-accent text-white p-4">
              How does prototypical inheritance work?
            </h1>
            <p className=" p-3">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
              <br />
              <br />
              The prototype is itself an object, so the prototype will have its
              own prototype, making what's called a prototype chain. The chain
              ends when we reach a prototype that has null for its own
              prototype. Note: The property of an object that points to its
              prototype is not called prototype .
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-3xl text-center bg-accent text-white p-4">
              What is a unit test? Why should we write unit tests?
            </h1>
            <p className=" p-3">
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property. The isolated part of the definition is important. In
              his book "Working Effectively with Legacy Code", author Michael
              Feathers states that such tests are not unit tests when they rely
              on external systems: “If it talks to the database, it talks across
              the network, it touches the file system, it requires system
              configuration, or it can't be run at the same time as any other
              test." <br />
              <br />
              Unit test enable you to catch bugs early in the development
              process. Automated unit tests help a great deal with regression
              testing. They detect code smells in your codebase. For example, if
              you're having a hard time writing unit tests for a piece of code,
              it might be a sign that your function is too complex. <br /> Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
            </p>
          </div>
        </div>
        <div className="mt-10 mb-10">
          <div>
            <h1 className="text-3xl text-center bg-accent text-white p-4">
            React vs. Angular vs. Vue
            </h1>
            <p className=" p-3">
            <b>Angular </b>has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works. <br />
           <b> React</b> offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices. <br />
           <b>Vue </b>provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
