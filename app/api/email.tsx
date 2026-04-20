function GetServiceIdEmailJs() {
    return process.env.NEXT_PUBLIC_EMAIL_SERVICE;
}

function GetTemplateIdEmailJs() {
    return process.env.NEXT_PUBLIC_EMAIL_TEMPLATE;
}

function GetPublicKeyEmailJs() {
    return process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
}

export { GetServiceIdEmailJs, GetTemplateIdEmailJs, GetPublicKeyEmailJs };