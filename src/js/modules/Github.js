/**
 * Example module using async/await, pulling from a user on github.
 *
 * Note:
 *   jQuery is used in the example but the project is not concreate to jQuery.
 */
import $ from 'jquery'

export class GitHub {
  constructor(username) {
    this.el = $('.github')
    this.username = username
  }

  async getUserData() {
    return await $.getJSON(`https://api.github.com/users/${this.username}`)
  }

  // Just an example, you may want to use a templating engine.
  render({ avatar_url: avatarUrl, html_url: url, company, name, bio, email }) {
    const template = `
      <div class="github-avatar">
        <img src="${avatarUrl}" alt="${name}">
      </div>
      <div class="github-info">
        <ul>
          <li><strong>GitHub:</strong> <a href="${url}" target="_blank">${url}</a></li>
          <li><strong>Company:</strong> ${company}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>

        <h4>Bio</h4>
        <p>${bio}</p>
      </div>
    `

    // Breaks the Single Responsibility principle, but again, only an example.
    // https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)
    this.el.html(template)

    return template
  }
}