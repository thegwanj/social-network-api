const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }    
);

const User = model('User', userSchema);

module.exports = User;