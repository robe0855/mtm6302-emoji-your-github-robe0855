const emojis = [
    "&#x1F600;",
    "&#x1F601;",
    "&#x1F602;",
    "&#x1F603;",
    "&#x1F604;",
    "&#x1F605;",
    "&#x1F606;",
    "&#x1F609;",
    "&#x1F60A;",
    "&#x1F60B;",
    "&#x1F60E;",
    "&#x1F60D;"
  ];
  
  const emojiGallery = document.getElementById("emoji-gallery");
  
  emojis.forEach(emoji => {
    const code = emoji.codePointAt(0).toString(16).toUpperCase(); // Convert to hexadecimal
    const emojiElement = document.createElement("div");
    emojiElement.classList.add("emoji");
    emojiElement.innerHTML = `
      <p style="text-align: center;">
        <span>${emoji}</span><br>
        <code>${code}</code>
      </p>
    `;
    emojiGallery.appendChild(emojiElement);
  });