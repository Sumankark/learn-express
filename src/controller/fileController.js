import { serverLink } from "../../config.js";

export let handlefile = (req, res) =>{
    let links = req.files.map((value, i) =>{
        return `${serverLink}/${value.filename}`
        
});

res.json({
    success: true,
    message: "file upload successfully.",
    result: links,
})
}
