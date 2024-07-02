"use strict";

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function () {
  var faqContainer = document.querySelector('.faq-content');
  faqContainer.addEventListener('click', function (e) {
    var groupHeader = e.target.closest('.faq-group-header');
    if (!groupHeader) return;
    var group = groupHeader.parentElement;
    var groupBody = group.querySelector('.faq-group-body');
    var icon = groupHeader.querySelector('i'); // Toggle icon

    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus'); // Toggle visibility of body

    groupBody.classList.toggle('open'); // Close other open FAQ bodies

    var otherGroups = faqContainer.querySelectorAll('.faq-group');
    otherGroups.forEach(function (otherGroup) {
      if (otherGroup !== group) {
        var otherGroupBody = otherGroup.querySelector('.faq-group-body');
        var otherIcon = otherGroup.querySelector('.faq-group-header i');
        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
}); // Mobile Menu

document.addEventListener('DOMContentLoaded', function () {
  var hamburgerButton = document.querySelector('.hamburger-button');
  var mobileMenu = document.querySelector('.mobile-menu');
  hamburgerButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  }); // Close mobile menu when clicking outside

  document.addEventListener('click', function (e) {
    if (!mobileMenu.contains(e.target) && !hamburgerButton.contains(e.target)) {
      mobileMenu.classList.remove('active');
    }
  });
});