function submitQn1() {
            
    // clear previous selections and styles

        document.querySelectorAll("#question1 .options li").forEach(li => {
                li.style.border = "none";
            });

        const selectedOption = document.querySelector("input[name='q1']:checked");
        const feedback = document.getElementById("q1-result");
        


        if (!selectedOption) {
            feedback.textContent = "Please click one option";
            feedback.className = "feedback notice";
            return;
        }

        if (selectedOption.id === "q1-a") {
            document.getElementById("li-q1-a").style.border = "3px solid green";
            feedback.textContent = "Correct";
            feedback.className = "feedback correct";
        } else if (selectedOption.id === "q1-b"){
            document.getElementById("li-q1-b").style.border = "3px solid red"; 
            document.getElementById("li-q1-a").style.border = "3px solid green";
            feedback.textContent = "Wrong";
            feedback.className = "feedback wrong";
        } else if (selectedOption.id === "q1-c"){
            document.getElementById("li-q1-c").style.border = "3px solid red"; 
            document.getElementById("li-q1-a").style.border = "3px solid green";
            feedback.textContent = "Wrong";
            feedback.className = "feedback wrong";
        } else if (selectedOption.id === "q1-d"){
            document.getElementById("li-q1-d").style.border = "3px solid red"; 
            document.getElementById("li-q1-a").style.border = "3px solid green";
            feedback.textContent = "Wrong";
            feedback.className = "feedback wrong";
        }
         
    }

function submitQn2() {
        
    // clear previous selections and styles

        document.querySelectorAll("#question2 .options li").forEach(li => {
                li.style.border = "none";
            });

        const selectedOption = document.querySelector("input[name='q2']:checked");
        const feedback = document.getElementById("q2-result");
        


        if (!selectedOption) {
            feedback.textContent = "Please click one option";
            feedback.className = "feedback notice";
            return;
        }

        if (selectedOption.id === "q2-b") {
            document.getElementById("li-q2-b").style.border = "3px solid green";
            feedback.textContent = "Correct";
            feedback.className = "feedback correct";
        } else if (selectedOption.id === "q2-a"){
            document.getElementById("li-q2-a").style.border = "3px solid red"; 
            document.getElementById("li-q2-b").style.border = "3px solid green";
            feedback.textContent = "Wrong";
            feedback.className = "feedback wrong";
        } else if (selectedOption.id === "q2-c"){
            document.getElementById("li-q2-c").style.border = "3px solid red"; 
            document.getElementById("li-q2-b").style.border = "3px solid green";
            feedback.textContent = "Wrong";
            feedback.className = "feedback wrong";
        } else if (selectedOption.id === "q2-d"){
            document.getElementById("li-q2-d").style.border = "3px solid red"; 
            document.getElementById("li-q2-b").style.border = "3px solid green";
            feedback.textContent = "Wrong";
            feedback.className = "feedback wrong";
        }
            
    }

function submitQn3() {
        
    // clear previous selections and styles
    document.querySelectorAll("#question3 .options li").forEach(li => {
            li.style.border = "none";
        });

    const selectedOption = document.querySelector("input[name='q3']:checked");
    const feedback = document.getElementById("q3-result");

    if (!selectedOption) {
        feedback.textContent = "Please click one option";
        feedback.className = "feedback notice";
        return;
    }

    if (selectedOption.id === "q3-c") {
        document.getElementById("li-q3-c").style.border = "3px solid green";
        feedback.textContent = "Correct";
        feedback.className = "feedback correct";
    } else if (selectedOption.id === "q3-b"){
        document.getElementById("li-q3-b").style.border = "3px solid red"; 
        document.getElementById("li-q3-c").style.border = "3px solid green";
        feedback.textContent = "Wrong";
        feedback.className = "feedback wrong";
    } else if (selectedOption.id === "q3-a"){
        document.getElementById("li-q3-a").style.border = "3px solid red"; 
        document.getElementById("li-q3-c").style.border = "3px solid green";
        feedback.textContent = "Wrong";
        feedback.className = "feedback wrong";
    } else if (selectedOption.id === "q3-d"){
        document.getElementById("li-q3-d").style.border = "3px solid red"; 
        document.getElementById("li-q3-c").style.border = "3px solid green";
        feedback.textContent = "Wrong";
        feedback.className = "feedback wrong";
    }
            
    }

function submitQn4() {
    
    // clear previous selections and styles
    document.querySelectorAll("#question4 .options li").forEach(li => {
            li.style.border = "none";
        });

    const selectedOption = document.querySelector("input[name='q4']:checked");
    const feedback = document.getElementById("q4-result");

    if (!selectedOption) {
        feedback.textContent = "Please click one option";
        feedback.className = "feedback notice";
        return;
    }

    if (selectedOption.id === "q4-d") {
        document.getElementById("li-q4-d").style.border = "3px solid green";
        feedback.textContent = "Correct";
        feedback.className = "feedback correct";
    } else if (selectedOption.id === "q4-b"){
        document.getElementById("li-q4-b").style.border = "3px solid red"; 
        document.getElementById("li-q4-d").style.border = "3px solid green";
        feedback.textContent = "Wrong";
        feedback.className = "feedback wrong";
    } else if (selectedOption.id === "q4-a"){
        document.getElementById("li-q4-a").style.border = "3px solid red"; 
        document.getElementById("li-q4-d").style.border = "3px solid green";
        feedback.textContent = "Wrong";
        feedback.className = "feedback wrong";
    } else if (selectedOption.id === "q4-c"){
        document.getElementById("li-q4-c").style.border = "3px solid red"; 
        document.getElementById("li-q4-d").style.border = "3px solid green";
        feedback.textContent = "Wrong";
        feedback.className = "feedback wrong";
    }
            
    }

function submitQn5() {
        
    // clear previous selections and styles

        document.querySelectorAll("#question5 .options li").forEach(li => {
                li.style.border = "none";
            });

        const selectedOption = document.querySelector("input[name='q5']:checked");
        const feedback = document.getElementById("q5-result");
        


        if (!selectedOption) {
            feedback.textContent = "Please click one option";
            feedback.className = "feedback notice";
            return;
        }

        if (selectedOption.id === "q5-a") {
            document.getElementById("li-q5-a").style.border = "3px solid green";
            feedback.textContent = "Correct";
            feedback.className = "feedback correct";
        } else if (selectedOption.id === "q5-b"){
            document.getElementById("li-q5-b").style.border = "3px solid red"; 
            document.getElementById("li-q5-a").style.border = "3px solid green";
            feedback.textContent = "Wrong";
            feedback.className = "feedback wrong";
        } else if (selectedOption.id === "q5-c"){
            document.getElementById("li-q5-c").style.border = "3px solid red"; 
            document.getElementById("li-q5-a").style.border = "3px solid green";
            feedback.textContent = "Wrong";
            feedback.className = "feedback wrong";
        } else if (selectedOption.id === "q5-d"){
            document.getElementById("li-q5-d").style.border = "3px solid red"; 
            document.getElementById("li-q5-a").style.border = "3px solid green";
            feedback.textContent = "Wrong";
            feedback.className = "feedback wrong";
        }
            
    }