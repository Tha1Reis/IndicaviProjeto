const buttonSignUp = document.querySelector('button[name=signup]');
const buttonSignIn = document.querySelector('button[name=signin]');

const inputEmail = document.querySelector('input[name=email');
const inputPassword = document.querySelector('input[name=password');

const firebaseAuth = firebase.auth();

const handleAuthError = error => {

    if(error.code){
        switch(error.code){
            case 'auth/weak-password':
            alert('Senha fraca');
            break;
            case 'auth/argument-error':
            alert('Incorreto');
            break;
            case 'auth/email-already-in-use':
            alert('E-mail já em uso');
            break;

        }
    }
    console.log('handling');
    console.log(error);
}

buttonSignUp.addEventListener('click', () => {
    firebaseAuth.createUseWithEmailAndPassword(inputEmail.value, inputPassword.value).then(result => {
            alert ('Conta criada com sucesso');
            console.log(result);
            const user = result.user;
            user.sendEmailVerification().then( r => {
                alert('Um e-mail de confirmação foi enviado');
            }).catch(e => alert ('Houver um erro ao enviar o e-mail'));
        }).catch(handleAuthError);
        });


buttonSignIn.addEventListener('click', () => {
    firebaseAuth.signInWithEmailAndPassword(inputEmail.value, inputPassword.value);
    then(result => {
        console.log(result);
    }).catch(handleAuthError);
    })

