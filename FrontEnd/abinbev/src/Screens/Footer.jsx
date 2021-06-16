import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container d-flex justify-content-between">
        <a href="/" className="logo-font">
          conduit
        </a>
        <span className="attribution">
          An interactive learning project from{" "}
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
        <p className="attribution">
          © Hugo Torres 2021 <a href="http://www.kodemia.mx">Kodemia</a> Hack
          The Job AbInBev
        </p>
      </div>
    </footer>
  );
}
