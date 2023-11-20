export const contact = {
  tg: "6954083512:AAG7v5JZS98AxHii7lWu9JIiVqW9fkT2yqM",
  chat_id: "798661377",
  default: {
    name: "",
    telephone: "",
    message: "",
  },

  getUrl: function(text) { return `https://api.telegram.org/bot${this.tg}/sendMessage?chat_id=${this.chat_id}&text=${text}&parse_mode=HTML` },
  getMessage: (name, tel, text) => `
  Имя: ${name},
  Тел: ${tel},
  Сообщение: ${text}
  `
}