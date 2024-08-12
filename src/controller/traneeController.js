

export let createTrainee = async (req, res) =>{
    let traineeData = req.body;

    try{
        let result = await Trainee.create(traineeData);
        res.json({
            success: true,
            message:"trainees created successfully.",
            result: result,
        });
    } catch(error){
        res.json({
            success:false,
            message:error.message,
        });
    }
}

export let readTrainee = async (req, res) =>{
    try{
        let result = await Trainee.find({});

        res.json({
            success: true,
            message: "Trainee read successfully.",
            result: result,
        });
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        });

    }
}
