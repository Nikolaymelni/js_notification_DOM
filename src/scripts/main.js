'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');
  document.body.append(element);
  element.classList.add('notification', type);

  element.insertAdjacentHTML('beforeend', `
  <h2 class='title'>${title}</h2>
  <p>${description}</p>
  `)

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  setTimeout(() => {
    element.hidden = true;
  }, 2000)
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
