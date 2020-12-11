module.exports = {
    async  create(req,res)
    {
        try
        {
            //fetch all request data 
            let param=req.allParams();
            if(!param.name)
                return res.badRequest({err:"name is required field!"})
            //create document 
            const results= await Company.create({
                name:param.name,
                city:param.city,
                address:param.address
            });
                return res.ok(results);
            }
            catch(err)
            {
                return res.serverError(err);
            }

    },
    async find(req,res)
    {
        try
        {   
            const companies= await Company.find();
            return res.ok(companies);
        }
        catch(err)
        {
            return res.serverError(res);
        }
    },
    async findOne(req,res)
    {
        try
        {
          
            const company=await Company.findOne({
                id:req.params.id
            });
            return res.ok(company);
        }
        catch(err)
        {
            return res.serverError(err);
        }
    },
    async update(req,res)
    {
        try{

            let param=req.allParams;
            let attribute={};
            if(param.name)
                attribute.name=param.name;
            if(param.city)
                attribute.city=param.city;
            if(param.address)
                attribute.address=param.address;
            const result =await Company.update({id:req.params.id},attribute);
           return res.ok(result)  
            
        }
        catch(err)
        {
            res.serverError(err);
        }
    },
    async delete(req,res)
    {
        try
        {
            const results=await Company.destroy({
                id:req.params.id
            })
            res.ok(results);
        }
        catch(err)
        {
            res.serverError(err)
        }
    }
    
}