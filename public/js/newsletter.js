// Newsletter Form Handler
// Handles all newsletter form submissions across the site

(function() {
  // Handle all newsletter forms
  const forms = document.querySelectorAll('form[data-newsletter-form]');

  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      const submitButton = form.querySelector('button[type="submit"]');
      const email = emailInput.value.trim();

      if (!email) return;

      // Disable form during submission
      submitButton.disabled = true;
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Subscribing...';

      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (data.success) {
          // Success!
          emailInput.value = '';
          submitButton.textContent = '✓ Subscribed!';
          submitButton.classList.add('bg-green-600');

          // Show success message
          showNotification('Success! Check your email to confirm.', 'success');

          // Reset button after 3 seconds
          setTimeout(() => {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            submitButton.classList.remove('bg-green-600');
          }, 3000);

        } else {
          throw new Error(data.error || 'Subscription failed');
        }

      } catch (error) {
        console.error('Newsletter error:', error);
        showNotification(error.message || 'Failed to subscribe. Please try again.', 'error');

        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }
    });
  });

  // Notification system
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-32 right-6 z-[70] max-w-md px-6 py-4 rounded-xl shadow-2xl transform translate-x-0 transition-all duration-300 ${
      type === 'success' ? 'bg-green-500 text-white' :
      type === 'error' ? 'bg-red-500 text-white' :
      'bg-slate-800 text-white'
    }`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 10);

    // Remove after 4 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(400px)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 4000);
  }
})();
