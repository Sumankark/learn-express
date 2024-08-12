
export let handleImage = (req, res) =>{
    let links = req.files.map((value, i) =>{
        return `http:localhost:8000/${value.filename}`
        
});

res.json({
    success: true,
    message: "file upload successfully.",
    result: links,
})
}
