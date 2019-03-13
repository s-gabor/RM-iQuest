const loginBtn = document.getElementById("btnLog");
const logoutBtn = document.getElementById("btnLogOut");
const registerBtn = document.getElementById("btnReg");
logoutBtn.style.display = 'none'; // it doesn't toggle with classes (id, class --> specificity ???)


const createForm = (html) => {
    const modalContainer = document.createElement("div");
    modalContainer.id = "formOpenModal";
    modalContainer.classList.add("modalDialog");
    modalContainer.innerHTML = html;
    document.body.appendChild(modalContainer);
}


const displayConfirmation = (message) => {
    document.getElementById("userDisplay").innerHTML = '';
    const html = 
        `
            <div>
                <p class="center-text">${message}<p>
                <input type="button" id="hitBtn" value="GOT THAT">
            </div>
        `
    createForm(html);
    const removeLogoutMessage = () => document.getElementById("formOpenModal").remove();
    // closed by user before timeout
    document.getElementById("hitBtn").addEventListener("click", removeLogoutMessage);
    // closed automatically after 3 sec
    setTimeout(removeLogoutMessage, 3000); // will throw an error if window was already closed by user
}


const loginSuccess = (username) => {
    document.getElementById("userDisplay").innerHTML = username;
    document.getElementById("formOpenModal").remove();
    loginBtn.style.display = 'none';
    registerBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
}


const registerSuccess = () => {
    document.getElementById("formOpenModal").remove();
    displayConfirmation("User registered succesfully");
}


const logoutSuccess = () => {
    displayConfirmation("Logged out succesfully!");
    loginBtn.style.display = 'block';
    registerBtn.style.display = 'block';
    logoutBtn.style.display = 'none';
}


const authFail = (errorMessageBox, message) => {
    errorMessageBox.innerHTML = message;
}


const authenticateUser = (formType) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    const currentUser = new User(username, password);
    if (formType === "Login") {
        const response = currentUser.login(); // true or false
        response
            ? loginSuccess(username)
            : authFail(errorMessage, "Username and/or password are incorrect. Please try again!");
    } else if (formType === "Register") {
        const response = currentUser.register(); // true or false
        response
            ? registerSuccess()
            : authFail(errorMessage, "Unable to register!")
    }
}


const createLoginForm = (formType) => {
    const html = 
        `
        <div>
            <p id="formClose" title="Close" class="close">X</p>
            <h3>${formType}</h3>
            <p id="errorMessage"></p>
            <label for = "username">Username</label>
            <input type="text" id="username" name="username" required minlength="4" maxlength="12" size="10">
            <label for = "pasword">Password</label>
            <input type="password" id="password" name="password" required minlength="4" maxlength="12" size="10">
            <input type="button" id="hitBtn" value="${formType}">
        </div>
        `;
    createForm(html);
    document.getElementById("hitBtn").addEventListener("click", () => authenticateUser(formType));
    document.getElementById("formClose").addEventListener("click", () => document.getElementById("formOpenModal").remove());
}


loginBtn.addEventListener("click", () => createLoginForm("Login"));
registerBtn.addEventListener("click", () => createLoginForm("Register"));
logoutBtn.addEventListener("click", logoutSuccess);