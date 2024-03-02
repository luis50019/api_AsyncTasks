//This function is responsible of validar the schema of user and task
export const validateSchema = (schema) =>(req,res,next)=>{
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        return  res.status(400).json(error.issues);
    }
}