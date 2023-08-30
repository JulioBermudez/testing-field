// let activeNote = {};
let submitBtnEl = $('#submitBtn');

if (window.location.pathname === '/') {

    submitBtnEl.click((event) =>{
        event.preventDefault();
        let userNameEl = $('#inputUserName').val();
        let txtCommentEl = $('#txtComment').val();
        handleNoteSave(userNameEl,txtCommentEl);
        })
        
}

const handleNoteSave = (userNameEl,txtCommentEl) => {
    const newNote = {
        user_name: userNameEl,
        comment: txtCommentEl,
    };
    saveNote(newNote);
   
}

const saveNote = (newNote) => {
    fetch('/api/index', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(newNote),
    });
}





