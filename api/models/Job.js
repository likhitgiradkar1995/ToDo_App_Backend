/**
 * Job.js *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    title: { type: 'string',required:true },
    //one to one association
    jobDetail:{
      model: 'JobDetail',
      columnName: 'jobDetailId',
      required: true
    },

    //one to many association
    company:{
      model: 'Company',
      columnName: 'companyId',
      required: true
    },
    // candidates:{
    //   collection: 'candidate',
    //   via: 'job',
    //   through: 'application'
    // }

  },

};

