class loginUser{
    constructor(){
        this.username = 'body > table > tbody > tr > td.auto-style1 > form > div > center > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2) > p > input'
        this.password = 'body > table > tbody > tr > td.auto-style1 > form > div > center > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2) > p > input[type=password]'
        this.loginButton = 'body > table > tbody > tr > td.auto-style1 > form > div > center > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(2) > p > input[type=button]'
        this.blockQuote = 'body > table > tbody > tr > td.auto-style1 > big > blockquote > blockquote'
    }
}
module.exports=loginUser