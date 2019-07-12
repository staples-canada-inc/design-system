---
name: Spinner
route: /docs/validation_progress/spinner
menu: Validation & Progress
---

# Spinner

Staples' spinners can be used to show the loading state in your projects. They’re built with only HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.


### Primary Spinner
  This is the primary custom spinner built for Staples Canada.

    <div>
      <SpinnerStaples size="sm">Loading...</SpinnerStaples>
      <SpinnerStaples>Loading...</SpinnerStaples>
      <SpinnerStaples size="lg">Loading...</SpinnerStaples>
    </div>



### Secondary Spinner
  This is the secondary spinner to be used in cases where the primary spinner is not ideal.

    <div class="spinner-border text-secondary" role="status">
      <span class="sr-only">Loading...</span>
    </div>

### Assistive Technology
For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="sr-only">Loading...</span>`.
