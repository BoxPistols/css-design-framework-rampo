/**
 * Rampo JavaScript Utilities
 * Interactive components and helpers
 * Version: 1.0.0
 */

const Rampo = (function () {
  'use strict';

  // Modal Handler
  class Modal {
    constructor(selector) {
      this.modal = document.querySelector(selector);
      this.backdrop = this.modal?.previousElementSibling;
      this.init();
    }

    init() {
      if (!this.modal) return;

      const closeButtons = this.modal.querySelectorAll('[data-dismiss="modal"]');
      closeButtons.forEach(btn => {
        btn.addEventListener('click', () => this.hide());
      });

      this.backdrop?.addEventListener('click', () => this.hide());
    }

    show() {
      if (!this.modal) return;
      this.modal.classList.add('show');
      this.backdrop?.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    hide() {
      if (!this.modal) return;
      this.modal.classList.remove('show');
      this.backdrop?.classList.remove('show');
      document.body.style.overflow = '';
    }

    toggle() {
      this.modal?.classList.contains('show') ? this.hide() : this.show();
    }
  }

  // Tab Handler
  class Tabs {
    constructor(selector) {
      this.tabContainer = document.querySelector(selector);
      this.init();
    }

    init() {
      if (!this.tabContainer) return;

      const tabs = this.tabContainer.querySelectorAll('.nav-link');
      tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
          e.preventDefault();
          this.activateTab(tab);
        });
      });
    }

    activateTab(tab) {
      const target = tab.getAttribute('data-target') || tab.getAttribute('href');
      if (!target) return;

      // Remove active class from all tabs
      const allTabs = this.tabContainer.querySelectorAll('.nav-link');
      allTabs.forEach(t => t.classList.remove('active'));

      // Add active class to clicked tab
      tab.classList.add('active');

      // Hide all tab panes
      const tabContent = document.querySelector(tab.getAttribute('data-content-parent') || '.tab-content');
      if (tabContent) {
        const allPanes = tabContent.querySelectorAll('.tab-pane');
        allPanes.forEach(pane => pane.classList.remove('active'));

        // Show target pane
        const targetPane = document.querySelector(target);
        targetPane?.classList.add('active');
      }
    }
  }

  // Accordion Handler
  class Accordion {
    constructor(selector) {
      this.accordion = document.querySelector(selector);
      this.init();
    }

    init() {
      if (!this.accordion) return;

      const buttons = this.accordion.querySelectorAll('.accordion-button');
      buttons.forEach(button => {
        button.addEventListener('click', () => this.toggle(button));
      });
    }

    toggle(button) {
      const item = button.closest('.accordion-item');
      const collapse = item.querySelector('.accordion-collapse');
      const isOpen = collapse.classList.contains('show');

      // Close all other items (for single-open behavior)
      if (!isOpen) {
        const allItems = this.accordion.querySelectorAll('.accordion-item');
        allItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherCollapse = otherItem.querySelector('.accordion-collapse');
            const otherButton = otherItem.querySelector('.accordion-button');
            otherCollapse?.classList.remove('show');
            otherButton?.classList.add('collapsed');
          }
        });
      }

      // Toggle current item
      collapse.classList.toggle('show');
      button.classList.toggle('collapsed');
    }
  }

  // Alert Dismiss Handler
  function initAlerts() {
    const dismissButtons = document.querySelectorAll('[data-dismiss="alert"]');
    dismissButtons.forEach(button => {
      button.addEventListener('click', function () {
        const alert = this.closest('.alert');
        if (alert) {
          alert.style.opacity = '0';
          alert.style.transform = 'translateY(-10px)';
          setTimeout(() => alert.remove(), 200);
        }
      });
    });
  }

  // Toast Notification
  function showToast(message, type = 'info', duration = 3000) {
    const container = document.querySelector('.toast-container') || createToastContainer();

    const toast = document.createElement('div');
    toast.className = `toast alert alert-${type}`;
    toast.innerHTML = `
      <div class="toast-body">${message}</div>
      <button type="button" class="toast-close" aria-label="Close">&times;</button>
    `;

    container.appendChild(toast);

    // Show toast
    setTimeout(() => toast.classList.add('show'), 10);

    // Close button
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn?.addEventListener('click', () => hideToast(toast));

    // Auto hide
    if (duration > 0) {
      setTimeout(() => hideToast(toast), duration);
    }

    return toast;
  }

  function hideToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }

  function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container top-right';
    document.body.appendChild(container);
    return container;
  }

  // Dark Mode Toggle
  function initDarkMode() {
    const darkModeToggle = document.querySelector('[data-toggle="dark-mode"]');
    if (!darkModeToggle) return;

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', currentTheme);

    darkModeToggle.addEventListener('click', function () {
      let theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Dropdown Handler
  function initDropdowns() {
    const dropdownToggles = document.querySelectorAll('[data-toggle="dropdown"]');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const dropdown = this.nextElementSibling;
        if (dropdown && dropdown.classList.contains('dropdown-menu')) {
          // Close other dropdowns
          document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
            if (menu !== dropdown) menu.classList.remove('show');
          });

          dropdown.classList.toggle('show');
        }
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
      });
    });
  }

  // Navbar Toggle for Mobile
  function initNavbarToggle() {
    const navbarToggles = document.querySelectorAll('.navbar-toggle');

    navbarToggles.forEach(toggle => {
      toggle.addEventListener('click', function () {
        const target = this.getAttribute('data-target');
        const navMenu = document.querySelector(target || '.navbar-nav');
        navMenu?.classList.toggle('show');
      });
    });
  }

  // Copy to Clipboard Helper
  function copyToClipboard(text) {
    return navigator.clipboard.writeText(text).then(() => {
      showToast('Copied to clipboard!', 'success', 2000);
      return true;
    }).catch(err => {
      console.error('Failed to copy:', err);
      showToast('Failed to copy', 'error', 2000);
      return false;
    });
  }

  // Smooth Scroll
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Initialize all components
  function init() {
    initAlerts();
    initDarkMode();
    initDropdowns();
    initNavbarToggle();
    initSmoothScroll();
  }

  // Auto-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Public API
  return {
    Modal,
    Tabs,
    Accordion,
    showToast,
    copyToClipboard,
    init
  };
})();

// Export for ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Rampo;
}
