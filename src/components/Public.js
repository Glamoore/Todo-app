import { Link } from "react-router-dom";

import noteImage from '../assets/todoListIllustration.webp'

import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1 className="public__header">Todo Tracker</h1>
      </header>
      <main className="public__main">
        <div className="public__main-header">
            <img src={noteImage} alt='Todo list' />
          <h2 className="public__secondary-header">
            Organize your work and life, finally.
          </h2>
        </div>
        <h2 className="public__third-header">Get more done</h2>
        <p className="public__text">
            Become focused, organized, and calm with Todo Traker. The UK's #1
            to-do list app.
          </p>
        <p className="public__text">
          Add tasks like “Read work emails every day at 10am” to fill your to-do
          list in seconds using Todo Tracker's powerful natural language
          recognition
        </p>
      </main>
      <footer>
        <Link className="public__footer-link" to="/login">
          User Login
        </Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
