module.exports = {
    async create(req, res) {
        try {
            let param = req.allParams();
            if (!param.email)
                return res.badRequest({ err: "email is required field!" })
            const results = await User.create({
                email: param.email,
                password: param.password
            });
            return res.ok(results);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async find(req, res) {
        try {
            const users = await User.find({}).populate('tasks')
            //const users = await User.find()
            //console.log(users)
            return res.ok(users);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async findOne(req, res) {
        try {
            const usr = await User.findOne({
                id: req.params.id
            }).populate('tasks');
            return res.ok(usr);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async update(req, res) {
        try {
            let param = req.allParams();
            console.log(param);
            let attribute = {};
            if (param.email)
                attribute.email = param.email;
            if (param.password)
                attribute.password = param.password;
            if (param.isActive)
                attribute.isActive = param.isActive;
            const result = await User.update({
                id: req.params.id
            }, attribute);
            return res.ok(result)
        }
        catch (err) {
            res.serverError(err);
        }
    },
    async delete(req, res) {
        try {
            const results = await User.destroy({ id: req.params.id })
            res.ok(results);
        }
        catch (err) {
            res.serverError(err)
        }
    }
}