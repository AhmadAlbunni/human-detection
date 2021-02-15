$('#file-form').on('submit' , function(e){
    e.preventDefault();
    const  file = $('#file-form input').prop('files')[0];
    
    const data = new FormData();
    
    data.append('file', file);

    fetch('http://localhost:5000/api/file' , {
        method : 'POST', 
        body : data
    }).then(res => {
        console.log('success' , res)
    }).catch(err => console.log('error', err));
    
})