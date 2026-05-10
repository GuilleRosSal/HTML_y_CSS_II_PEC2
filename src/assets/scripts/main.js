/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import "bootstrap";

/**
 * Write any other JavaScript below
 */

// Basic validation for the artisan inscription form
document.addEventListener("DOMContentLoaded", () => {
  const artisanForm = document.getElementById("artisanForm");

  if (artisanForm) {
    artisanForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!artisanForm.checkValidity()) {
        event.stopPropagation();

        artisanForm.classList.add("form--invalid");
        artisanForm.classList.remove("form--valid");
        return;
      }

      artisanForm.reset();
      artisanForm.classList.remove("form--invalid");
      artisanForm.classList.add("form--valid");
    });
  }
});
