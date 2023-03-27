const { Schema, model, Types } = require('mongoose');

const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 200,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true,
    },
  reaction: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount')
.get(function () {
  return this.reaction.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
