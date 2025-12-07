function GetServiceIdEmailJs() {
    return process.env.EMAIL_SERVICE;
}

function GetTemplateIdEmailJs() {
    return process.env.EMAIL_TEMPLATE;
}

function GetPublicKeyEmailJs() {
    return process.env.EMAIL_PUBLIC_KEY;
}

export { GetServiceIdEmailJs, GetTemplateIdEmailJs, GetPublicKeyEmailJs };