// const task = require("../models/task");

module.exports = {
    /** * `JobController1.create()` */
    create: async function (req, res) {
        try {
            //console.log(req.allParams());
            let param = req.allParams();
          
            // if (!param.task.title) {
            //     return res.badRequest({ err: 'title is required field' });
            // }
            // if (!param.task.description) {
            //     return res.badRequest({ err: 'description is required field' });
            // }
           
            const tasks = await Task.create({ title:param.title,description:param.description, users:param.userId }).fetch();
            //const tasks=await Task.create({title:param.task.title,description:param.task.description,users:param.task.userId}).fetch();
            return res.ok(tasks);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    find: async function (req, res) {
        try {
            const tasks = await Task.find();
            return res.ok(tasks);
            // const jobs = await task.find({}).populate('jobDetail1')
            // return res.ok(jobs);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async update(req, res) {
        try {
            let param = req.allParams();
            //console.log(param);
            let attribute = {};
            if (param.title)
                attribute.title = param.title;
            if (param.description)
                attribute.description = param.description;
            const result = await Task.update({
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
            const results = await Task.destroy({ id: req.params.id })
            res.ok(results);
        }
        catch (err) {
            res.serverError(err)
        }
    }

}