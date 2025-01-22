interface Window {
  blockTemplate: (params: BlockTemplateParams) => string
}

interface UserInfo {
  firstName: string
}

interface User {
  info: UserInfo
}

interface BlockTemplateParams {
  className: string
  handleClick: string
  text: string
  user: User
}

window.blockTemplate = (function () {
  return (params: BlockTemplateParams): string => {
    const { className, handleClick, text, user } = params

    return `
  <div class="${className}">
    <span onClick="${handleClick}">${text}</span>
    <span>${user.info.firstName}</span>
  </div>
  `
  }
})()
