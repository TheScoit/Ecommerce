const verifyEmailTemplate = ({name,url}) =>{
    return `
    <p>Dear ${name}</p>
    <p>Thank you for registering Emporium</p>
    <a href=${url} style="color:#000; background-color: #071263; margin-top : 10px; padding: 20px; display:block;  ">Verify Email</a>
    `
}

export default verifyEmailTemplate;