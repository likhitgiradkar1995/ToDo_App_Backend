module.exports = {
    attributes:
    {
        title: { type: 'string', required: true },
        description :{type:'string',required:true},
        //one to many association 
        users:
        {
            model: 'User',
            columnName: 'userId',
            required:true
        }
    },
};