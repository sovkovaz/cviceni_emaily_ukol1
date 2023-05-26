const renderEmails = (emails, mailElm) => {
    mailElm.innerHTML = emails
      .map((mail1) => {
        let iconClass = 'opened';
        if (mail1.unread) {
          iconClass = 'closed';
        };
  
        return `
          <div class="email">
            <div class="email__head">
              <button class="email__icon email__icon--${iconClass}"></button>
              <div class="email__info">
                <div class="email__sender">${mail1.sender.name}</div>
                <div class="email__subject">${mail1.subject}</div>
              </div>
              <div class="email__time">${mail1.time}</div>
            </div>
            <div class="email__body"></div>
          </div>
        `;
      })
      .join('');
  };
  
  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
    .then((response) => response.json())
    .then((data) => renderEmails(data.emails, document.getElementById('unread')));
  
  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
    .then((response) => response.json())
    .then((data) => renderEmails(data.emails, document.getElementById('read')));
  